import { getSheetsData } from "../../lib/sheets";
import { auth } from "@clerk/nextjs/server"
import Link from "next/link";

export default async function Home() {
  // const data = await getSheetsData()
  const { userId } = auth()

  // let href = userId ? '/events' : '/new-user'
  return (
    <main className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Users App</h1>
        <p className="text-2xl text-white/60 mb-4">Here we go</p>
        <Link href={'/events'}>
          <button className="py-2 border border2-sky-500 p-2 rounded bg-cyan-500">Lets get started</button>
        </Link>
      </div>
    </main>
  );
}
