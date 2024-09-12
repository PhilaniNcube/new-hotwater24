
import { createClient } from "@/utils/supabase/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req:Request) {



  revalidatePath('/news', "layout")
  revalidatePath('/', "layout")

	return NextResponse.json(
		{ status: 200 },
	);
}
