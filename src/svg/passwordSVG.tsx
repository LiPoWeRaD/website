import { FC } from "react"
import SVGProps from "../types/SVGProps"

const passwordSVG: FC<SVGProps> = ({ left }) => {

    return (
        <svg className={`absolute ${left ? left : ""} top-1/2 -translate-y-1/2 `} width="22" height="12" viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" 
          />
        </svg>
    )
}

export default passwordSVG

