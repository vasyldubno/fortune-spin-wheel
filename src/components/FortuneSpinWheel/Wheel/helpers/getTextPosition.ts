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
