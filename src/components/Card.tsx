import { CardProps } from "../types"

const Card: React.FC<CardProps> = ({ name, number, isActive, onClick }) => {

    return (
        <div
            className={`relative flex flex-col aspect-square items-center justify-center rounded
                from-amber-200 to-amber-400 text-gray-800 text-center shadow-md max-h-32 hover:cursor-pointer
                p-2 ${isActive ? "bg-bingo-purple" : " "} transition-all w-full`}
            onClick={onClick}
        >
            <small className="absolute opacity-10 text-4xl md:text-6xl z-0 px-1 rounded text-black h-max">
                {number}
            </small>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg z-10 font-medium break-words text-center text-black">
                {name}
            </span>
        </div>

    );
};

export default Card;
