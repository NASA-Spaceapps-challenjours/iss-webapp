import React from "react";

export default function AboutMeInfo() {
  return (
    <div className="space-y-1 font-mono font-bold ">
      <div className="font-mono font-bold place-content-center">
        {" "}
        <h1 className="text-7xl">About Us</h1>
      </div>
      <br />
      <div className="font-mono font-bold place-content-center">
        <div className="flex flex-row font bold place-content-center">
          <h2 className="text-sm">-----track the iss-----</h2>
        </div>
        <br />
        <p>What's even better than tracking the Internation Space Station?</p>
        <br />
        <div className="flex flex-row font bold place-content-center">
          <h2 className="text-base font-bold">-----Challenjours-----</h2>
        </div>
      </div>

      <div className="justify-content flex-col font-mono">
        <div className="flex flex-row font bold place-content-center">
          <img src="/images/astronaut.png" alt="Adrian Yip"></img>
          <p>Adrian Yip</p>
        </div>
        <div>Computer Science, WSU, Fronend Dev, UI UX Lead</div>

        <div className="flex flex-row font bold place-content-center">
          <img src="/images/astronaut.png" alt="Benjamin Serrano"></img>
          <p>Benjamin Serrano</p>
        </div>
        <div>Computer Science, WSU, Backend Dev, Infrastructure</div>

        <div className="flex flex-row font bold place-content-center">
          <img src="/images/astronaut.png" alt="Jacob Singers"></img>
          <p>Jacob Singers</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, UX Designer</div>

        <div className="flex flex-row font bold place-content-center">
          <img src="/images/astronaut.png" alt="Bao-Van Nguyen"></img>
          <p>Bao-Van Nguyen</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, Project Manager</div>

        <div className="flex flex-row font-bold place-content-center">
          <img src="/images/astronaut.png" alt="Rebecca Soza"></img>
          Rebecca Soza
        </div>
        <div>Computer Science, WSU, Frontend Dev, Web Developer</div>

        <br />
      </div>

      <div className="Attributes">
        <h2 className="flex flex-row font-bold place-content-center">
          -----Attributions-----
        </h2>
        <br />
        <a href="https://www.npmjs.com/package/react-lottie">React Lottie</a>
        <br />
        <a href="https://react-spring.dev/components/parallax">
          React Spring Paralax
        </a>
        <br />
        <a href="https://worldwind.arc.nasa.gov/autodocs/WebWorldWind/">
          {" "}
          WorldWind{" "}
        </a>
        <br />
        <a href="https://spotthestation.nasa.gov/"> Spot the Station </a>
        <br />
        <a href="https://github.com/joshuaferrara/go-satellite">
          {" "}
          Go Satellite{" "}
        </a>
        <br />
        <a href="https://github.com/gin-gonic/gin"> Gin Gonic</a>
        <br />
        <a href="https://github.com/gin-gonic/contrib"> Gin Gonic Contrib </a>
        <br />
        <a href="https://simplemaps.com/data/world-cities"> simplemaps</a>
      </div>
    </div>
  );
}
