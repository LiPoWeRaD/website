import { FC } from "react"
import SVGProps from "../types/SVGProps"

const starSVG: FC<SVGProps> = ({ fill, width="16", height="16" }) => {

    return (
        <svg width={width} height={height} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" 
            fill={fill ? fill : "white"}/>
        </svg>
    )
}

export default starSVG


