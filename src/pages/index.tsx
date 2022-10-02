import type { NextPage } from "next";
import Head from "next/head";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Globe from "../components/globe";
import Header from "../components/header";
import Loader2 from "../components/Loader2";

import { useState, useEffect } from "react";
import ISSTimelineSlider from "../components/ISSTimelineSlider";

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
  const [completed, setCompleted] = useState(undefined);

  return (
    <>
      {!completed ? (
        <Loader2 completed={completed} setCompleted={setCompleted} />
      ) : (
        <>
          <Head>
            <title>ISS Tracker | Home</title>
            <meta name="description" content="le gwobe rawr" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="bg-slate-500">
            <Header />
            <section className="flex justify-center">
              <Globe wind={size} />
              <Aside />
              <Footer />
              <ISSTimelineSlider />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
