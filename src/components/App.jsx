import { FriendList } from './FriendList/FriendList';
import { Component } from 'react';
import { AddProfileForm } from './AddProfileForm/AddProfileForm';
import { Modal } from './Modal/Modal';

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

export class App extends Component {
  state = {
    friends: friendsData,
    filter: '',
    modalIsOpen: false,
    modalData: null,
  };

  handleAddProfile = formData => {
    const hasDuplicates = this.state.friends.some(
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

    this.setState(prevState => {
      return {
        friends: [...prevState.friends, finalProfile],
      };
    });
  };

  handlePrintProfileName = profileName => {
    console.log('profileName', profileName);
  };
  handleOpenProfileWindow = profileId => {
    const selectedProfile = this.state.friends.find(
      friend => friend.id === profileId
    );
    this.setState({
      modalIsOpen: true,
      modalData: selectedProfile,
    });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteProfile = profileId => {
    this.setState({
      friends: this.state.friends.filter(friend => friend.id !== profileId),
    });
  };

  handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  componentDidMount() {
    const stringifyFriends = localStorage.getItem('friends');
    const friends = JSON.parse(stringifyFriends) ?? [];
    this.setState({ friends });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.friends !== this.state.friends) {
      const stringifyFriends = JSON.stringify(this.state.friends);
      localStorage.setItem('friends', stringifyFriends);
    }

    if (prevState.modalIsOpen !== this.state.modalIsOpen) {
      console.log('state modalIsOpen ' + this.state.modalIsOpen);
    }
  }

  render() {
    const filteredProfiles = this.state.friends.filter(profile =>
      profile.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );

    const sortedProfiles = [...filteredProfiles].sort(
      (a, b) => b.isFavorite - a.isFavorite
    );

    return (
      <div>
        {this.state.filter.trim().toLowerCase() === 'christmas' && (
          <p>Congrats, you won promocode for 30% off -#442dsa41</p>
        )}
        <AddProfileForm handleAddProfile={this.handleAddProfile} />
        <div>
          <p>Find Profile</p>
          <input
            value={this.state.filter}
            onChange={this.handleChangeFilter}
            type="text"
            name="keyword"
            placeholder="Ivan..."
          />
        </div>
        <FriendList
          handleDeleteProfile={this.handleDeleteProfile}
          handlePrintProfileName={this.handlePrintProfileName}
          handleOpenProfileWindow={this.handleOpenProfileWindow}
          friends={sortedProfiles}
          title="Friends List"
        />
        {this.state.modalIsOpen && (
          <Modal
            modalData={this.state.modalData}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
