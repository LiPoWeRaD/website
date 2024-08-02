import { FC, ReactNode, useEffect } from "react"


interface InputProps {
    classname?: string
    svg?: ReactNode
    svgRight?: ReactNode
    type?: 'submit' | 'reset' | 'button' | 'text' | 'password' | 'number' | 'email' | 'search'
    placeholder?: string
    onChange?: (e: string) => void;
    children?: ReactNode
    value?: string
}

const Search: FC<InputProps> = ({ classname, svg, type, placeholder, onChange, ...props }) => {
    useEffect(() => {
        if (props) {
            const input = document.querySelector('input')
            if (input) {
                input.value = props.value || ''
            }
        }
    }, [props])
    return (
        <>
            {/* <img src={svg} alt="" className="absolute top-1/2 -translate-y-1/2 left-4"/> */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 fill-blackCustom dark:fill-whiteCustom">{svg}</div>
            <div id="search__btn__right" className="absolute top-1/2 -translate-y-1/2 right-4 fill-blackCustom dark:fill-whiteCustom" onClick={() => props.value && onChange && onChange('')}>{props.svgRight}</div>
            <input id="search" className={classname + " appearance-none"} type={type} placeholder={placeholder} onChange={onChange ? ({ target: { value } }) => onChange(value) : undefined} />
            {props.children}
        </>
    )
}

export default Search