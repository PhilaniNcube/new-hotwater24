import { getArticles } from "@/sanity/sanity-utils";

const page = async () => {

  const news = await getArticles()

  console.log({news})

  return <main className="py-10 container">page</main>;
};
export default page;
