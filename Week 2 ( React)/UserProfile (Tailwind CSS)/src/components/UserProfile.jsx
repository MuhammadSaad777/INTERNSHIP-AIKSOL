function UserProfile({ name, role, imageUrl }) {
  return (
    <div className="w-56 rounded-lg border border-gray-200 p-4 text-center shadow-sm">
      <img
        className="mx-auto mb-3 h-20 w-20 rounded-full object-cover"
        src={imageUrl}
        alt={name}
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

export default UserProfile;