import React from 'react';

export default function BattleListingHeadline(props) {
  const today = new Date(); // todo: match current battle marker to the correct battle
  // console.log(props);
  return (
    <section className="contest-headline-block">
      <h2 className="page-title">
        best :{props.battleType.duration} seconds<br />
        <span> {props.battleType.description}</span>
      </h2>
      <div className="contest-headline-details">
        <h3 className="page-subtitle">
          battle #{props.battleIndex}
          <br />
          {props.startDate} - {props.endDate}
        </h3>
        <div className="text-right">
          <p className="battle-current">
            {today >= props.startDate && today <= props.endDate
              ? 'current battle'
              : 'previous battle'}
          </p>
        </div>
      </div>
    </section>
  );
}
