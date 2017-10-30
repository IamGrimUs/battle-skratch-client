import React from 'react';
import BattleChampionCard from './battleChampionCard';

export default function BattleChampion() {
  return (
    <section>
      <h2 className="current-champion-title">battle champions</h2>
      <section className="content-block-leader-board">
        <BattleChampionCard />
      </section>
    </section>
  );
}
