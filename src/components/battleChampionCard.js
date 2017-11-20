import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleChampionCard(props) {
  const lastBattleWon = `most recent battle winner: ${props.battleTypeDescription}`;
  const mostBattlesWon = `most battles won: ${props.battlesWon}`;
  return (
    <section
      className={`leader-board ${props.isGrandChampion
        ? 'grandChampion'
        : 'current champion'}`}
    >
      <img src="../img/dj_turntable-horn.png" alt="Champion trophy" />
      <h4 className="leader-board-user">
        {props.isGrandChampion ? 'grand champion' : 'current champion'}
      </h4>
      <h3 className="leader-board-user">
        <Link to="contenders">{props.name}</Link>
      </h3>
      <p>{props.isGrandChampion === false ? lastBattleWon : mostBattlesWon}</p>
    </section>
  );
}
