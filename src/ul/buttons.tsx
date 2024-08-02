import { FC } from 'react';
import ButtonProps from '../types/ButtonProps';


const Buttons: FC<ButtonProps> = ({ id, onClick, children, type, disabled, btn = false, ...props }) => {
    const svg = <svg className={"animate-spin h-5 w-5 "} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.364 2.63604L13.9497 4.05025C12.683 2.7835 10.933 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9H18C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C11.4853 0 13.7353 1.00736 15.364 2.63604Z" 
                    fill="white"/>
                </svg>;
    return (
        <>
            {disabled ? 
                <div className={props.className + " flex justify-center"}>
                    {svg}
                </div>
                : 
                !btn && typeof children === "string" ?
                    <input id={id} type={type} disabled={props.isPending} className={props.className + " outline-none"} onClick={onClick} value={children} /> 
                    :
                    <button id={id} type={type} disabled={props.isPending} className={props.className + " outline-none"} onClick={onClick} >{children}</button>
            }
        </>
    )
}

export default Buttons
