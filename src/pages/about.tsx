import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import AboutMeInfo from "../components/AboutMeInfo";
import Header from "../components/header";

function About() {
  const use = useRef();
  return (
    <div className="bg-black">
      <header className="App-header">
        <Parallax
          pages={3}
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
            <Header />
            <img className="z-10" src="/images/stars.png" alt="stars" />
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
            offset={1}
            speed={2}
            factor={3}
            style={{
              display: "cover",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/images/stars.png" alt="stars" />
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
            factor={3}
            style={{ width: "80%", marginLeft: "40%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ height: 800, width: 600, marginLeft: 100, marginTop: 100 }}
          >
            <img src="/images/group.png" alt="group-picture" />
            <img src="/images/moon.png" alt="moon" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={3}
            style={{
              display: "flex-column",
              justifyContent: "",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
              height: 800,
              width: 350,
              marginLeft: 850,
              marginTop: 100,
            }}
          >
            <AboutMeInfo />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={4}
            factor={3}
            style={{
              display: "",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/images/stars.png" alt="stars" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={5}
            style={{
              height: 800,
              width: 600,
              marginLeft: 850,
              marginTop: 100,
            }}
          >
            <img src="/images/earth.png" alt="earth" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={5}
            style={{
              display: "flex-col",
              justifyContent: "center",
              alignItems: "center",
              height: 800,
              width: 500,
              marginLeft: 200,
              marginTop: 100,
              color: "white",
              fontStyle: "italic",
            }}
          >
            <div className="flex flex-row font-bold text-2xl underline-offset-2">
              <h2>User Guide</h2>
            </div>
            <div className="flex flex-row font-semibold text-base underline-offset-auto">
              <h3>Earth 3D Rotation</h3>
            </div>
            <div className="flex flex-row italic">
              <p>
                Users can rotate the Earth 360 degrees, to observe the Earth
                while watching the International Space Station rotates around
                the Earth.
              </p>
            </div>

            <div className="flex flex-row font-semibold text-base underline-offset-auto">
              <h3>Track ISS Path</h3>
            </div>

            <div className="flex flex-row italic">
              <p>
                {" "}
                The tracker of the International Space Station displays where
                the ISS is currently and its path 90 minutes ago and where it
                will be 90 minutes later. Users can interact with the slider to
                see where the ISS was or will be at a specific time within the
                90 minutes time frame.
              </p>
            </div>
            <div className="flex flex-row font-semibold text-base underline-offset-auto">
              <h3>Debris Tracker Toggler</h3>
            </div>
            <div className="flex flex-row italic">
              <p>
                Users can interact with the &quot;Debris&quot; button to see
                space debris alerts within the orbital of the ISS.
              </p>
            </div>
            <div className="flex flex-row font-semibold text-base underline-offset-auto">
              <h3>Sighting Opportunities</h3>
            </div>
            <div className="flex flex-row italic">
              <p>
                Users can enter the chosen location to see the prediction of
                time and date the International Space Station Location will pass
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
}

export default About;
