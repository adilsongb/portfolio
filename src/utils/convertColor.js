export function hexToRgbWithOpacity(hex, opacity) {
  hex = hex.replace(/^#/, '');

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  opacity = Math.min(Math.max(opacity, 0), 1);

  const rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return rgba;
}

export function adjustColorBrightness(hexColor, factor) {
  hexColor = hexColor.replace('#', '');

  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  let adjustedRed, adjustedGreen, adjustedBlue;

  if (brightness < 128) {
    // Cor escura: aumentar a luminosidade
    adjustedRed = Math.min(255, red + factor);
    adjustedGreen = Math.min(255, green + factor);
    adjustedBlue = Math.min(255, blue + factor);
  } else {
    // Cor clara: diminuir a luminosidade
    adjustedRed = Math.max(0, red - factor);
    adjustedGreen = Math.max(0, green - factor);
    adjustedBlue = Math.max(0, blue - factor);
  }

  const adjustedHexColor =
    '#' +
    adjustedRed.toString(16).padStart(2, '0') +
    adjustedGreen.toString(16).padStart(2, '0') +
    adjustedBlue.toString(16).padStart(2, '0');

  return adjustedHexColor;
}

export function getTextColor(hexColor) {
  // Remove o símbolo '#' se estiver presente
  if (hexColor.startsWith('#')) {
    hexColor = hexColor.slice(1);
  }

  // Converte o valor hexadecimal para valores RGB
  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  // Calcula a luminosidade da cor usando a fórmula de luminosidade relativa
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  // Retorna cor branca para cores escuras e cor preta para cores claras
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
