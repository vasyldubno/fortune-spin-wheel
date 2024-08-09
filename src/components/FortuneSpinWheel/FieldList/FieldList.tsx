/**
 * Renders a list of field items and provides a button to add a new item.
 *
 * @return {JSX.Element} The rendered FieldList component.
 */

import { useFortuneItemsContext } from '@/context/fortuneContext';
import s from './FieldList.module.css';
import { generateRandomColor } from '@/helpers/generateRandomColor';
import { Button } from '@/components/Button/Button';
import { FieldItem } from '../FieldItem/FieldItem';

export const FieldList = () => {
  const { fortuneItems, setFortuneItems } = useFortuneItemsContext();

  const handleAddNewItem = () => {
    setFortuneItems([
      ...fortuneItems,
      { id: Date.now(), value: '100', color: generateRandomColor() },
    ]);
  };

  return (
    <div className={s.wrapper}>
      <Button onClick={handleAddNewItem}>Add new item</Button>
      <div className={s.wrapperFieldList}>
        {fortuneItems.map((item) => (
          <FieldItem field={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
