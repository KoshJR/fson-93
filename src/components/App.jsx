import { FriendList } from './FriendList/FriendList';
import { Component, useEffect } from 'react';
import { AddProfileForm } from './AddProfileForm/AddProfileForm';
import { Modal } from './Modal/Modal';
import { useState } from 'react';

const friendsData = [
  {
    id: '1',
    name: 'Hiko',
    age: 26,
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Simple',
    age: 20,
    isFavorite: true,
  },
  {
    id: '3',
    name: 'coldzera',
    age: 21,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Get-Right',
    age: 25,
    isFavorite: true,
  },
];

export const App = () => {
  const [friends, setFriends] = useState(
    JSON.parse(localStorage.getItem('friends')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleAddProfile = formData => {
    const hasDuplicates = friends.some(
      profile => profile.name === formData.name
    );
    if (hasDuplicates) {
      alert(`Profile with name ${formData.name} already exists!`);
      return;
    }
    const finalProfile = {
      ...formData,
      id: Math.random().toString(),
    };

    setFriends(prevState => [...prevState, finalProfile]);
  };

  const handlePrintProfileName = profileName => {
    console.log('profileName', profileName);
  };

  const handleOpenProfileWindow = profileId => {
    const selectedProfile = friends.find(friend => friend.id === profileId);

    setModalIsOpen(true);
    setModalData(selectedProfile);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteProfile = profileId => {
    setFriends(friends.filter(friend => friend.id !== profileId));
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };

  useEffect(() => {
    const stringifyFriends = JSON.stringify(friends);
    localStorage.setItem('friends', stringifyFriends);
  }, [friends]);

  useEffect(() => {
    console.log('state modalIsOpen ' + modalIsOpen);
  }, [modalIsOpen]);

  const filteredProfiles = friends.filter(profile =>
    profile.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const sortedProfiles = [...filteredProfiles].sort(
    (a, b) => b.isFavorite - a.isFavorite
  );

  return (
    <div>
      {filter.trim().toLowerCase() === 'christmas' && (
        <p>Congrats, you won promocode for 30% off -#442dsa41</p>
      )}
      <AddProfileForm handleAddProfile={handleAddProfile} />
      <div>
        <p>Find Profile</p>
        <input
          value={filter}
          onChange={handleChangeFilter}
          type="text"
          name="keyword"
          placeholder="Ivan..."
        />
      </div>
      <FriendList
        handleDeleteProfile={handleDeleteProfile}
        handlePrintProfileName={handlePrintProfileName}
        handleOpenProfileWindow={handleOpenProfileWindow}
        friends={sortedProfiles}
        title="Friends List"
      />
      {modalIsOpen && (
        <Modal modalData={modalData} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};
