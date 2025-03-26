import { cookies } from "next/headers";
import QuoteData from "./QuoteData";
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@/utils/supabase/server";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const supabase = await createClient();
    
	const {id} = await params;

	const { data: lead, error } = await supabase
		.from("quotes")
		.select("*")
		.eq("id", Number(id))
		.single();

	if (error) redirect("/admin/leads");

	return (
		<main className="container py-10">
			{error || !lead ? (
				<div>
					<p>Could not fetch the lead/quote</p>
				</div>
			) : (
				<QuoteData lead={lead} />
			)}
		</main>
	);
};
export default page;
