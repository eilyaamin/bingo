export interface CardProps {
    name: string;
    number: number;
    isActive: boolean;
    onClick: () => void;
}

export interface BoardProps {
    cards: CardProps[];
}
