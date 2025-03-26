import RequestQuote from "@/components/RequestQuote/request-quote-form";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 

const page = async (props: {
 
  searchParams: SearchParams
}) => {

  const searchParams = await props.searchParams

  const package_name = searchParams.package_name as string 

  return <main>
    <RequestQuote package_name={package_name} />
  </main>;
};
export default page;
