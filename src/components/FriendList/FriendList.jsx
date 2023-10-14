import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friends => (
        <li className={css.friends_item} key={friends.id}>
          <span
            className={css.friend_status}
            style={{ backgroundColor: statusColor(friends.isOnline) }}
          >
            {friends.isOnline}
          </span>
          <img
            src={friends.avatar}
            alt="User avatar"
            className={css.avatar}
          ></img>
          <p className={css.friend_name}>{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
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
