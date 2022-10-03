import { Slider } from "@mui/material";
import { useState } from "react";

const ISSTimelineSlider = () => {
  const [time, setTime] = useState(50);
  const getValue = (event: any, newTime: number) => {
    setTime(newTime);
  };
  const getText = (time: number) => `${time}`;
  const marks: { value: number; label: string }[] = [];

  for (let i = -5400; i <= 5400; i += 5) {
    marks.push({
      value: i,
      label: `${i}`,
    });
  }

  return (
    <div className="fixed w-3/6 top-3/4">
      <Slider
        defaultValue={0}
        step={5}
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
