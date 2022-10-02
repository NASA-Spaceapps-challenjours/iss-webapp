import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "../49242-world.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loader2(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setCompleted(true);
    }, 5000);
  }, []);

  return (
    <>
      {!props.completed && (
        <Lottie options={defaultOptions1} height={400} width={400} />
      )}
    </>
  );
}

export default Loader2;
