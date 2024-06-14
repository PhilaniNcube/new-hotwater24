import RequestQuote from "@/components/RequestQuote/request-quote-form";


const page = ({
  searchParams :{
    package_name
  }
}:{
  searchParams: {
    package_name: string
  }
}) => {
  return <main>
    <RequestQuote package_name={package_name} />
  </main>;
};
export default page;
