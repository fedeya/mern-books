import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="bg-blue-500 px-4 py-2 flex">
      <Link className="text-2xl text-white">
        Mern Books
      </Link>
    </nav>
  </header>
);

export default Header;