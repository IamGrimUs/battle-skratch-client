import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleChampionCard(props) {
  const lastBattleWon = `most recent battle winner: ${props.lastBattleWon}`;
  const mostBattlesWon = `most battles won: ${props.battlesWon}`;
  return (
    <section className="leader-board">
      <img src="../img/dj_turntable-horn.png" alt="Champion trophy" />
      <h4 className="leader-board-user">
        {props.grandChampion === false
          ? props.currentChampion
          : props.grandChampion}
      </h4>
      <h3 className="leader-board-user">
        <Link to="contenders">{props.djName}</Link>
      </h3>
      <p>{props.grandChampion === false ? lastBattleWon : mostBattlesWon}</p>
    </section>
  );
}
