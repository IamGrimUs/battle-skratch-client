import React from 'react';
import { UserProfileCard } from './userProfileCard';
import './contenders.css';

export default function Contenders() {
  return (
    <section>
      <h1 className="page-title">Contenders</h1>
      <div className="background-color-container">
        <section className="all-users-container">
          <UserProfileCard
            djName="russell"
            battlesWon="1"
            battlesEntered="1"
            totalPoints="1"
            social_tw="https://twitter.com/IamGrimus"
          />
        </section>
      </div>
    </section>
  );
}
