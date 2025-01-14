import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className="flex h-[100dvh] scale-125 items-center justify-center">
        <SignIn fallbackRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}
