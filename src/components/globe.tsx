import Script from "next/script";
const Globe = (props: any) => {
  const [width, height] = props.wind;
  return (
    <div>
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
    </div>
  );
};

export default Globe;
