import { CardProps } from "../types"

const Card: React.FC<CardProps> = ({ name, isActive, onClick }) => {

    return (
        <div
            className={`relative flex flex-col aspect-square items-center justify-center rounded
                from-amber-200 to-amber-400 text-gray-800 text-center shadow-md max-h-32 hover:cursor-pointer
                p-2 ${isActive ? "bg-bingo-purple animate-bingo-win" : " "} transition-all w-full`}
            onClick={onClick}
        >
            <span className={`text-3xl md:text-4xl xl:text-6xl z-10 font-medium break-words text-center 
                ${(name.at(-1) === "♥" || name.at(-1) === "♦") ? "text-bingo-red" : "text-black"}`}>
                {name}
            </span>
        </div>

    );
};

export default Card;
