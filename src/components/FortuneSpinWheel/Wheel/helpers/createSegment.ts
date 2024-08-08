import { polarToCartesian } from './polarToCartesian';

interface CreateSegmentParams {
  index: number;
  segmentAngle: number;
  radius: number;
}

type CreateSegment = (params: CreateSegmentParams) => string;

export const createSegment: CreateSegment = ({
  index,
  radius,
  segmentAngle,
}) => {
  const startAngle = segmentAngle * index;
  const endAngle = startAngle + segmentAngle;

  const largeArcFlag = segmentAngle > 180 ? 1 : 0;
  const start = polarToCartesian(radius, radius, radius, endAngle);
  const end = polarToCartesian(radius, radius, radius, startAngle);

  const d = [
    `M ${radius} ${radius}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');

  return d;
};
