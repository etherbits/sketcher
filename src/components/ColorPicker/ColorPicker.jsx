import React from "react";
import { SColorList, SColor } from "./ColorPicker.styled";

export const ColorPicker = ({colors, onChange}) => {
  return (
    <SColorList>
      {colors.map((color) => (
        <li key={color}>
          <SColor
            onClick={() => onChange(color)}
            style={{ backgroundColor: `${color}` }}
          />
        </li>
      ))}
    </SColorList>
  );
};
