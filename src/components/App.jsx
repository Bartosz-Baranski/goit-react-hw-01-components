import React from 'react';
import Profile from './Profile/Profile';
import userData from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import items from './TransactionHistory/transactions.json';
export function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        statisticsData={statisticsData}
        statisticsTitle="Upload stats"
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
}
