"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, type SubscribeInput } from "@/lib/schemas";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { ApiResponse } from "@/types";

interface EmailCaptureProps {
  readonly source: "hero" | "book" | "final";
  readonly variant?: "inline" | "card";
  readonly showName?: boolean;
  readonly ctaText?: string;
  readonly className?: string;
}

export const EmailCapture = ({
  source,
  variant = "inline",
  showName = false,
  ctaText = "Get the Strategy",
  className,
}: EmailCaptureProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { source, honeypot: "" },
  });

  const onSubmit = async (data: SubscribeInput) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json: ApiResponse = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setServerMessage(json.message);
      } else {
        setStatus("error");
        setServerMessage(json.message);
      }
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2",
          variant === "card" && "justify-center py-8",
          className,
        )}
      >
        <span className="text-[var(--gold)] text-lg">&#10022;</span>
        <p className="font-[family-name:var(--font-dm-sans)] text-sm">
          {serverMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex flex-col gap-4",
        variant === "inline" && "sm:flex-row sm:items-end sm:gap-3",
        variant === "card" &&
          "rounded-[2px] border border-[var(--divider-dark)] bg-[var(--bg-elevated)] p-6 lg:p-8",
        className,
      )}
    >
      {showName && (
        <div className={cn(variant === "inline" ? "sm:flex-1" : "w-full")}>
          <FormField
            label="First name"
            placeholder="First name"
            registration={register("firstName")}
            error={errors.firstName?.message}
          />
        </div>
      )}

      <div className={cn(variant === "inline" ? "sm:flex-1" : "w-full")}>
        <FormField
          label="Email"
          type="email"
          placeholder="Your email"
          registration={register("email")}
          error={errors.email?.message}
        />
      </div>

      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" {...register("source")} />

      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className={cn(variant === "card" && "mt-2 w-full")}
      >
        {status === "loading" ? "Sending..." : ctaText}
      </Button>

      {status === "error" && (
        <p className="text-xs text-[var(--crimson)]">{serverMessage}</p>
      )}
    </form>
  );
};
