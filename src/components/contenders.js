import React from 'react';
import { UserProfileCard } from './userProfileCard';
import './contenders.css';

export default function Contenders() {
  return (
    <section>
      <h1 class="page-title">Contenders</h1>
      <div class="background-color-container">
        <section class="all-users-container">
          <UserProfileCard />
        </section>
      </div>
    </section>
  );
}
