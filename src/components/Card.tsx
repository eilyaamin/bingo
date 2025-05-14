import { CardProps } from "../types"

const Card: React.FC<CardProps> = ({ name, number, isActive, onClick }) => {

    return (
        <div className={`relative flex flex-col aspect-square items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 
            text-gray-800 text-center shadow-md p-2 ${isActive ? "bg-bingo-green " : ""} transition-all`}
            onClick={onClick}
            >
            <small className="absolute top-2 right-2 text-xs sm:text-sm bg-bingo-purple md:text-base">{number}</small>
            <span className="text-sm sm:text-xs md:text-lg lg:text-xl">{name}</span>
        </div>
    );
};

export default Card;
