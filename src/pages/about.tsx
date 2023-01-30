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
        {/* page 1 */}
        <ParallaxLayer offset={0} speed={0} className="container mx-auto">
          <Header />
        </ParallaxLayer>
        {/* iss */}
        <ParallaxLayer
          className="w-screen hover:cursor-pointer container mx-auto"
          speed={0}
          offset={0.1}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <picture>
            <source srcSet="/images/iss.png" />
            <img alt="iss" className="absolute grid" />
          </picture>
          <picture>
            <source srcSet="/images/star.png" />
            <img alt="stars" className="absolute" />
          </picture>
        </ParallaxLayer>
        {/* stars this is making buttons dead */}
        {/* <ParallaxLayer className="w-[60%] ml-[60%]">
          <picture>
            <source srcSet="/images/star.png" />
            <img alt="stars" className="" />
          </picture>
        </ParallaxLayer> */}
        {/* page 2 */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          className="hover:cursor-pointer"
          onClick={() => parallax.current.scrollTo(2)}
        >
          <div className="flex items-center justify-center h-screen container mx-auto gap-10">
            <div className="m-12 h-screen">
              <picture>
                <source srcSet="/images/group.png" />
                <img className="" alt="group" />
              </picture>
              <picture>
                <source srcSet="/images/moon.png" />
                <img className="" alt="moon" />
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
          <div className="flex items-center justify-center h-screen gap-10">
            <AboutPage3 />
            <picture className="w-1/2 grid justify-center">
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
