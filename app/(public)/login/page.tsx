import LoginForm from "./login-form";

export const metadata = {
  title: "Login | Hotwater24",
  description: "Login to your Hotwater24 account",
};

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-12 px-4">
      <LoginForm />
    </main>
  );
}
