import { FC, useContext } from "react"
import Buttons from "../ul/buttons"
import AuthContext from "./AuthContext";

const CompleteRigister: FC = () => {
    const { toggleScreen } = useContext(AuthContext);
    return (
        <div className="flex flex-col gap-y-3 w-52 md:w-[340px]">
            <h2 className="text-2xl font-bold mb-3 self-center text-blackCustom dark:text-whiteCustom">Регистрация</h2>
            <p className="text-lg mb-3 self-center text-center text-blackCustom dark:text-whiteCustom">Используйте вашу электронную почту для входа</p>
            <Buttons type="submit" className="px-12 py-4 text-2xl rounded-[28px] bg-[#6A5DC2] text-white hover-never:bg-[#D6D2F1] focus:bg-[#8577E1]" children="Войти" onClick={() => toggleScreen("login")} />
        </div>
    )
}

export default CompleteRigister