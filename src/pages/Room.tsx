import Board from '../components/Board'
import { CardProps } from '../types';
import { cardItems } from '../utils/cardItems'
import { shuffleCards } from '../utils/shuffleCards';
import { useParams } from 'react-router-dom';


type Props = {}


const Room = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const cards: CardProps[] = shuffleCards(cardItems, id || 'defaultId')
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Board cards={cards} />
    </div>
  )
}

export default Room