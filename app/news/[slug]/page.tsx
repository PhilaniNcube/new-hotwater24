import { getArticle } from "@/sanity/sanity-utils";

const page = async ({params: {slug}}: {params:{slug:string}}) => {

  const article = await getArticle(slug)

  return <div>page</div>;
};
export default page;
