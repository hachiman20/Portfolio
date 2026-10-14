import { promises as fs } from "fs";
import path from "path";

const statsFilePath = path.join(process.cwd(), "data", "site-stats.json");

async function getViews() {
  try {
    const file = await fs.readFile(statsFilePath, "utf8");
    const parsed = JSON.parse(file) as { views?: number };
    return Number(parsed.views ?? 0);
  } catch {
    return 0;
  }
}

export async function GET() {
  const currentViews = await getViews();
  const nextViews = currentViews + 1;

  await fs.writeFile(statsFilePath, JSON.stringify({ views: nextViews }, null, 2), "utf8");

  return Response.json({ views: nextViews });
}
