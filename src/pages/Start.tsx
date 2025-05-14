import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import generateId from "../utils/generateRoomId";
import { useEffect, useState } from 'react';

type Props = {}

const Start = (props: Props) => {

  const [id, setId] = useState<string>("");
  const [userID, setUserID] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };

  useEffect(() => {
    const generated_id = generateId();
    setId(generated_id);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-4xl text-white font-bold">Welcome to Bingo</p>
      <div className='flex my-5'>
        <Link
          to={`/room/${id}`}
          className="border bg-bingo-purple p-4 rounded-lg"
        >
          Start a Room!
        </Link>
      </div>
      <div className=''>
        <label htmlFor="Search">
          <span className="text-sm font-medium text-gray-700"> Join a Room </span>
          <div className="relative">
            <input
              type="text"
              id="Search"
              placeholder='Room Id'
              className="mt-0.5 w-full rounded border-gray-300 pe-10 shadow-sm sm:text-sm placeholder:text-sm placeholder:pl-2"
              value={userID}
              onChange={handleChange}
              required
            />
            {userID && <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
              <Link
                to={`/room/${userID}`}
                type="button"
                aria-label="Submit"
                className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <ArrowRightCircle size={24} className="text-bingo-green" />
              </Link>
            </span>}
          </div>
        </label>
      </div>
    </div>
  )
}

export default Start;
