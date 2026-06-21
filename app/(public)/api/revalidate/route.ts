
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  revalidateTag("articles", { expire: 0 });
  revalidateTag("geysers", { expire: 0 });
  revalidateTag("landing-pages", { expire: 0 });
  revalidateTag("navigation", { expire: 0 });

  revalidatePath("/news", "layout");
  revalidatePath("/", "layout");

  return NextResponse.json({ status: 200 });
}
