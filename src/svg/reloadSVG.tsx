import { FC } from "react"
import SVGProps from "../types/SVGProps"

const reloadSVG: FC<SVGProps> = ({ fill, classname }) => {

    return (
        <svg className={classname ? classname : "absolute left-4 top-1/2 -translate-y-1/2 "} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C12.7486 2 15.1749 3.38626 16.6156 5.5H14V7.5H20V1.5H18V3.99936C16.1762 1.57166 13.2724 0 10 0C4.47715 0 0 4.47715 0 10H2C2 5.58172 5.58172 2 10 2ZM18 10C18 14.4183 14.4183 18 10 18C7.25144 18 4.82508 16.6137 3.38443 14.5H6V12.5H0V18.5H2V16.0006C3.82381 18.4283 6.72764 20 10 20C15.5228 20 20 15.5228 20 10H18Z" 
            // fill={fill ? fill : "white"}
            />
        </svg>
    )
}

export default reloadSVG


