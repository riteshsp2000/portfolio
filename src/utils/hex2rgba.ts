export default (hex: string, alpha = 1): string | Error => {
  if (!hex) {
    return new Error('Hexcode not provided');
  }
  // @ts-ignore
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
