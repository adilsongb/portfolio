export default function hexToRgbWithOpacity(hex, opacity) {
  hex = hex.replace(/^#/, '');

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  opacity = Math.min(Math.max(opacity, 0), 1);

  const rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return rgba;
}
