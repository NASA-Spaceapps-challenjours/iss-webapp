import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ISS() {
  return (
    <div className="bg-black">
      <header className="App-header">
        <Parallax
          pages={2}
          style={{ top: "0", left: "0", background: "black" }}
        >
          <ParallaxLayer
            offset={0}
            speed={2}
            style={{
              display: "cover",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/images/stars.png" alt="stars" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={5}
            factor={3}
            style={{ width: "60%", marginRight: "70%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.25}
            speed={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/images/ISS.png" alt="iss" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={4}
            style={{ width: "60%", marginLeft: "60%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={4}
            style={{ opacity: 0.8, width: "25%", marginLeft: "70%" }}
          >
            <img src="/images/astroid.png" alt="astroid" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.98}
            speed={4}
            style={{ opacity: 0.6, width: "60%", marginRight: "30%" }}
          >
            <img src="/images/astroid2.png" alt="astroid2" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.85}
            speed={5}
            factor={3}
            style={{ width: "60%", marginRight: "70%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.55}
            speed={4}
            style={{ width: "80%", marginLeft: "40%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.25}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1.25}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Hello,
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
}

export default ISS;
