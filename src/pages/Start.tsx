import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import generateId from "../utils/generateRoomId";
import { useEffect, useState } from 'react';

const Start = () => {
  const [roomId, setRoomId] = useState("");
  const [userInputId, setUserInputId] = useState("");

  useEffect(() => {
    setRoomId(generateId());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputId(e.target.value);
  };

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
        <div className="space-y-2">
          <label htmlFor="roomId" className="block text-sm font-medium text-gray-600">
            Or Join a Game
          </label>
          <div className="relative">
            <input
              type="text"
              id="roomId"
              placeholder="Enter Game ID (e.g xgsby)"
              className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-bingo-purple transition-all ease-in-out"
              value={userInputId}
              onChange={handleChange}
            />
            {userInputId && (
              <Link
                to={`/room/${userInputId}`}
                aria-label="Join Room"
                className="absolute inset-y-0 right-2 flex items-center justify-center p-1 text-bingo-purple hover:bg-gray-100 rounded-full hover:scale-110 transition-all ease-in"
              >
                <ArrowRightCircle size={22} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
