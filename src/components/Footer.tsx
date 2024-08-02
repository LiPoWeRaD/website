import { FC } from "react"
import copyrightSVG from "../svg/copyrightSVG"
import vkSVG from "../svg/vkSVG"
import youtubeSVG from "../svg/youtubeSVG"
import okSVG from "../svg/okSVG"
import telegramSVG from "../svg/telegramSVG"

const Footer: FC = () => {
    return (
        <footer className="py-10 relative bg-whiteCustom dark:bg-blackGenretitleCustom ">
            <div className="flex flex-col px-0 md:flex-row mx-auto container gap-y-8 font-play text-lg text-blackGenretitleCustom dark:text-whiteCustom justify-between">
                <div className="flex flex-col md:flex-row gap-x-3 md:items-center">
                    <p className="font-bold">LLC «Мультимедиа Визион» </p>
                    <p className="flex gap-x-2 items-center fill-blackCustom dark:fill-blackCaptionFooterCustom">{copyrightSVG()}<span className="text-blackCustom dark:text-blackCaptionFooterCustom">Все права защищены </span></p>
                </div>
                <ul className="flex gap-x-6">
                    <li>
                        <a className="fill-blackCustom stroke-blackCustom dark:fill-whiteCustom dark:stroke-whiteCustom" href="https://vk.com/lipowerad">
                            {vkSVG()}
                        </a>
                    </li>
                    <li>
                        <a className="fill-blackCustom stroke-blackCustom dark:fill-whiteCustom dark:stroke-whiteCustom" href="https://www.youtube.com/channel/UCxiJqkIW1XRGPzTd5GNM3og">
                            {youtubeSVG()}
                        </a>
                    </li>
                    <li>
                        <a className="fill-blackCustom stroke-blackCustom dark:fill-whiteCustom dark:stroke-whiteCustom" href="https://ok.ru/">
                            {okSVG()}
                        </a>
                    </li>
                    <li>
                        <a className="fill-blackCustom stroke-blackCustom dark:fill-whiteCustom dark:stroke-whiteCustom" href="https://t.me/LiPoWeRaD">
                            {telegramSVG()}
                        </a>
                    </li>
                </ul>
            </div>  
        </footer>
    )
}

export default Footer