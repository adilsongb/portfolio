import React from 'react';
import { ColorManager } from '../../styles/Inputs';

function PickerColor({
  title,
  name,
  color,
  onChange,
}: {
  title: string;
  name: string;
  color: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <ColorManager>
      {!!title && <span>{title}</span>}
      <div>
        <input
          type="color"
          id="color-picker"
          name={name}
          value={color}
          onChange={(event) => onChange(event)}
        />
        <input
          type="text"
          name={name}
          value={color}
          onChange={(event) => onChange(event)}
        />
      </div>
    </ColorManager>
  );
}

export default PickerColor;
