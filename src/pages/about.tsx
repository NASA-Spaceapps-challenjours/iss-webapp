import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import AboutPage1 from "../components/aboutpage/page1";
import AboutPage2 from "../components/aboutpage/page2";
import AboutPage3 from "../components/aboutpage/page3";
import Header from "../components/header";

function About() {
  const use = useRef();
  return (
    <div className="bg-black">
      <Parallax pages={3} style={{ top: "0", left: "0", background: "black" }}>
        {/* page 1 */}
        <ParallaxLayer offset={0} speed={1} style={{}}>
          <Header />
          <AboutPage1 />
        </ParallaxLayer>
        {/* page 2 */}
        <ParallaxLayer offset={1} speed={1} style={{}}>
          <AboutPage2 />
        </ParallaxLayer>
        {/* page 3 */}
        <ParallaxLayer offset={2} speed={1} style={{}}>
          <AboutPage3 />
        </ParallaxLayer>
        {/* stars background page1 */}
        <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: -1 }}>
          <img className="" src="/images/stars.png" alt="stars" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
