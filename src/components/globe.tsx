import Script from "next/script";

const Globe = (props: any) => {
  const [width, height] = props.wind;
  let buttonStateMessage = "Enable";
  let buttonState = someFunction();

  function someFunction() {
    console.log(buttonStateMessage + " path");
    buttonStateMessage === "Enable"
      ? (buttonStateMessage = "Disable")
      : (buttonStateMessage = "Enable");
    return buttonStateMessage;
  }
  return (
    <div>
      {/* <>
        height: {height}, width: {width}
      </> */}
      <canvas
        id="canvasOne"
        width={width}
        height={height}
        className="bg-black w-full "
      >
        Your browser does not support HTML5 Canvas.
      </canvas>

      <Script
        src="/ww-script.js"
        type="text/javascript"
        strategy="afterInteractive"
      ></Script>
      <button onClick={someFunction}>{`${buttonState} the path`}</button>
    </div>
  );
};

export default Globe;
