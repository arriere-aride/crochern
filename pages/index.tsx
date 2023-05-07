import {
  DesignPage,
  OnTargetEntityClick,
  OnToolBarEntityClick,
} from "@/components";
import { tools } from "@/data";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const gridId = "design-grid-id";
  const [_, setCurrentGridProps] =
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

      <DesignPage
        splashScreenProps={{
          image: { src: "/cover.jpg", alt: "" },
        }}
        gridProps={{
          baseScale: 2,
          onTargetEntityClick:
            OnTargetEntityClick,
        }}
        toolBarProps={{
          tools,
          handleClick: OnToolBarEntityClick,
        }}
      />
    </>
  );
}
