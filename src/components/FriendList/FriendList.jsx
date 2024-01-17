import { Profile } from 'components/Profile/Profile';
import React from 'react';
import { useSelector } from 'react-redux';

export const FriendList = ({
  friends,
  title = '',
  handlePrintProfileName,
  handleDeleteProfile,
  handleOpenProfileWindow,
}) => {
  
  return (
    <div>
      {title.length > 0 && <h2>{title}</h2>}
      {Array.isArray(friends) &&
        friends.map(friend => {
          return (
            <Profile
              key={friend.id}
              id={friend.id}
              name={friend.name}
              age={friend.age}
              isFavorite={friend.isFavorite}
              handlePrintProfileName={handlePrintProfileName}
              handleDeleteProfile={handleDeleteProfile}
              handleOpenProfileWindow={handleOpenProfileWindow}
            />
          );
        })}
    </div>
  );
};
