import Head from "next/head";
import Image from "next/image";
import { Grid } from "@@/components/Grid/Grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crochern - Crochet Pattern Maker</title>
        <meta name="description" content="make pattern of crochet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen bg-gradient-to-b from-[#758918] to-[#9E9A41] ">
        <div className="absolute h-full w-full m-0 z-0">
          <Grid
            grid={{
              strokeWidth: 0.5,
              stroke: "#758918",
              width: "100%",
              height: "100%",
            }}
            cell={{
              strokeWidth: 0.5,
              stroke: "#758918",
              size: 16,
            }}
            separator={{
              strokeWidth: 1,
              stroke: "#9E9A41",
              size: 64,
            }}
          />
        </div>
        <div className="flex items-center justify-center h-full mx-2 z-10 relative">
          <div className="w-[960px] mx-auto  h-{700px} md:shadow-sm md:shadow-[#C3A963] grid md:grid-cols-2 gap-0">
            <div className="col-span-1">
              <Image
                src="/cover.jpg"
                className="my-4 w-50 mx-auto md:my-0 md:w-full"
                width={300}
                height={700}
                alt=""
              />
            </div>
            <div className="col-span-1 md:bg-[#F8FAB1] text-[#373722] ">
              <div className="flex items-center justify-center h-full">
                <div>
                  <h1 className="font-bold text-6xl">CROCHERN</h1>
                  <h2 className="text-4xl">Crochet Pattern Maker</h2>
                  <p className="italic text-right">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
