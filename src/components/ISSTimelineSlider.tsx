import { Slider } from "@mui/material";
import { useState } from "react";

const ISSTimelineSlider = () => {
  const [time, setTime] = useState(20);
  const changeValue = (event: any, time: any) => {
    setTime(time);
  };
  const getText = (time: any) => `${time}`;
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  return (
    <div className="fixed w-3/6 top-3/4">
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        getAriaValueText={getText}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
};

export default ISSTimelineSlider;
