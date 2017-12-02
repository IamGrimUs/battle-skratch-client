import React from 'react';
import moment from 'moment';

import './battleListingHeadline.css';

export default function BattleListingHeadline(props) {
  const today = moment().format('MM-DD-YYYY');
  const startDate = props.startDate.slice(0, 10);
  const endDate = props.endDate.slice(0, 10);
  return (
    <section className="contest-headline-block">
      <h2>
        :{props.battleType.duration} seconds<br />
        <span> {props.battleType.description}</span>
      </h2>
      <div className="contest-headline-details">
        <h3 className="page-subtitle">
          battle #{props.battleIndex}
          <br />
          {startDate} - {endDate}
        </h3>
        <div className="text-right">
          <p className="battle-current">
            {moment(today).isSameOrBefore(endDate)
              ? 'current battle'
              : 'previous battle'}
          </p>
        </div>
      </div>
    </section>
  );
}
