/**
 * A functional component that displays the result of a fortune spin wheel.
 * It shows the winning fortune item's value and provides options to copy and share it.
 *
 * @param {FortuneItemType} fortuneItem - The winning fortune item to be displayed
 * @return {JSX.Element} The JSX element representing the winner result
 */

import { FC } from 'react';
import s from './WinnerResult.module.css';
import { FacebookIcon, FacebookShareButton } from 'react-share';
import { FortuneItemType } from '@/types';
import { Button } from '@/components/Button/Button';

interface WinnerResultProps {
  fortuneItem: FortuneItemType;
}

export const WinnerResult: FC<WinnerResultProps> = ({ fortuneItem }) => {
  const handleClickCopy = () => {
    navigator.clipboard.writeText(fortuneItem.value);
  };

  return (
    <div className={s.wrapper}>
      <p className={s.value}>{fortuneItem.value}</p>
      <Button onClick={handleClickCopy}>Copy</Button>
      <FacebookShareButton
        url="https://www.google.com/"
        className={s.shareButton}
      >
        <FacebookIcon size={25} borderRadius={10} />
      </FacebookShareButton>
    </div>
  );
};
