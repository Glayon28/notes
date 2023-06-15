import React from "react";
import { HuePicker } from "react-color";

import "./choose-color.css";

function ColorPicker({ textColor, setTextColor }) {
  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div className="color-picker">
      <HuePicker color={textColor} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
