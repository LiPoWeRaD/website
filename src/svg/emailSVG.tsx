import { FC } from "react"
import SVGProps from "../types/SVGProps"

const emailSVG: FC<SVGProps> = ({ left }) => {

    return (
        <svg className={`absolute ${left ? left : ""}  top-1/2 -translate-y-1/2 `} width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" 
            />
        </svg>
    )
}

export default emailSVG