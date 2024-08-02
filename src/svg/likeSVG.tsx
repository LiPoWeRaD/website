import { FC } from "react"
import SVGProps from "../types/SVGProps"

const likeSVG: FC<SVGProps> = ({ classname }) => {

    return (
        <svg className={classname ? classname :  ` absolute top-1/2 -translate-y-1/2 `} strokeWidth={"2"} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0Z"
             />
        </svg>
    )
}

export default likeSVG


