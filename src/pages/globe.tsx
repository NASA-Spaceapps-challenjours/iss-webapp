"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
var satellite = require("satellite.js");

import dynamic from "next/dynamic";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

const TLE = `ISS (ZARYA)             
1 25544U 98067A   23214.68344063  .00018658  00000+0  33362-3 0  9993
2 25544  51.6413  98.1594 0000740 145.9323 307.5057 15.50042922409006`;
const ISS_TLE =
  "http://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=tle";

const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 80; // km
const TIME_STEP = 17;
// const TIME_STEP = 3 * 1000; // per frame

const globe = () => {
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [globeRadius, setGlobeRadius] = useState();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // time ticker
    (function frameTicker() {
      requestAnimationFrame(frameTicker);
      setTime((time) => new Date(+time + TIME_STEP));
    })();
  }, []);

  useEffect(() => {
    // load satellite data
    // const name = TLE.split("\n")[0];
    // const satrecData = satellite.twoline2satrec(
    //   TLE.split("\n")[1],
    //   TLE.split("\n")[2]
    // );
    // setSatData([{ satrec: satrecData, name: "ISS" }]);
    // console.log("satData", satData);

    fetch(ISS_TLE)
      .then((r) => r.text())
      .then((rawData) => {
        const TLEdata = rawData.split("\n");

        const name = TLEdata[0];
        const satrec = satellite.twoline2satrec(TLEdata[1], TLEdata[2]);
        setSatData([{ name, satrec }]);
      });
    // fetch("//unpkg.com/globe.gl/example/datasets/space-track-leo.txt")
    //   .then((r) => r.text())
    //   .then((rawData) => {
    //     const tleData = rawData
    //       .replace(/\r/g, "")
    //       .split(/\n(?=[^12])/)
    //       .filter((d) => d)
    //       .map((tle) => tle.split("\n"));
    //     const satData = tleData
    //       .map(([name, ...tle]) => ({
    //         satrec: satellite.twoline2satrec(...tle),
    //         name: name?.trim().replace(/^0 /, ""),
    //       }))
    //       // exclude those that can't be propagated
    //       .filter((d) => !!satellite.propagate(d.satrec, new Date()).position)
    //       .slice(0, 1500);

    //     // console.log("tleData", tleData);
    //     console.log("satData", satData);
    //     setSatData(satData);
    //   });
  }, []);

  const objectsData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = satellite.gstime(time);
    return satData.map((d) => {
      const eci = satellite.propagate(d.satrec, time);
      if (eci.position) {
        const gdPos = satellite.eciToGeodetic(eci.position, gmst);
        const lat = satellite.radiansToDegrees(gdPos.latitude);
        const lng = satellite.radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
      }
      return d;
    });
  }, [satData, time]);

  const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(
      (SAT_SIZE * globeRadius) / EARTH_RADIUS_KM / 2,
      0
    );
    const satMaterial = new THREE.MeshLambertMaterial({
      color: "palegreen",
      transparent: true,
      opacity: 0.7,
    });
    return new THREE.Mesh(satGeometry, satMaterial);
  }, [globeRadius]);

  useEffect(() => {
    // setGlobeRadius(globeEl.current?.getGlobeRadius());
    // globeEl.current?.pointOfView({ altitude: 3.5 });
  }, []);

  return (
    <>
      <div>
        <div className="absolute text-white z-10">{time.toString()}</div>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          objectsData={objectsData}
          objectLabel="name"
          objectLat="lat"
          objectLng="lng"
          objectAltitude="alt"
          objectFacesSurface={false}
          objectThreeObject={satObject}
        />
      </div>
    </>
  );
};

export default globe;
