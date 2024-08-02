import { FC, useState } from "react"
import SettingAccount from "../../components/SettingAccount"
import FavoritesFilm from "../../components/FavoritesFilm"
import Buttons from "../../ul/buttons"
import profileSVG from "../../svg/profileSVG"
import likeSVG from "../../svg/likeSVG"

const Profile: FC = () => {
    const [showFilms, setShowFilms] = useState(true);

    return (
        <main className="relative container p-0 ">
            <section className="lg:pt-24 min-h-[calc(100vh-212px)] lg:px-0">
                <div className="flex mb-16 md:mb-0 flex-col gap-y-5 font-play text-blackCustom dark:text-whiteCustom"> 
                    <h2 className=" mb-16 mt-16 text-3xl font-bold ">Мой аккаунт</h2>
                    <ul className="flex gap-y-3 gap-x-6 md:gap-x-16 ">
                        <li className={"flex gap-x-2 items-center relative stroke-blackCustom dark:stroke-whiteCustom " + (showFilms ? "border-b-[1.5px] border-[#DC5DFC]" : "")}>
                            {likeSVG({})}
                            <Buttons type="submit" children="Избранные фильмы" className="ml-7 text-2xl hidden sm:block" onClick={() => setShowFilms(true)}/>
                            <Buttons type="submit" children="Избранное" className="ml-7 text-2xl block sm:hidden" onClick={() => setShowFilms(true)}/>
                        </li>
                        <li className={"flex gap-x-items-center relative stroke-blackCustom dark:stroke-whiteCustom " + (!showFilms ? "border-b-[1.5px] border-[#DC5DFC]" : "")}>
                            {profileSVG({})}
                            <Buttons type="submit" children="Настройки аккаунта" className="ml-7 text-2xl hidden sm:block" onClick={() => setShowFilms(false)} />
                            <Buttons type="submit" children="Настройки" className="ml-7 text-2xl block sm:hidden" onClick={() => setShowFilms(false)} />
                        </li>
                    </ul>
                    <div className="">
                        {showFilms ? <FavoritesFilm /> : <SettingAccount />}
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default Profile