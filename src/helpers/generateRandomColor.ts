/**
 * Generates a random color in hexadecimal format.
 *
 * @return {string} The randomly generated color.
 */

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
