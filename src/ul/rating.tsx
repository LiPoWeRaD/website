import { FC } from "react";
import SVGNode from "./SVGNode";


interface RatingProps {
    rating: number
    className?: string
    width?: string
    height?: string
}

const rating:FC<RatingProps> = ({ rating, className="flex items-center gap-x-1 px-3 py-1 rounded-2xl", width, height }) => {
    const star = `<svg width=${width} height=${height} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" 
            fill="white"/>
        </svg>`;  
        
    if (rating >= 8.6) {
        return (
            <div style={{ backgroundColor: "#A59400" }} className={className}>
                {SVGNode(star)}
                <span className="font-bold text-white">{rating}</span>
            </div>
        )
    }

    if (rating >= 7.5) {
        return (
            <div style={{ backgroundColor: "#308E21" }} className={className}>
                {SVGNode(star)}
                <span className="font-bold text-white">{rating}</span>
            </div>
        )
    }

    if (rating >= 6.3) {
        return (
            <div style={{ backgroundColor: "#777777" }} className={className}>
                {SVGNode(star)}
                <span className="font-bold text-white">{rating}</span>
            </div>
        )
    } else if (rating < 6.3) {
        return (
            <div style={{ backgroundColor: "#C82020" }} className={className}>
                {SVGNode(star)}
                <span className="font-bold text-white">{rating}</span>
            </div>
        )
    }

}


export default rating