interface ButtonProps {
    id?: string,
    onClick?: () => void,
    children: string | React.ReactNode,
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean,
    className?: string
    isPending?: boolean
    btn?: boolean
}

export default ButtonProps