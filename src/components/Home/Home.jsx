import m from "./styles/main.module.scss"
import CustomSlider from "../CustomSlider/CustomSlider";
import vs1 from "./HeaderImages/vimeoSlider1.png"
import vs2 from "./HeaderImages/vimeoSlider2.png"
import vs3 from "./HeaderImages/vimeoSlider3.png"
import vs4 from "./HeaderImages/vimeoSlider4.png"
//
import at1 from "./HeaderImageAuthors/sliderAutor1.png"
import at2 from "./HeaderImageAuthors/sliderAutor2.png"
import at3 from "./HeaderImageAuthors/sliderAutor3.png"
import at4 from "./HeaderImageAuthors/sliderAutor4.png"
import { useState} from "react";
import Content from "../Content/Content";




const Home = () => {

    const [sliderData,setSliderData] = useState([])
    const images = [
        {
            id:1,
            url:vs1,
            title:"A stylistic and dangerous showdown in this sexy ZNTNDR music video.",
            label:"ZNTNDR - Untitled Us",
            author:{
                img:at1,
                fullName:"Jovan Todorovic",
                desc: "A stylistic and dangerous showdown in this sexy ZNTNDR music video."
            }
        },
        {
            id:2,
            url:vs2,
            title:"Heartbroken after a bad breakup, Angie finds comfort in her BFF Carmen, who helps her sign up for a dating app.",
            label:"Succor",
            author:{
                img:at2,
                fullName:"Hannah Cheesman",
                desc: "Heartbroken after a bad breakup, Angie finds comfort in her BFF Carmen, who helps her sign up for a dating app."
            }
        },
        {
            id:3,
            url:vs3,
            title:"Are these aerial captures of sublime landscapes, or zoomed in images of paint flowing on a piece of paper?",
            label:"A SENSE OF SCALE - REMINISCENCE 8K HDR",
            author:{
                img:at3,
                fullName:"Roman De Giuli",
                desc: "Are these aerial captures of sublime landscapes, or zoomed in images of paint flowing on a piece of paper?"
            }
        },
        {
            id:4,
            url:vs4,
            title:"Yosef and Zilli have a plan. Their son Doron tells the story.",
            label:"The Love and Death of Yosef and Zilli",
            author:{
                img:at4,
                fullName:"Dean Gold",
                desc:"Yosef and Zilli have a plan. Their son Doron tells the story."
            }
        },
    ]

    return (
        <main className={m['main']}>
            <CustomSlider images={images} />
            <Content  />
        </main>
    )
}
 export default Home;