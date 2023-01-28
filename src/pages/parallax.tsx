import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../components/header";

const ParallaxTest = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        speed={0}
        style={{
          display: "cover",
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <span>First Page</span>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0}
        style={{
          display: "cover",
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Second Page</span>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          display: "cover",
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Third Page</span>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxTest;
