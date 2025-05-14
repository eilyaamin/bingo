import { useEffect, useState } from "react"
import { cardItems } from "../utils/cardItems"
import { CardProps } from "../types"

// Deterministic pseudo-random number generator
function seededRandom(seed: number): number {
    const x = Math.sin(seed * 99991) * 10000
    return x - Math.floor(x)
}

// Get card for the current time-based interval
function getCardBySeed(seed: number): CardProps {
    const index = Math.floor(seededRandom(seed) * cardItems.length)
    return cardItems[index]
}

const TimeSeededToast = () => {
    const [card, setCard] = useState<CardProps>(() => {
        const seed = Math.floor(Date.now() / 3000)
        return getCardBySeed(seed)
    })

    useEffect(() => {
        let rafId: number
        let lastSeed = Math.floor(Date.now() / 3000)

        const tick = () => {
            const currentSeed = Math.floor(Date.now() / 3000)
            if (currentSeed !== lastSeed) {
                lastSeed = currentSeed
                setCard(getCardBySeed(currentSeed))
            }
            rafId = requestAnimationFrame(tick)
        }

        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [])

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center scale-90">
            <div className="w-28 md:w-44 h-32 md:h-64 bg-white border-2 border-black rounded-2xl border-bingo-purple
                shadow-[0_0_5px_rgba(0,0,0,0.3)] flex flex-col justify-between items-center shadow-bingo-purple
                p-4 transform transition duration-300 hover:scale-105">
                <div className="text-3xl font-bold">🃏</div>
                <div className="text-4xl md:text-6xl font-semibold text-center text-gray-800 break-words">
                    {card.name}
                </div>
                <div className="text-lg font-medium text-gray-600">Card</div>
            </div>
        </div>
    )
}

export default TimeSeededToast
