import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen p-2 items-center justify-center">
      <SignUp afterSignUpUrl={"/"} />;
    </div>
  );
}
