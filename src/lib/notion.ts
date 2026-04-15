import { Client } from "@notionhq/client";
import { env } from "@/env/server";

let _notion: Client | undefined;

const getNotion = () => {
  if (!_notion) {
    _notion = new Client({ auth: env.NOTION_TOKEN });
  }
  return _notion;
};

const sourceMap: Record<string, string> = {
  hero: "Community",
  retreat: "Retreat",
  book: "Book",
  final: "Retreat",
};

export const addSubscriber = async (
  email: string,
  source: string,
  firstName?: string,
) => {
  return getNotion().pages.create({
    parent: { database_id: env.NOTION_SUBSCRIBERS_DB_ID },
    properties: {
      Name: {
        title: [{ text: { content: firstName || email } }],
      },
      Email: {
        email: email,
      },
      Source: {
        select: { name: sourceMap[source] || source },
      },
    },
  });
};
