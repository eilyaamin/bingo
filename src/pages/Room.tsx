import Board from '../components/Board'
import { CardProps } from '../types';
import { cardItems } from '../utils/cardItems'
import { shuffleCards } from '../utils/shuffleCards';
import { useParams } from 'react-router-dom';
import TimeSeededToast from "../components/TimeSeededToast"

type Props = {}


const Room = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const cards: CardProps[] = shuffleCards(cardItems, id || 'defaultId')
  return (
    <div>
      <div className="flex flex-col items-center justify-evenly -translate-y-10 md:translate-y-0 min-h-screen">
        <Board cards={cards} />
      </div>
      <TimeSeededToast />
    </div>
  )
}

export default Room