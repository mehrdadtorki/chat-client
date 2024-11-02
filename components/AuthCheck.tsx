"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();
  console.log("fifdsbadskfjb as;dfbsadbasdbrst");
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthCheck;
