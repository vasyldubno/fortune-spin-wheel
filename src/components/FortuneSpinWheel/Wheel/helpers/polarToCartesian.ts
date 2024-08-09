/**
 * Converts polar coordinates to cartesian coordinates.
 *
 * @param {number} centerX - The x-coordinate of the center of the circle.
 * @param {number} centerY - The y-coordinate of the center of the circle.
 * @param {number} radius - The radius of the circle.
 * @param {number} angleInDegrees - The angle in degrees from the positive x-axis.
 * @return {{x: number, y: number}} - The cartesian coordinates.
 */

export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) => {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};
