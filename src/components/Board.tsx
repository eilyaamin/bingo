import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import { BoardProps } from '../types';
import { calculatePaths } from '../utils/calculatePaths';

const FREE_INDEX = 12;

const Board: React.FC<BoardProps> = ({ cards }) => {
    const [active, setActive] = useState<number[]>([FREE_INDEX]);
    const [winningPaths, setWinningPaths] = useState<number[][]>([]);
    const [wonPaths, setWonPaths] = useState<number[][]>([]);
    const [hasWon, setHasWon] = useState<boolean>(false);

    const toggleCell = (index: number) => {
        if (index === FREE_INDEX) return;

        setActive((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    // useMemo Hook avoids the recalculation of paths on every rerender.
    const correctPaths = useMemo(() => calculatePaths(), []);

    useEffect(() => {

        // Filling the winningPaths
        if (winningPaths.length === 0) {
            setWinningPaths((prev) => [...prev, ...correctPaths])
        }

        const newWonPaths: number[][] = [];
        const stillValidWonPaths: number[][] = [];
        winningPaths.forEach((path) => {
            const isPathActive = path.every((i) => active.includes(i));
            const alreadyWon = wonPaths.some((won) =>
                won.length === path.length && won.every((val, i) => val === path[i])
            );
    
            if (isPathActive) {
                if (!alreadyWon) {
                    newWonPaths.push(path);
                    setHasWon(true)
                }
                stillValidWonPaths.push(path);
            }
        });

        const updatedWonPaths = [...stillValidWonPaths];

        if (newWonPaths.length > 0) {
            setWonPaths(updatedWonPaths); // Only update once
    
        } else if (updatedWonPaths.length !== wonPaths.length) {
            setWonPaths(updatedWonPaths); // Remove broken paths
        }

        if (hasWon) {
            const timeout = setTimeout(() => {
                setHasWon(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [active, correctPaths, winningPaths, hasWon, wonPaths]);

    return (
        <div className='flex flex-col justify-between'>
            {hasWon && (
                <div className="self-end text-green-500 font-bold text-xl ">
                    🎉 BINGO! You won! 🎉
                </div>
            )}
            <div className="grid grid-cols-5 grid-rows-5 gap-0">
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
