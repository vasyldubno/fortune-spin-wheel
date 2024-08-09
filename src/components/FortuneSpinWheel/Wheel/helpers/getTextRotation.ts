/**
 * Calculates the rotation angle of a text element in a circular layout.
 *
 * @param {number} index - The index of the text element in the layout.
 * @param {number} segmentAngle - The angle of each segment in the circular layout.
 * @return {number} The rotation angle of the text element in degrees.
 */

interface GetTextRotationParams {
  index: number;
  segmentAngle: number;
}

type GetTextRotation = (params: GetTextRotationParams) => number;

export const getTextRotation: GetTextRotation = ({ index, segmentAngle }) => {
  return segmentAngle * index + segmentAngle / 2 + 90;
};
