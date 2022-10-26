import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import splider from "./styles/headerS.module.scss"
import {ArrowRight} from "../ArrowRight";
import VideoLogo from "../videoLogo";
import {Play, PlayFill} from "react-bootstrap-icons";

const CustomSlider = ({images}) => {
    const options={
            rewind: true,
            rewindSpeed: 2000,
            autoplay:true,
            type:"fade",
            interval:3000,
            keyboard:"global",
            classes: {
                prev  : 'splide__arrow--prev cm2o-vimeo-prev',
                next  : 'splide__arrow--next cm2o-vimeo-next',
            },
            easing:"cubic-bezier(0.33, 1, 0.68, 1)",
            breakpoints: {
                991: {
                    arrows:false,
                }
            }
    }
    return (
        <Splide className={splider['splide-container']} options={options}>
            {images.map(({url,id,label,title,name,author})=>{
                return(
                    <SplideSlide key={id} className={splider['splide-slide']}>
                        <div className={splider["heading"]}>
                            <VideoLogo />
                            <h2 className={splider['spliderTitle']}>{label}</h2>
                            <p className={splider['info']}>
                                 <img src={author.img} alt={title} title={title} width={20} style={{borderRadius:"50%",marginRight:15,}}/>from {author.fullName} </p>
                            <p className={splider['description']}>{author.desc}</p>
                            <button type="button" className={splider['watch']}><PlayFill  />Watch now</button>

                        </div>
                        <img className={splider["splide-image"]} src={url} alt=""/>
                    </SplideSlide>
                )
            })}
            <div className="splide__arrows splide__arrows--ltr">
                <button
                    className="splide__arrow splide__arrow--prev cm2o-vimeo-prev"
                    type="button"
                    aria-label="Previous slide"
                    aria-controls="splide01-track"
                >
                    <ArrowRight />
                </button>
                <button
                    className="splide__arrow splide__arrow--next cm2o-vimeo-next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="splide01-track"
                >
                   <ArrowRight />
                </button>
            </div>
        </Splide>
    )
}
export default CustomSlider;