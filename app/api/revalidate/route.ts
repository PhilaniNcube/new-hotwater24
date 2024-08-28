
import { createClient } from "@/utils/supabase/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req:Request) {

  // revalidate all news articles from the Sanity webook
  const body = await req.json()

  console.log("Revalidating news articles", body)

  revalidatePath('/news', "layout")
  revalidatePath('/', "layout")

	return NextResponse.json(
		{ status: 200 },
	);
}
