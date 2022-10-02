import Lottie from "react-lottie";
import React from "react";

import * as scroll from "./scroll-down.json";

const defaultScroll = {
  loop: true,
  autoplay: true,
  animationData: scroll.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ScrollDown() {
  return (
    <>
      <Lottie options={defaultScroll} height={200} width={200} />
    </>
  );
}
