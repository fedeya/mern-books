import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="bg-blue-600 px-4 py-2 flex">
      <Link to="/books" className="text-2xl font-bold text-white">
        Mern Books
      </Link>

      <ul className="flex text-gray-200 justify-center items-center ml-auto">
        <li className="mr-2" >
          <NavLink to="/books" activeClassName="text-white" >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink  to="/profile" activeClassName="text-white">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;