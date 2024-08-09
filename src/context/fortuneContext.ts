/**
 * A custom React hook that provides the fortune items context.
 *
 * @return {FortuneContextType} The fortune items context.
 */

import { createContext, useContext } from 'react';
import { FortuneItemType } from '../types';

interface FortuneContextType {
  fortuneItems: FortuneItemType[];
  setFortuneItems: (items: FortuneItemType[]) => void;
}

export const FortuneContext = createContext<FortuneContextType | null>(null);

export const useFortuneItemsContext = () => {
  const context = useContext(FortuneContext);

  if (!context) {
    throw new Error(
      'useFortuneItemsContext must be used within a FortuneContextProvider',
    );
  }

  return context;
};
