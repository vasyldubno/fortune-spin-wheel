/**
 * Renders a Fortune Spin Wheel component.
 *
 * @return {JSX.Element} The Fortune Spin Wheel component.
 */

import { Wheel } from './Wheel/Wheel';
import s from './FortuneSpinWheel.module.css';
import { useEffect, useState } from 'react';
import { DEFAULT_FORTUNE_ITEMS } from '@/constants/index';
import { FieldList } from './FieldList/FieldList';
import { FortuneContext } from '@/context/fortuneContext';
import { WinnerResult } from './WinnerResult/WinnerResult';

export const FortuneSpinWheel = () => {
  const [rotate, setRotate] = useState(0);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);

  const [fortuneItems, setFortuneItems] = useState(DEFAULT_FORTUNE_ITEMS);

  const handleClick = () => {
    setWinningIndex(null);

    const newRotate = Math.random() * 360;
    setRotate((prev) => (prev === 0 ? -prev : prev) + -newRotate + -360 * 5);
  };

  useEffect(() => {
    setTimeout(() => {
      const amountSegments = fortuneItems.length;
      const degreeSegment = 360 / amountSegments;
      const normalizedRotate = rotate % 360;
      const winningIndex = Math.ceil((normalizedRotate * -1) / degreeSegment);

      if (winningIndex !== 0) {
        setWinningIndex(Math.ceil((normalizedRotate * -1) / degreeSegment));
      }
    }, 5000);
  }, [rotate]);

  return (
    <FortuneContext.Provider
      value={{
        fortuneItems: fortuneItems,
        setFortuneItems: (fortuneItems) => setFortuneItems(fortuneItems),
      }}
    >
      <div className={s.wrapper}>
        <div className={s.wrapperFortune}>
          <div className={s.fortune}>
            <button className={s.button} onClick={handleClick}>
              SPIN
            </button>
            <Wheel rotate={rotate} />
          </div>
          {winningIndex && (
            <WinnerResult fortuneItem={fortuneItems[winningIndex - 1]} />
          )}
        </div>
        <FieldList />
      </div>
    </FortuneContext.Provider>
  );
};
