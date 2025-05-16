import Board from '../components/Board'
import { CardProps } from '../types';
import { cardItems } from '../utils/cardItems'
import { shuffleCards } from '../utils/shuffleCards';
import TimeSeededToast from "../components/TimeSeededToast"


const Room = () => {
  const cards: CardProps[] = shuffleCards(cardItems)
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <Board cards={cards} />
      <TimeSeededToast />
    </div>
  )
}

export default Room