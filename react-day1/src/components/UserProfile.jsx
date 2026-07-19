function UserProfile({ name, role, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />

      <h2>{name}</h2>

      <p>{role}</p>
    </div>
  );
}

export default UserProfile;