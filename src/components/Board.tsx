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
        <div className="">
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${hasWon ? "block" : "hidden"
                    }`}
                onClick={() => setHasWon(false)}
            >
                <div className="relative z-10 text-2xl md:text-6xl text-green-700 font-extrabold animate-pulse bg-bingo-red rounded-xl px-6 py-4">
                    🎉 BINGO! You won! 🎉
                </div>
            </div>

            <div className="flex flex-wrap max-w-[600px] scale-75">
                {Array(25).fill(null).map((_, index) => (
                    <div key={index} className="w-1/5 aspect-square p-0.5">
                        <Card
                            name={cards[index]?.name || 'Default'}
                            number={index}
                            isActive={active.includes(index)}
                            onClick={() => toggleCell(index)}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Board;
