interface GetTextRotationParams {
  index: number;
  segmentAngle: number;
}

type GetTextRotation = (params: GetTextRotationParams) => number;

export const getTextRotation: GetTextRotation = ({ index, segmentAngle }) => {
  return segmentAngle * index + segmentAngle / 2 + 90;
};
