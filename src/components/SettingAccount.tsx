import { FC } from "react"
import { store } from "../store";
import { RootState } from "../store/reducers";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { UseActions } from "../hooks/useActions";
import Buttons from "../ul/buttons";
import emailSVG from "../svg/emailSVG"

const SettingAccount: FC = () => {
    let { profile } = useTypesSelector((state: RootState) => state.user);
    profile === undefined && (profile = { name: "None", surname: "None", email: "None", favorites: [] });
    const { logout } = UseActions();
    const handleLogout = async () => {
        logout();
    };

    store.subscribe(() => {
        if (store.getState().logoutUserReducer.result === true) {
            window.location.href = "/";
        }
    })

    return (
        <>
        <ul className="flex flex-col gap-y-10 my-16 min-h-[calc(54vh-120px)]">
            <li className="flex items-center gap-x-3">
                <span className="w-[60px] h-[60px] bg-blackPlaceholderCustom rounded-full text-2xl font-bold text-blackCustom dark:text-whiteCustom flex items-center justify-center">{profile.name.charAt(0) + profile.surname.charAt(0)}</span>
                <div className="text-blackCustom dark:text-whiteCustom">
                    <p className="text-lg">Имя Фамилия</p>
                    <p className="text-2xl font-bold">{profile.name + " " + profile.surname}</p>
                </div>
            </li>
            <li className="flex mb-16 items-center gap-x-3">
                <p className="relative w-[60px] h-[60px] p-[18px] bg-blackPlaceholderCustom rounded-full text-3xl text-blackCustom dark:text-whiteCustom fill-blackCustom dark:fill-whiteCustom flex items-center justify-center">{emailSVG({})}</p>
                <div className="text-blackCustom dark:text-whiteCustom">
                    <p className="text-lg">Електронная почта</p>
                    <p className="text-2xl font-bold">{profile.email}</p>
                </div>
            </li>
            <Buttons type='submit' className='mb-16 sm:mr-auto px-12 py-4 text-2xl rounded-[28px] bg-blueCustom text-white hover-never:bg-[#D6D2F1] focus:bg-[#8577E1]' children='Выйти из аккаунта' onClick={() => handleLogout()} /> 
        </ul>
        </>
    )
}

export default SettingAccount