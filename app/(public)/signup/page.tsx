import SignupForm from "./signup-form";

export const metadata = {
  title: "Sign Up | Hotwater24",
  description: "Create your Hotwater24 account",
};

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-12 px-4">
      <SignupForm />
    </main>
  );
}
