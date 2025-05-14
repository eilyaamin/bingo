import React from 'react';
import { Link } from 'react-router-dom';


type Props = {};

const Nav: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 shadow-lg z-50">
      <Link to="/" className="text-2xl font-extrabold text-white drop-shadow">
        Bingo
      </Link>
    </nav>
  );
};

export default Nav;