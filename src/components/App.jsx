import { FriendList } from './FriendList/FriendList';
import { Component } from 'react';
import { AddProfileForm } from './AddProfileForm/AddProfileForm';

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

  handleDeleteProfile = profileId => {
    this.setState({
      friends: this.state.friends.filter(friend => friend.id !== profileId),
    });
  };

  handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({ filter: value });
    console.log(value);
  };

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
          friends={sortedProfiles}
          title="Friends List"
        />
      </div>
    );
  }
}
