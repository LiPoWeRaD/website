import { FC } from "react"
import SVGProps from "../types/SVGProps"

const crossSVG: FC<SVGProps> = ({ classname }) => {

    return (
        <svg className={classname ? classname : "absolute left-4 top-1/2 -translate-y-1/2 "} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" 
            />
        </svg>
    )
}

export default crossSVG