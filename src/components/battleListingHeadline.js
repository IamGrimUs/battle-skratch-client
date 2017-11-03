import React from 'react';

export default function BattleListingHeadline(props) {
  const currentBattle = 'current battle';
  const notCurrentBattle = 'previous battle';

  return (
    <section className="contest-headline-block">
      <h2 className="page-title">
        best :{props.duration}s <span>{props.discription}</span>
      </h2>
      <div className="contest-headline-details">
        <h3 className="page-subtitle">
          battle #{props.battleNumber} {props.startDate} - {props.endDate}
        </h3>
        <div className="text-right">
          <p className="battle-current">
            {props.currentBattle === true ? currentBattle : notCurrentBattle}
          </p>
        </div>
      </div>
    </section>
  );
}
