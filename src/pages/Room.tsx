import Board from '../components/Board'
import { CardProps } from '../types';
import { cardItems } from '../utils/cardItems'
import { shuffleCards } from '../utils/shuffleCards';
import { useParams } from 'react-router-dom';


type Props = {}


const Room = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const cards: CardProps[]  = shuffleCards(cardItems, id || 'defaultId')
  return (
    <Board cards={cards} />
  )
}

export default Room