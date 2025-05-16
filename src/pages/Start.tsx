import { Link } from 'react-router-dom';
import generateId from "../utils/generateRoomId";
import { useEffect, useState } from 'react';

const Start = () => {
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    setRoomId(generateId());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-6">
      <div className="max-w-md w-full rounded-2xl shadow-xl p-8 space-y-8 text-center border-t-2 border-bingo-purple">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Bingo</h1>
        <div>
          <Link
            to={`/room/${roomId}`}
            className="inline-block bg-bingo-purple text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-600 transition"
          >
            Start a New Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
