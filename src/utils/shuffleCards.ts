import { CardProps } from "../types";

export const shuffleCards = (cards: CardProps[], seed: string): CardProps[] => {
  let hash = Array.from(seed).reduce((h, char) => (h << 5) - h + char.charCodeAt(0), 0);

  const random = () => {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff;
    return hash / 0x7fffffff;
  };

  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
