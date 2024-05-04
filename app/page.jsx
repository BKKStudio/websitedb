import prisma from "@/lib/prisma";
import Image from "next/image";

async function getGameTables() {
  const datas = await prisma.GamesTable.findMany()
  return datas;
}

export default async function Home() {
  const datas = await getGameTables();
  console.log({datas});
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {datas.map((data) => {
          return (
            <span key={data.id}>{data.gamename}</span>
          )
        })}
    </main>
  );
}
