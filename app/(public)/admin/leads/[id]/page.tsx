import Link from "next/link";
import QuoteData from "./QuoteData";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";

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
		<main className="container py-10 mx-auto max-w-7xl">
			<div className="flex items-center justify-between w-full mb-6">
				<h1 className="text-3xl font-medium">Lead Details</h1>
				<div className="flex items-center gap-3">
					<Link href="/admin">
						<Button type="button" variant="outline">Dashboard</Button>
					</Link>
					<Link href="/admin/leads?page=1&page_size=500&search=">
						<Button type="button" variant="outline">Leads</Button>
					</Link>
					<LogoutButton />
				</div>
			</div>
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
