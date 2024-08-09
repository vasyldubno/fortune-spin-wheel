/**
 * A functional component that represents a single field item in the fortune spin wheel.
 * It allows users to edit the field's value and color, and also provides options to save, delete, or reset the changes.
 *
 * @param {FieldItemProps} field - The field item to be displayed, containing its id, value, and color.
 * @return {JSX.Element} The JSX element representing the field item.
 */

import { ChangeEvent, FC, useState } from 'react';
import s from './FieldItem.module.css';
import { FortuneItemType } from '@/types';
import { useFortuneItemsContext } from '@/context/fortuneContext';
import { Button } from '@/components/Button/Button';

interface FieldItemProps {
  field: FortuneItemType;
}

export const FieldItem: FC<FieldItemProps> = ({ field }) => {
  const { fortuneItems, setFortuneItems } = useFortuneItemsContext();

  const [isEditable, setIsEditable] = useState(false);

  const handleClickEdit = () => {
    setIsEditable(true);
  };

  const handleClickSave = () => {
    setIsEditable(false);
  };

  const handleClickDelete = () => {
    setFortuneItems(fortuneItems.filter((i) => i.id !== field.id));
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const result: FortuneItemType[] = fortuneItems.map((item) => {
      if (item.id === field.id) {
        return {
          id: item.id,
          value: e.target.value,
          color: item.color,
        };
      }
      return item;
    });

    setFortuneItems(result);
  };

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const result: FortuneItemType[] = fortuneItems.map((r) => {
      if (r.id === field.id) {
        return {
          id: r.id,
          value: r.value,
          color: e.target.value,
        };
      }
      return r;
    });
    setFortuneItems(result);
  };

  return (
    <div key={field.id} className={s.wrapper}>
      <input
        value={field.value}
        onChange={handleChangeValue}
        className={s.inputValue}
        disabled={!isEditable}
      />
      <input
        disabled={!isEditable}
        type="color"
        value={field.color}
        onChange={handleChangeColor}
      />

      {isEditable ? (
        <Button onClick={handleClickSave}>SAVE</Button>
      ) : (
        <Button onClick={handleClickEdit}>EDIT</Button>
      )}

      <Button onClick={handleClickDelete}>DELETE</Button>
    </div>
  );
};
