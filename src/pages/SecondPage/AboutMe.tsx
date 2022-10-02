import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutMeInfo from "./AboutMeInfo";
import ScrollDown from "./ScrollDown";

function ISS() {
  return (
    <div className="bg-black">
      <header className="App-header">
        <Parallax
          pages={4}
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
            <ScrollDown />
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
            offset={1}
            speed={2}
            factor={4}
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
            factor={50}
            style={{ width: "60%", marginRight: "70%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.55}
            speed={4}
            factor={5}
            style={{ width: "80%", marginLeft: "40%" }}
          >
            <img src="/images/star.png" alt="star" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ width: "70%", marginBottom: "40%" }}
          >
            <img src="/images/earth.png" alt="earth" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.0}
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
            speed={1}
            style={{
              display: "flex-col",
              justifyContent: "",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
            }}
          >
            <img src="/images/group.png" alt="group-picture" />
            <div className="justify-content flex-col font-mono">
              <div className="flex flex-row font bold place-content-center">
                <h1>About Us</h1>
              </div>
              <h2>track the iss</h2>
              <p>
                What's even better than tracking the Internation Space Station?
                It's tracking it in 3D. The purpose of iss.ict-challenjours is
                to track the ISS's past, current, and future location while
                providing a fun, interactive, user-friendly interface.
              </p>

              <h2>User Guide</h2>
              <div>
                <h3>Earth 3D Rotation</h3>
                <p>
                  Users can rotate the Earth 360 degrees, to observe the Earth
                  while watching the International Space Station rotates around
                  the Earth.
                </p>
              </div>
              <div>
                <h3>Track ISS Path</h3>
                <p>
                  The tracker of the International Space Station displays where
                  the ISS is currently and its path 90 minutes ago and where it
                  will be 90 minutes later. Users can interact with the slider
                  to see where the ISS was or will be at a specific time within
                  the 90 minutes time frame.
                </p>
              </div>
              <div>
                <h3>Debris Tracker Toggler</h3>
                <p>
                  Users can interact with the "Debris" button to see space
                  debris alerts within the orbital of the ISS.
                </p>
              </div>
              <div>
                <h3>Sighting Opportunities</h3>
                <p>
                  Users can enter the chosen location to see the prediction of
                  time and date the International Space Station Location will
                  pass
                </p>
              </div>
              <h2>The Challenjours</h2>

              <p>
                We are a team of 5 members, Rebecca Soza, Bao-Van Nguyen, Jacob
                Bradley Singer, Adrian Yip, and Benjamin Serrano. We are
                Computer Science students at Wichita State University.
                Initially, we chose Track the ISS because the idea seems
                interesting to us and it fits our capability the most. As we
                progress, we realized the importance of the ISS, as well as the
                lacking of open-source code, as well as educative aspect of all
                the web applications and applications available out there. Our
                goal is to create a web-applications that is interactive,
                friendly-user, where everyone can learn and use, as well as be
                educative towards users who are interested in the ISS.
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
}

export default ISS;
