import React from 'react';
import BattleChampionCard from './battleChampionCard';

export default function BattleChampion() {
  return (
    <section>
      <h2 class="current-champion-title">battle champions</h2>
      <section class="content-block-leader-board">
        <BattleChampionCard />
      </section>
    </section>
  );
}
