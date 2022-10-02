import type { NextPage } from "next";
import Head from "next/head";
const mommy: NextPage = () => {
  return (
        <>
            <Head>
                <title>your other mother.</title>
                <meta name="description" content="your other mother." />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <main className="">

                    <h1>About Us</h1>
                <h2>track the iss</h2>
                <p>What's even better than tracking the Internation Space Station? It's tracking it in 3D. The purpose of iss.ict-challenjours is to track the ISS's past, current, and future location while providing a fun, interactive, user-friendly interface.</p>

                <h2>User Guide</h2>
                    <div>
                        <h3>Earth 3D Rotation</h3>
                        <p>Users can rotate the Earth 360 degrees, to observe the Earth while watching the International Space Station rotates around the Earth.</p>
                    </div>
                    <div>
                        <h3>Track ISS Path</h3>
                        <p>The tracker of the International Space Station displays where the ISS is currently and its path 90 minutes ago and where it will be 90 minutes later. Users can interact with the slider to see where the ISS was or will be at a specific time within the 90 minutes time frame.</p>
                    </div>
                    <div>
                        <h3>Debris Tracker Toggler</h3>
                        <p>Users can interact with the "Debris" button to see space debris alerts within the orbital of the ISS.</p>
                    </div>
                    <div>
                        <h3>Sighting Opportunities</h3>
                        <p>Users can enter the chosen location to see the prediction of time and date the International Space Station Location will pass</p>
                    </div>
                <h2>The Challenjours</h2>
                <img src="/images/group.png" alt="group-picture" />
                <p>We are a team of 5 members, Rebecca Soza, Bao-Van Nguyen, Jacob Bradley Singer, Adrian Yip, and Benjamin Serrano. We are Computer Science students at Wichita State University. Initially, we chose Track the ISS because the idea seems interesting to us and it fits our capability the most. As we progress, we realized the importance of the ISS, as well as the lacking of open-source code, as well as educative aspect of all the web applications and applications available out there. Our goal is to create a web-applications that is interactive, friendly-user, where everyone can learn and use, as well as be educative towards users who are interested in the ISS.</p>
                <h2>List of Attributions</h2>
                <p>https://www.npmjs.com/package/react-lottie</p>
                <p>https://react-spring.dev/components/parallax</p>
                <p>https://worldwind.arc.nasa.gov/autodocs/WebWorldWind/</p>
                <p>https://spotthestation.nasa.gov/</p>
                <p>https://github.com/joshuaferrara/go-satellite</p>
                <p>https://github.com/gin-gonic/gin</p>
                <p>https://github.com/gin-gonic/contrib</p>
                <p>ISS API</p>
            </main>
        </>
  );
}

export default mommy;