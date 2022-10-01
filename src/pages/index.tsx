import type { NextPage } from "next";
import Head from "next/head";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Globe from "../components/globe";
import Header from "../components/header";

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
        <title>le globe | uwu</title>
        <meta name="description" content="le gwobe rawr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-500">
        <Header />
        <section className="flex justify-center">
          <Globe wind={size} />
        </section>
        <Aside />
        <Footer />
      </main>
    </>
  );
};

export default Home;
