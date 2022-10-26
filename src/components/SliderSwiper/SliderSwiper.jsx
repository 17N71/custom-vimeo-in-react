import React,{useEffect, useState} from "react"
import  slider from "./styles.module.scss"
import { PlusLg,ChevronRight } from  "react-bootstrap-icons"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/navigation";
import "./styles.scss";
import { Grid, Navigation } from "swiper";





const SliderSwiper = ({sectionTitle,isViewd,cardImage,isCardHave,arrowClass}) => {
    const [images, setImages] = useState([]);
    const ACCESSKEY ="C-jkCGVes55C9nJBpD6nAHZAMA_NyjuiX8VIfueucYM"
    const base_url = "https://api.unsplash.com"
    useEffect(() => {
        dataFetching()
    },[]);
    const dataFetching = async()=>{
        await fetch(`${base_url}/photos/random?client_id=${ACCESSKEY}&&count=10`)
            .then(res=>res.json()).then(json=>setImages([...images,...json]))
    }

    return (
        isCardHave?
        <div className={slider['slider-all']}>
        <section className={slider['slider-container']}>
            <div className={slider['slider-header']}>
                <h2 className={slider['slider-title']}>{sectionTitle}
                    <svg width={15} height={15} style={{transform:"rotate(-90deg)"}} viewBox="0 0 12 8" className="iris_ic is--12 grid_module__header-arrow">
                        <path
                            d="M11.7 1.3l-1-1c-.4-.4-1-.4-1.4 0L6 3.6 2.7.3c-.4-.4-1-.4-1.4 0l-1 1c-.4.4-.4 1 0 1.4l5 5c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4"></path>
                    </svg></h2>
                <button className={slider['slider-follow']}><PlusLg color={"#00adef"} /> Follow</button>
            </div>
            <div className={slider['slider-wrapper']}>
                 <div className={slider['slider-cards']}>
                    <div className={slider['card-header']} style={{backgroundImage:`url(${cardImage})`}}>
                        <img src={cardImage} alt="card image"/>
                    </div>
                    <div className={slider['card-body']}></div>
                </div>

                <section className={slider['slider-innerSection']}>
                <div className={slider["swipersinto"]}>
                    <Swiper
                        slidesPerView={5}
                        navigation={{prevEl: `.prev${arrowClass}`,nextEl: `.next${arrowClass}`, }}
                        grid={{rows: 2,fill:"row"}}
                        spaceBetween={5}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                grid:{
                                    rows:1,
                                }
                            },
                            640: {
                                slidesPerView: 1,
                                grid:{
                                    rows:1,
                                }
                            },
                            991:{
                                slidesPerView:1,
                                grid:{
                                    rows:1,
                                }
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween:0,
                                grid:{
                                    rows:1,
                                }
                            },
                            1640:{
                                slidesPerView: 3,
                                grid:{
                                    rows:1,
                                }
                            },
                            1726: {
                                slidesPerView: 5,
                                grid:{
                                    rows:1,
                                }

                            },
                        }}
                        pagination={{clickable: true,}}
                        modules={[Grid,Navigation]}
                        className="Custom Vimeo slider">
                        {images.map(({id,urls: {thumb}})=>(
                                <SwiperSlide key={id}>
                                <div className={slider['image-container']}>
                                    <img src={thumb} alt="slide"/>
                                    {isViewd && <span className={slider['icon']}>
                                    <svg width={30} height={30} viewBox="0 0 32 32" >
                                        <circle cx="16" cy="16" r="16"></circle>
                                        <path
                                            d="M20.5 9.3h-3.8v13.4h1.9V17h1.9c1.1 0 1.9-.9 1.9-1.9v-3.8c0-1.1-.9-2-1.9-2zm0 5.7h-1.9v-3.8h1.9V15zm-5.1-1.9v-1.9c0-1.1-.9-1.9-1.9-1.9h-1.9c-1.1 0-1.9.9-1.9 1.9V15c0 1.1.9 1.9 1.9 1.9h1.9v3.8h-1.9v-1.9H9.7v1.9c0 1.1.9 1.9 1.9 1.9h1.9c1.1 0 1.9-.9 1.9-1.9V17c0-1.1-.9-1.9-1.9-1.9h-1.9v-3.8h1.9v1.9l1.9-.1zM5.2 14.9c-.5.4-.9.8-1.4 1.3-.4-.5-.9-1-1.3-1.5.1-1 .3-2.1.7-3.1.3.6.5 1.2.9 1.8.5-.4 1.1-.7 1.6-.9-.3.8-.4 1.6-.5 2.4z"
                                            fill="#fff"></path>
                                        <path
                                            d="M5.4 18.4c-.3.5-.6 1.1-.9 1.6-.6-.3-1.1-.6-1.7-1.1-.2-1-.3-2.1-.3-3.1.4.5.9 1 1.4 1.4.4-.5.8-1 1.3-1.4-.1 1 0 1.8.2 2.6z"
                                            fill="#fff"></path>
                                        <path
                                            d="M6.7 21.7c-.2.6-.3 1.2-.3 1.9-.6-.1-1.3-.2-1.9-.5-.5-.9-1-1.8-1.3-2.8.6.4 1.2.7 1.8.9.2-.6.5-1.2.7-1.7.2.7.6 1.4 1 2.2z"
                                            fill="#fff"></path>
                                        <path
                                            d="M9 24.3c0 .6.1 1.2.3 1.9-.6.1-1.3.2-2 .2-.8-.7-1.5-1.4-2.1-2.3.7.2 1.3.2 2 .3 0-.6.1-1.3.2-1.9.4.7 1 1.3 1.6 1.8zM6.1 11.5c-.6.2-1.2.5-1.7.8-.3-.6-.5-1.2-.7-1.9.4-1 1-1.9 1.6-2.7 0 .7.1 1.3.3 2 .6-.2 1.2-.3 1.8-.4-.5.8-1 1.5-1.3 2.2z"
                                            fill="#fff"></path>
                                        <path
                                            d="M7 6.6c-.3.7-.6 1.5-.9 2.2.6-.4 1.3-.8 2-1.1.3-.7.7-1.3 1.1-1.9-.7.2-1.4.5-2.2.8zm22.5 8.1c-.4.6-.8 1.1-1.3 1.5-.4-.5-.9-.9-1.4-1.3-.1-.8-.3-1.7-.5-2.4.6.3 1.1.6 1.6.9l.9-1.8c.3 1 .6 2 .7 3.1z"
                                            fill="#fff"></path>
                                        <path
                                            d="M29.2 19c-.5.4-1.1.8-1.7 1.1-.3-.6-.6-1.1-.9-1.6.2-.8.3-1.7.3-2.5.4.4.9.9 1.3 1.4.5-.4 1-.9 1.4-1.4-.1 1-.2 2-.4 3z"
                                            fill="#fff"></path>
                                        <path
                                            d="M27.6 23.1c-.7.2-1.3.4-1.9.5-.1-.6-.2-1.3-.3-1.9.4-.7.8-1.5 1.1-2.3.3.5.5 1.1.7 1.7.6-.2 1.2-.5 1.8-.9-.5 1-.9 2-1.4 2.9z"
                                            fill="#fff"></path>
                                        <path
                                            d="M24.7 26.4c-.7 0-1.4-.1-2-.2.1-.6.2-1.3.3-1.9.6-.5 1.2-1.2 1.7-1.8.1.6.2 1.2.2 1.9.6 0 1.3-.1 2-.3-.7.8-1.4 1.6-2.2 2.3zm3.6-16c-.2.7-.4 1.3-.7 1.9-.6-.3-1.1-.6-1.7-.8-.3-.8-.8-1.5-1.3-2.1.6.1 1.2.2 1.8.4.1-.6.2-1.3.3-2 .7.8 1.2 1.7 1.6 2.6z"
                                            fill="#fff"></path>
                                        <path
                                            d="M23.9 7.7c.7.3 1.3.6 2 1.1-.2-.7-.5-1.5-.9-2.2-.7-.3-1.5-.6-2.2-.8.4.6.8 1.3 1.1 1.9z"
                                            fill="#fff"></path>
                                    </svg>
                                    </span>}
                                </div>

                                </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                </section>


            </div>

       </section>
            <div className={slider['arrows-container']}>
                <button type="button" style={{transform:"rotate(180deg)"}}  className={`${slider['arrows']} prev${arrowClass}`}>
                    <svg width="18" height="32" viewBox="0 0 18 32" className="iris_ic is--32">
                        <path
                            d="M12.88 16L.44 3.56a1.498 1.498 0 010-2.12l1-1a1.496 1.496 0 012.12 0l13.854 14.145c.78.782.78 2.048 0 2.83L3.56 31.56a1.496 1.496 0 01-2.12 0l-1-1a1.498 1.498 0 010-2.12L12.88 16z"
                            fillRule="evenodd"></path>
                    </svg>
                    </button>
                <button type="button"  className={`${slider['arrows']} next${arrowClass}`}>      <svg width="18" height="32" viewBox="0 0 18 32" className="iris_ic is--32">
                    <path
                        d="M12.88 16L.44 3.56a1.498 1.498 0 010-2.12l1-1a1.496 1.496 0 012.12 0l13.854 14.145c.78.782.78 2.048 0 2.83L3.56 31.56a1.496 1.496 0 01-2.12 0l-1-1a1.498 1.498 0 010-2.12L12.88 16z"
                        fillRule="evenodd"></path>
                </svg></button>
            </div>
        </div>:

                <div className={slider['slider-all-min-limit']}>
                    <section className={slider['slider-container']}>
                        <div className={slider['slider-header']}>
                            <h2 className={slider['slider-title']}>{sectionTitle}
                                <svg width={15} height={15} style={{transform:"rotate(-90deg)"}} viewBox="0 0 12 8" className="iris_ic is--12 grid_module__header-arrow">
                                    <path
                                        d="M11.7 1.3l-1-1c-.4-.4-1-.4-1.4 0L6 3.6 2.7.3c-.4-.4-1-.4-1.4 0l-1 1c-.4.4-.4 1 0 1.4l5 5c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4"></path>
                                </svg></h2>
                            <button className={slider['slider-follow']}><PlusLg color={"#00adef"} /> Follow</button>
                        </div>
                        </section>
                            <Swiper
                                slidesPerView={6}
                                navigation={{prevEl: `.prev${arrowClass}`,nextEl: `.next${arrowClass}`, }}
                                grid={{rows: 2,fill:"row"}}
                                spaceBetween={5}
                                pagination={{clickable: true,}}
                                modules={[Grid,Navigation]}
                                className="Custom Vimeo slider">
                                {images.map(({id,urls: {thumb}})=>(
                                    <SwiperSlide key={id}>
                                        <div className={slider['image-container']}>
                                            <img src={thumb} alt="slide"/>
                                            {isViewd && <span className={slider['icon']}>
                                    <svg width={30} height={30} viewBox="0 0 32 32" >
                                        <circle cx="16" cy="16" r="16"></circle>
                                        <path
                                            d="M20.5 9.3h-3.8v13.4h1.9V17h1.9c1.1 0 1.9-.9 1.9-1.9v-3.8c0-1.1-.9-2-1.9-2zm0 5.7h-1.9v-3.8h1.9V15zm-5.1-1.9v-1.9c0-1.1-.9-1.9-1.9-1.9h-1.9c-1.1 0-1.9.9-1.9 1.9V15c0 1.1.9 1.9 1.9 1.9h1.9v3.8h-1.9v-1.9H9.7v1.9c0 1.1.9 1.9 1.9 1.9h1.9c1.1 0 1.9-.9 1.9-1.9V17c0-1.1-.9-1.9-1.9-1.9h-1.9v-3.8h1.9v1.9l1.9-.1zM5.2 14.9c-.5.4-.9.8-1.4 1.3-.4-.5-.9-1-1.3-1.5.1-1 .3-2.1.7-3.1.3.6.5 1.2.9 1.8.5-.4 1.1-.7 1.6-.9-.3.8-.4 1.6-.5 2.4z"
                                            fill="#fff"></path>
                                        <path
                                            d="M5.4 18.4c-.3.5-.6 1.1-.9 1.6-.6-.3-1.1-.6-1.7-1.1-.2-1-.3-2.1-.3-3.1.4.5.9 1 1.4 1.4.4-.5.8-1 1.3-1.4-.1 1 0 1.8.2 2.6z"
                                            fill="#fff"></path>
                                        <path
                                            d="M6.7 21.7c-.2.6-.3 1.2-.3 1.9-.6-.1-1.3-.2-1.9-.5-.5-.9-1-1.8-1.3-2.8.6.4 1.2.7 1.8.9.2-.6.5-1.2.7-1.7.2.7.6 1.4 1 2.2z"
                                            fill="#fff"></path>
                                        <path
                                            d="M9 24.3c0 .6.1 1.2.3 1.9-.6.1-1.3.2-2 .2-.8-.7-1.5-1.4-2.1-2.3.7.2 1.3.2 2 .3 0-.6.1-1.3.2-1.9.4.7 1 1.3 1.6 1.8zM6.1 11.5c-.6.2-1.2.5-1.7.8-.3-.6-.5-1.2-.7-1.9.4-1 1-1.9 1.6-2.7 0 .7.1 1.3.3 2 .6-.2 1.2-.3 1.8-.4-.5.8-1 1.5-1.3 2.2z"
                                            fill="#fff"></path>
                                        <path
                                            d="M7 6.6c-.3.7-.6 1.5-.9 2.2.6-.4 1.3-.8 2-1.1.3-.7.7-1.3 1.1-1.9-.7.2-1.4.5-2.2.8zm22.5 8.1c-.4.6-.8 1.1-1.3 1.5-.4-.5-.9-.9-1.4-1.3-.1-.8-.3-1.7-.5-2.4.6.3 1.1.6 1.6.9l.9-1.8c.3 1 .6 2 .7 3.1z"
                                            fill="#fff"></path>
                                        <path
                                            d="M29.2 19c-.5.4-1.1.8-1.7 1.1-.3-.6-.6-1.1-.9-1.6.2-.8.3-1.7.3-2.5.4.4.9.9 1.3 1.4.5-.4 1-.9 1.4-1.4-.1 1-.2 2-.4 3z"
                                            fill="#fff"></path>
                                        <path
                                            d="M27.6 23.1c-.7.2-1.3.4-1.9.5-.1-.6-.2-1.3-.3-1.9.4-.7.8-1.5 1.1-2.3.3.5.5 1.1.7 1.7.6-.2 1.2-.5 1.8-.9-.5 1-.9 2-1.4 2.9z"
                                            fill="#fff"></path>
                                        <path
                                            d="M24.7 26.4c-.7 0-1.4-.1-2-.2.1-.6.2-1.3.3-1.9.6-.5 1.2-1.2 1.7-1.8.1.6.2 1.2.2 1.9.6 0 1.3-.1 2-.3-.7.8-1.4 1.6-2.2 2.3zm3.6-16c-.2.7-.4 1.3-.7 1.9-.6-.3-1.1-.6-1.7-.8-.3-.8-.8-1.5-1.3-2.1.6.1 1.2.2 1.8.4.1-.6.2-1.3.3-2 .7.8 1.2 1.7 1.6 2.6z"
                                            fill="#fff"></path>
                                        <path
                                            d="M23.9 7.7c.7.3 1.3.6 2 1.1-.2-.7-.5-1.5-.9-2.2-.7-.3-1.5-.6-2.2-.8.4.6.8 1.3 1.1 1.9z"
                                            fill="#fff"></path>
                                    </svg>
                                    </span>}
                                        </div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                    <div className={slider['arrows-container']}>
                        <button type="button" style={{transform:"rotate(180deg)"}}  className={`${slider['arrows']} prev${arrowClass}`}>
                            <svg width="18" height="32" viewBox="0 0 18 32" className="iris_ic is--32">
                                <path
                                    d="M12.88 16L.44 3.56a1.498 1.498 0 010-2.12l1-1a1.496 1.496 0 012.12 0l13.854 14.145c.78.782.78 2.048 0 2.83L3.56 31.56a1.496 1.496 0 01-2.12 0l-1-1a1.498 1.498 0 010-2.12L12.88 16z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button"  className={`${slider['arrows']} next${arrowClass}`}>      <svg width="18" height="32" viewBox="0 0 18 32" className="iris_ic is--32">
                            <path
                                d="M12.88 16L.44 3.56a1.498 1.498 0 010-2.12l1-1a1.496 1.496 0 012.12 0l13.854 14.145c.78.782.78 2.048 0 2.83L3.56 31.56a1.496 1.496 0 01-2.12 0l-1-1a1.498 1.498 0 010-2.12L12.88 16z"
                                fillRule="evenodd"></path>
                        </svg></button>
                    </div>

                </div>



    )
}
export default SliderSwiper;