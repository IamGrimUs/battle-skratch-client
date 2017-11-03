import React from 'react';
import BattleChampion from './battleChampion';
import BattleListing from './battleListing';
import BattleOrder from './battleOrder';

export default function HomePage() {
  return (
    <div>
      <BattleOrder />
      <BattleChampion />
      <BattleListing />
    </div>
  );
}
