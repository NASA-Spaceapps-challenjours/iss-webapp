import type { NextPage } from "next";
import Head from "next/head";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Globe from "../components/globe";
import Header from "../components/header";
import ISSTimelineSlider from "../components/ISSTimelineSlider";

import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Home: NextPage = () => {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>ISS Tracker | Home</title>
        <meta
          name="description"
          content="visualizing and tracking the international space station (ISS). other functions like space debris and point of views of items too!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <>
          <Header />
          <section className="flex justify-center">
            <Globe wind={size} />
            <Aside />
            <ISSTimelineSlider />
          </section>
          <Footer />
        </>
      </main>
    </>
  );
};

export default Home;
