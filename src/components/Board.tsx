import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import { BoardProps } from '../types';
import { calculatePaths } from '../utils/calculatePaths';

const FREE_INDEX = 12;

const Board: React.FC<BoardProps> = ({ cards }) => {
    const [active, setActive] = useState<number[]>([FREE_INDEX]);
    const [wonPaths, setWonPaths] = useState<number[][]>([]);
    const [hasWon, setHasWon] = useState<boolean>(false);

    const allPaths = useMemo(() => calculatePaths(), []);

    const toggleCell = (index: number) => {
        if (index === FREE_INDEX) return;

        setActive((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    useEffect(() => {
        const newWonPaths: number[][] = [];

        allPaths.forEach((path) => {
            const isPathActive = path.every((i) => active.includes(i));
            const alreadyWon = wonPaths.some((won) =>
                won.length === path.length && won.every((val, i) => val === path[i])
            );

            if (isPathActive && !alreadyWon) {
                newWonPaths.push(path);
            }
        });

        if (newWonPaths.length > 0) {
            setWonPaths((prev) => [...prev, ...newWonPaths]);
            setHasWon(true);
        }

        const timeout = setTimeout(() => {
            setHasWon(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [active, allPaths, wonPaths]);

    return (
        <div className="flex flex-col items-center p-4">
            <div className={`opacity-0 text-green-500 font-bold text-xl mb-5 animate-bounce ${hasWon && "opacity-100"}`}>
                🎉 BINGO! You won! 🎉
            </div>
            <div className="grid grid-cols-5 gap-1">
                {Array(25).fill(null).map((_, index) => (
                    <Card
                        key={index}
                        name={cards[index]?.name || 'Default'}
                        number={index}
                        isActive={active.includes(index)}
                        onClick={() => toggleCell(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
