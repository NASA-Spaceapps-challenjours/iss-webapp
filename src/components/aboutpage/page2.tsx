const Page2 = () => {
  return (
    <div className="text-white font-mono font-bold text-sm md:text-base p-5">
      <div className="text-center">
        <h1 className="text-4xl">About Us</h1>
        <br />
      </div>
      <div>
        <div className="text-center">
          <h2>-----track the iss-----</h2>
        </div>
        <p>
          What is the ISS? It is a large spacecraft that orbits around the
          Earth. It is where the astronauts and cosmonauts live, as well as a
          science laboratory. The ISS was assembled in space, by the astronauts
          themselves!
        </p>
        <br />
      </div>
      <div className="text-center">
        <div>
          <h2>-----Challenjours-----</h2>
        </div>
        <div className="flex gap-2 justify-center">
          <img src="/images/icon-helmet.png" alt="Adrian Yip"></img>
          <p>Adrian Yip</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, UI UX Lead</div>

        <div className="flex gap-2 justify-center">
          <img src="/images/icon-helmet.png" alt="Benjamin Serrano"></img>
          <p>Benjamin Serrano</p>
        </div>
        <div>Computer Science, WSU, Backend Dev, Infrastructure</div>

        <div className="flex gap-2 justify-center">
          <img src="/images/icon-helmet.png" alt="Jacob Singers"></img>
          <p>Jacob Singers</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, UX Designer</div>

        <div className="flex gap-2 justify-center">
          <img src="/images/icon-helmet.png" alt="Bao-Van Nguyen"></img>
          <p>Bao-Van Nguyen</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, Project Manager</div>

        <div className="flex gap-2 justify-center">
          <img src="/images/icon-helmet.png" alt="Rebecca Soza"></img>
          <p>Rebecca Soza</p>
        </div>
        <div>Computer Science, WSU, Frontend Dev, Web Developer</div>
        <br />
      </div>

      <div className="text-center">
        <h2>-----Attributions-----</h2>
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
};

export default Page2;
