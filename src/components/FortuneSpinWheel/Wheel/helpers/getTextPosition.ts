/**
 * Calculates the position of the text on a circular segment based on the index, radius, and segment angle.
 *
 * @param {object} params - The parameters for calculating the text position.
 * @param {number} params.index - The index of the segment.
 * @param {number} params.radius - The radius of the circle.
 * @param {number} params.segmentAngle - The angle of each segment.
 * @return {object} The x and y coordinates of the text position.
 */

import { polarToCartesian } from './polarToCartesian';

interface GetTextPositionParams {
  index: number;
  segmentAngle: number;
  radius: number;
}

type GetTextPosition = (params: GetTextPositionParams) => {
  x: number;
  y: number;
};

export const getTextPosition: GetTextPosition = ({
  index,
  radius,
  segmentAngle,
}) => {
  const angle = segmentAngle * index + segmentAngle / 2;
  const textRadius = radius * 0.7;
  return polarToCartesian(radius, radius, textRadius, angle);
};
