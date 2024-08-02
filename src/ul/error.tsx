import { FC } from "react";

interface ErrorProps {
    error: string | null;
}

const Error: FC<ErrorProps> = ({ error }) => {
    return (
        <div className="error text-blackCustom dark:text-whiteCustom">
            <h2 className="error__title  text-4xl">{error}</h2>
        </div>
    );
};

export default Error;
