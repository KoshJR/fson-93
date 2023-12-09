import { FriendList } from './FriendList/FriendList';

const friendsData = [
  {
    id: '1',
    name: 'Val',
    age: 26,
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Val1',
    age: 20,
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Val2',
    age: 21,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Val3',
    age: 25,
    isFavorite: true,
  },
];

export const App = () => {
  return (
    <div>
      <h1>Friends Book</h1>
      <FriendList friends={friendsData} title="Friends List" />
    </div>
  );
};
