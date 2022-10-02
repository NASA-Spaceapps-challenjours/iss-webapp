import { Slider } from "@mui/material";
import { useState } from "react";

const ISSTimelineSlider = () => {
  const [time, setTime] = useState(50);
  const getValue = (event: any, newTime: number) => {
    setTime(newTime);
  };
  const getText = (time: number) => `${time}`;
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
        defaultValue={50}
        step={10}
        // max={100}
        marks={marks}
        valueLabelDisplay="on"
        value={time}
        onChange={() => getValue}
        getAriaValueText={getText}
        aria-label="Always visible"
      />
    </div>
  );
};

export default ISSTimelineSlider;
