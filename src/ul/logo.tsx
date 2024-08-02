import { FC } from "react";

interface LogoProps {
    classname?: string,
    children?: React.ReactNode
}

const Logo: FC<LogoProps> = ({ classname, children}) => {
    return (
        <div className={classname + " bg-gradient-to-r from-[#6A5DC2] to-[#DC5DFC] inline-block bg-clip-text font-bold text-transparent"}>{children}</div>
    )
}

export default Logo;