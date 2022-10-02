import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ISS() {
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
          <div className="flex justify-center">
            <ParallaxLayer
              offset={1.0}
              speed={0.5}
              style={{
                display: "flex-column",
                justifyContent: "",
                alignItems: "center",
                color: "white",
                fontStyle: "italic",
                height: 800,
                width: 350,
                marginLeft: 850,
                marginTop: 100
              }}
            >
              <div className='space-y-1'>
                <h1 className='text-7xl'>About Us</h1>
                <h2 className='px-14 text-2xl'>-----track the iss-----</h2>
                <p>What's even better than tracking the Internation Space Station?</p>
                <br />
                <h2 className='px-12 text-2xl'>-----Challenjours-----</h2>

                <div className="justify-content">
                  <div className="column px-12">
                    <img src="" alt="Rebecca Soza"></img>
                  </div>
                  <div className="column px-12">
                    <img src="" alt="Bao-Van Nguyen"></img>
                  </div>
                  <div className="column px-12">
                    <img src="" alt="Jacob Singers"></img>
                  </div>
                  <div className="column px-12">
                    <img src="" alt="Adrian Yip"></img>
                  </div>
                  <div className="column px-12">
                    <img src="" alt="Benjamin Serrano"></img>
                  </div>
                </div>
                <div className="row">
                  <div className="column px-12">
                    <p>Rebecca Soza</p>
                  </div>
                  <div className="column px-12">
                    <p>Bao-Van Nguyen</p>
                  </div>
                  <div className="column px-12">
                    <p>Jacob Singers</p>
                  </div>
                  <div className="column px-12">
                    <p>Adrian Yip</p>
                  </div>
                  <div className="column px-12">
                    <p>Benjamin Serrano</p>
                  </div>
                </div>
                <div className="row">
                  <div className="column px-12">
                    <p>About Rebecca</p>
                  </div>
                  <div className="column px-12">
                    <p>About Bao-Van</p>
                  </div>
                  <div className="column px-12">
                    <p>About Jacob</p>
                  </div>
                  <div className="column px-12">
                    <p>About Adrian</p>
                  </div>
                  <div className="column px-12">
                    <p>About Benjamin</p>
                  </div>
                </div>
                <h2 className='px-14 text-2xl'>-----Attributions-----</h2>
                <a href="https://www.npmjs.com/package/react-lottie">React Lottie</a>
                <br />
                <a href="https://react-spring.dev/components/parallax">React Spring Paralax</a>
                <br />
                <a href="https://worldwind.arc.nasa.gov/autodocs/WebWorldWind/"> WorldWind </a>
                <br />
                <a href="https://spotthestation.nasa.gov/"> Spot the Station </a>
                <br />
                <a href="https://github.com/joshuaferrara/go-satellite"> Go Satellite </a>
                <br />
                <a href="https://github.com/gin-gonic/gin"> Gin Gonic</a>
                <br />
                <a href="https://github.com/gin-gonic/contrib"> Gin Gonic Contrib </a>
              </div>
            </ParallaxLayer >
          </div >

          <ParallaxLayer
            offset={1.0}
            speed={3.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.0}
            speed={0.5}
            style={{
              display: "flex-column",
              justifyContent: "",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
              height: 800,
              width: 350,
              marginLeft: 850,
              marginTop: 100
            }}
          >
            <div className='space-y-1'>
              <h2 className='px-14 text-2xl'>-----User Guide-----</h2>
            </div>
          </ParallaxLayer>
        </Parallax >
      </header >
    </div >
  );
}

export default ISS;
