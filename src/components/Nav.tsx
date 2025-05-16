import { House } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';


type Props = {};

const Nav: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 bg-bingo-purple w-full flex items-center justify-between py-4 px-10 shadow-lg z-50">
      <Link to="/" className="text-2xl font-extrabold text-white drop-shadow">
        Bingo
      </Link>
      <Link to="/" className="text-2xl font-extrabold text-white drop-shadow">
        <House className=" text-white"/>
      </Link>
    </nav>
  );
};

export default Nav;