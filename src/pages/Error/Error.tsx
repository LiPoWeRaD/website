import { FC } from "react";


const Error: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-198px)] lg:h-[calc(100vh-120px)] lg:pt-[200px] text-blackCustom dark:text-whiteCustom">
            <h2 className="error__title  text-4xl">404</h2>
            <p className="error__text">Страница не найдена</p>
        </div>
    );
};

export default Error;