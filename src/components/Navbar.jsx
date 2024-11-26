// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Wisdmway</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
