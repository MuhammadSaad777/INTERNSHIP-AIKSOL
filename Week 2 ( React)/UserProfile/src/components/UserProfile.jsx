import './UserProfile.css';

function UserProfile({ name, role, imageUrl }) {
  return (
    <div className="user-profile">
      <img
        className="user-avatar"
        src={imageUrl}
        alt={name}
      />
      <h2 className="user-name">{name}</h2>
      <p className="user-role">{role}</p>
    </div>
  );
}

export default UserProfile;