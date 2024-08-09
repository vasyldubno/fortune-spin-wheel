/**
 * Renders a wheel component with fortune items and their corresponding colors and values.
 *
 * @param {WheelProps} props - The props object containing the rotation angle of the wheel.
 * @param {number} props.rotate - The rotation angle of the wheel in degrees.
 * @return {JSX.Element} The rendered wheel component.
 */

import { FC } from 'react';
import styles from './Wheel.module.css';
import { createSegment } from './helpers/createSegment';
import { getTextPosition } from './helpers/getTextPosition';
import { getTextRotation } from './helpers/getTextRotation';
import { useFortuneItemsContext } from '@/context/fortuneContext';

interface WheelProps {
  rotate: number;
}

export const Wheel: FC<WheelProps> = ({ rotate }) => {
  const { fortuneItems } = useFortuneItemsContext();

  const segments = fortuneItems.length;
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
      {fortuneItems.map((item, index) => (
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
