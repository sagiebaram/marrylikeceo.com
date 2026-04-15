import { Client } from "@notionhq/client";
import { env } from "@/env/server";

let _notion: Client | undefined;

const getNotion = () => {
  if (!_notion) {
    _notion = new Client({ auth: env.NOTION_TOKEN });
  }
  return _notion;
};

export const addSubscriber = async (
  email: string,
  source: string,
  firstName?: string,
) => {
  return getNotion().pages.create({
    parent: { database_id: env.NOTION_SUBSCRIBERS_DB_ID },
    properties: {
      Email: { title: [{ text: { content: email } }] },
      Source: { select: { name: source } },
      ...(firstName && {
        Name: { rich_text: [{ text: { content: firstName } }] },
      }),
    },
  });
};
