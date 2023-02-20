import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import AboutPage1 from "../components/aboutpage/page1";
import AboutPage2 from "../components/aboutpage/page2";
import AboutPage3 from "../components/aboutpage/page3";
import Header from "../components/header";

function About() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="bg-black w-screen">
      <Parallax
        pages={3}
        ref={parallax}
        className="w-full bg-black
      bg-[url('/images/bg-stars.png')] bg-repeat-y bg-cover"
      >
        {/* page 1 header */}
        <ParallaxLayer offset={0} speed={0} className="container mx-auto">
          <Header />
        </ParallaxLayer>
        {/* iss and asteroids */}
        <ParallaxLayer
          className="w-screen hover:cursor-pointer container mx-auto"
          speed={0}
          offset={0.1}
          onClick={() => parallax.current.scrollTo(1)}
        >
          {/* iss and star */}
          <ParallaxLayer speed={0.25}>
            <picture>
              <source srcSet="/images/iss.png" />
              <img
                alt="iss"
                className="absolute grid my-auto mx-auto h-screen w-screen object-contain"
              />
            </picture>
            <picture>
              <source srcSet="/images/star.png" />
              <img alt="stars" className="absolute" />
            </picture>
          </ParallaxLayer>
          {/* asteroid bot left */}
          <ParallaxLayer
            offset={0.98}
            speed={4}
            style={{ opacity: 0.6, width: "60%", marginRight: "30%" }}
          >
            <img src="/images/astroid2.png" alt="astroid2" />
          </ParallaxLayer>
          {/* asteroid top right */}
          <ParallaxLayer
            offset={0}
            speed={1.25}
            style={{ opacity: 0.8, width: "25%", marginLeft: "70%" }}
          >
            <img src="/images/astroid.png" alt="astroid" />
          </ParallaxLayer>
          {/* star right */}
          <ParallaxLayer speed={0.1}>
            <ParallaxLayer className="w-[60%] ml-[60%]">
              <picture>
                <source srcSet="/images/star.png" />
                <img alt="stars" className="" />
              </picture>
            </ParallaxLayer>
          </ParallaxLayer>
        </ParallaxLayer>
        {/* page 2 */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          className="hover:cursor-pointer h-screen container mx-auto w-screen"
          onClick={() => parallax.current.scrollTo(2)}
        >
          <div className="flex items-center justify-center h-screen mx-auto gap-10">
            <div className="absolute md:relative mx-auto my-10 opacity-40 md:opacity-100 -z-10">
              <picture>
                <source srcSet="/images/group.png" />
                <img className="m-auto" alt="group" />
              </picture>
              <picture>
                <source srcSet="/images/moon.png" />
                <img className="m-auto" alt="moon" />
              </picture>
            </div>
            <AboutPage2 />
          </div>
        </ParallaxLayer>
        {/* page 3 */}
        <ParallaxLayer
          offset={2}
          speed={1}
          className="container mx-auto hover:cursor-pointer"
          onClick={() => parallax.current.scrollTo(0)}
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-10">
            <AboutPage3 />
            <picture className="absolute opacity-50 md:opacity-100 -z-10 md:relative md:w-1/2 grid justify-center">
              <source srcSet="/images/earth.png" />
              <img className="" alt="earth" />
            </picture>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
