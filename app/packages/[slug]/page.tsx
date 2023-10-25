const page = async ({params: {slug}}: {params: {slug: string}}) => {
  return <main className="container py-10">{slug}</main>;
};
export default page;
