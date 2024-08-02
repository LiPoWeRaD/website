import { FC } from "react";
import YouTube from 'react-youtube';
import Buttons from "../ul/buttons";
import crossSVG from "../svg/crossSVG";

interface FilmProps {
    trailerYouTubeId: string
    btnClose: () => void
}

const Film: FC<FilmProps> = ({ trailerYouTubeId, btnClose }) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {trailerYouTubeId &&
                <div className="px-[72px]">
                    <Buttons btn={true} className="absolute p-[15px] top-0 right-20 lg:right-0 bg-blackCustom dark:bg-whiteCustom rounded-3xl" onClick={() => btnClose()}>
                        {crossSVG({ classname: "cursor-pointer fill-whiteCustom dark:fill-blackCustom" })}
                    </Buttons>
                    <YouTube className="w-[375px] sm:w-[600px] md:w-[750px] lg:w-[860px] xl:w-[960px] max-h-[540px]" opts={{ width: '100%', height: '540', playerVars: { autoplay: 1 } }} videoId={trailerYouTubeId} />
                </div>  
            }
        </div>
    )
}

export default Film