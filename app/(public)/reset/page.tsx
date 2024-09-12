import Reset from "./ResetPassword";

export const dynamic = "force-static";

const page = () => {
  return <main className="container py-10">
    <Reset />
  </main>;
};
export default page;
