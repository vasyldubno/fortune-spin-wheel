import { Wheel } from './Wheel/Wheel';
import styles from './FortuneSpinWheel.module.css';
import { useEffect, useState } from 'react';
import { FORTUNE_ITEMS } from '../../constants';

export const FortuneSpinWheel = () => {
  const [rotate, setRotate] = useState(0);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);

  const handleClick = () => {
    setWinningIndex(null);

    const newRotate = Math.random() * 360;
    setRotate((prev) => (prev === 0 ? -prev : prev) + -newRotate + -360 * 5);

    setTimeout(() => {
      setWinningIndex(Math.ceil(newRotate / 72));
    }, 5000);
  };

  useEffect(() => {
    setTimeout(() => {
      const normalizedRotate = rotate % 360;
      const winningIndex = Math.ceil((normalizedRotate * -1) / 72);

      if (winningIndex !== 0) {
        setWinningIndex(Math.ceil((normalizedRotate * -1) / 72));
      }
    }, 5000);
  }, [rotate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.fortune}>
        <button className={styles.button} onClick={handleClick}>
          SPIN
        </button>
        <Wheel rotate={rotate} />
      </div>
      {winningIndex && (
        <p className={styles.winner}>{FORTUNE_ITEMS[winningIndex - 1].value}</p>
      )}
    </div>
  );
};
