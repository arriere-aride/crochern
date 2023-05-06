/* eslint-disable max-lines */
import {
  Grid,
  OnStashBoxRenderClick,
  OnToolBarEntityClick,
  RenderShadowBox,
  ToolBar,
} from "@/components";
import { tools } from "@/data";
import { SelectTargetEntity } from "@/selectors";
import { Store } from "@/stores";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const hasStash = useSelector(
    (state: Store) =>
      state.moves.memory.length > 0
  );
  const current = SelectTargetEntity()[0];
  const gridId = "design-grid-id";
  const [currentGridProps, setCurrentGridProps] =
    useState<DOMRect | null>(null);

  useEffect(() => {
    const element = document.querySelector(
      `#${gridId}`
    );
    if (element != null) {
      setCurrentGridProps(
        element.getBoundingClientRect()
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Crochern - Crochet Pattern Maker
        </title>
        <meta
          name="description"
          content="make pattern of crochet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
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
            id={gridId}
          />
        </div>
        <div className="w-[28px] absolute z-20 h-full bg-[#484848] ">
          <ToolBar
            tools={tools}
            handleClick={OnToolBarEntityClick}
          />
        </div>
        <div className="flex items-center justify-center h-full mx-2 z-10 relative">
          <div className="absolute h-full w-full m-0 z-30">
            {current?.entity &&
              currentGridProps && (
                <RenderShadowBox
                  active={
                    hasStash &&
                    current.entity != null
                  }
                  currentEntity={current}
                  grid={currentGridProps}
                  onDocumentClick={
                    OnStashBoxRenderClick
                  }
                />
              )}
          </div>
          <div className="w-[960px] ml-[28px] lg:mx-auto h-{700px} md:shadow-sm md:shadow-[#C3A963] grid md:grid-cols-2 gap-0">
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
                  <h1 className="font-bold text-6xl">
                    CROCHERN
                  </h1>
                  <h2 className="text-4xl">
                    Crochet Pattern Maker
                  </h2>
                  <p className="italic text-right">
                    Coming soon
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Link href="https://github.com/arriere-aride/crochern">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                    <Link href="https://6442b05ef9aaa3328e81efe6-onymbnbbwb.chromatic.com/?path=/docs/introduction--docs">
                      <svg
                        width="24"
                        height="24"
                        viewBox="-31.5 0 319 319"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                      >
                        <defs>
                          <path
                            d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z"
                            id="path-1"
                          ></path>
                        </defs>
                        <g>
                          <mask
                            id="mask-2"
                            fill="white"
                          >
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <use
                            fill="#FF4785"
                            fillRule="nonzero"
                            xlinkHref="#path-1"
                          ></use>
                          <path
                            d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
