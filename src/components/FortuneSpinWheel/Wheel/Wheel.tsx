import { FC } from 'react';
import styles from './Wheel.module.css';
import { FORTUNE_ITEMS } from '../../../constants';
import { createSegment } from './helpers/createSegment';
import { getTextPosition } from './helpers/getTextPosition';
import { getTextRotation } from './helpers/getTextRotation';

interface WheelProps {
  rotate: number;
}

export const Wheel: FC<WheelProps> = ({ rotate }) => {
  const segments = FORTUNE_ITEMS.length;
  const radius = 200;
  const segmentAngle = 360 / segments;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      className={styles.svg}
    >
      {FORTUNE_ITEMS.map((item, index) => (
        <g key={item.id}>
          <path
            d={createSegment({ index, radius, segmentAngle })}
            fill={item.color}
          />
          <text
            x={getTextPosition({ index, radius, segmentAngle }).x}
            y={getTextPosition({ index, radius, segmentAngle }).y}
            fill="#FFFFFF"
            fontSize="16"
            textAnchor="middle"
            alignmentBaseline="middle"
            transform={`rotate(${getTextRotation({ index, segmentAngle })}, ${
              getTextPosition({ index, radius, segmentAngle }).x
            }, ${getTextPosition({ index, radius, segmentAngle }).y})`}
          >
            {item.value}
          </text>
        </g>
      ))}
    </svg>
  );
};
