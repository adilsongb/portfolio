function PickerColor({ title, name, color, onChange}) {
  return (
    <div className="color-manager">
      {!!title && (<span>{title}</span>)}
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
    </div>
  );
}

export default PickerColor;
