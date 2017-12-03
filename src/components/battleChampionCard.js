import React from 'react';

import './battleChampionCard.css';

export default function BattleChampionCard(props) {
  const lastBattleWon = `current battle leader: ${props.battleTypeDescription}`;
  const mostBattlesWon = `most battles won: ${props.battlesWon}`;
  return (
    <section
      className={`leader-board ${
        props.isGrandChampion ? 'grandChampion' : 'current champion'
      }`}
    >
      <img src="../img/dj_turntable-horn.png" alt="Champion trophy" />
      <h4 className="leader-board-user">
        {props.isGrandChampion ? 'grand champion' : 'current champion'}
      </h4>
      <h3 className="leader-board-user">{props.name}</h3>
      <p>{props.isGrandChampion === false ? lastBattleWon : mostBattlesWon}</p>
    </section>
  );
}
