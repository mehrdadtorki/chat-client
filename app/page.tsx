import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <div
      className="text-slate-800 grid grid-rows-[20px_1fr_20px] 
        items-center justify-items-center min-h-screen p-8 pb-20 gap-16 
        sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {session ? <div>hello session</div> : <div>you have no session</div>}
    </div>
  );
}
