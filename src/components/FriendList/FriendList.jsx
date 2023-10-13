import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(friends => (
        <li className={css.friendsItem} key={friends.id}>
          <span
            className={css.friendStatus}
            style={{ backgroundColor: statusColor(friends.isOnline) }}
          >
            {friends.isOnline}
          </span>
          <img
            src={friends.avatar}
            alt="User avatar"
            className={css.avatar}
          ></img>
          <p className={css.friendName}>{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
const statusColor = isOnline => {
  const green = '#00FF00';
  const red = '#FF0000';

  return isOnline ? green : red;
};
export default FriendList;
