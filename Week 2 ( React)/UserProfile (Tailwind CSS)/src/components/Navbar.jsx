function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-900 px-6 py-4">
      <span className="text-lg font-bold text-white">MyApp</span>
      <div className="flex gap-6">
        <a href="#" className="text-gray-300 hover:text-white">Home</a>
        <a href="#" className="text-gray-300 hover:text-white">Products</a>
        <a href="#" className="text-gray-300 hover:text-white">About</a>
        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;