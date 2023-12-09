import css from './Profile.module.css';

const Profile = ({ name, age, isFavorite = false, className = '' }) => {
  return (
    <div>
      <p
        style={{
          backgroundColor: isFavorite ? 'blanchedalmond' : 'transparent',
        }}
        className={`${css.friendProfile} ${className}`}
      >
        {isFavorite && 'best'} Hello, <span className={css.accent}>{name}</span>
        . Your age is: {age}
      </p>
    </div>
  );
};

export { Profile };
