import { Profile } from 'components/Profile/Profile';
import React from 'react';

export const FriendList = ({ friends, title = '' }) => {
  return (
    <div>
      {title.length > 0 && <h2>{title}</h2>}
      {Array.isArray(friends) &&
        friends.map(friend => {
          return (
            <Profile
              key={friend.id}
              name={friend.name}
              age={friend.age}
              isFavorite={friend.isFavorite}
            />
          );
        })}
    </div>
  );
};
