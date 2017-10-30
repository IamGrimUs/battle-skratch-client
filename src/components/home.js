import React from 'react';
import BattleChampion from './battleChampion';
import BattleCurrent from './battleCurrent';
import BattleOrder from './battleOrder';

export default function HomePage() {
  return (
    <div>
      <BattleOrder />
      <BattleChampion />
      <BattleCurrent />
    </div>
  );
}
