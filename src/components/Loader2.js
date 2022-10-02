import React, { useEffect } from "react";
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
        <div className="bg-black flex scale-%100">
          <Lottie
            options={defaultOptions1}
            height={800}
            width={900}
          />
        </div>
      )}
    </>
  );
}

export default Loader2;
