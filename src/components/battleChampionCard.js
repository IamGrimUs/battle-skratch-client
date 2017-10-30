import React from 'react';
import { Link } from 'react-router-dom';

export default function BattleChampionCard() {
  return (
    <section className="leader-board">
      <img src="../img/dj_turntable-horn.png" alt="Champion trophy" />
      <h4 className="leader-board-user">grand champion</h4>
      <h3 className="leader-board-user">
        <Link to="contenders">snuffleupagus</Link>
      </h3>
      <p>
        most battles won <span>2</span>
      </p>
    </section>
  );
}
