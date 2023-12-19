import css from './Profile.module.css';

const Profile = ({
  name,
  age,
  isFavorite = false,
  className = '',
  handlePrintProfileName,
  handleDeleteProfile,
  handleOpenProfileWindow,
  id,
}) => {
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
        <button onClick={() => handlePrintProfileName(name)}>Print Name</button>
        <button onClick={() => handleOpenProfileWindow(id)}>
          Show Details
        </button>
        <button onClick={() => handleDeleteProfile(id)}>&times;</button>
      </p>
    </div>
  );
};

export { Profile };
