import m from "./styles/main.module.scss"
import vs1 from "./HeaderImages/vimeoSlider1.png"
import vs2 from "./HeaderImages/vimeoSlider2.png"
import vs3 from "./HeaderImages/vimeoSlider3.png"
import vs4 from "./HeaderImages/vimeoSlider4.png"
import at1 from "./HeaderImageAuthors/sliderAutor1.png"
import at2 from "./HeaderImageAuthors/sliderAutor2.png"
import at3 from "./HeaderImageAuthors/sliderAutor3.png"
import at4 from "./HeaderImageAuthors/sliderAutor4.png"
// cards images
import card1 from   "./cardImages/1.png"
import card2 from   "./cardImages/2.png"
import card3 from   "./cardImages/3.png"
import card4 from   "./cardImages/4.png"
import card5 from   "./cardImages/5.png"
import card6 from   "./cardImages/6.png"
import card7 from   "./cardImages/7.png"
import card8 from   "./cardImages/8.png"
import card9 from   "./cardImages/9.png"
import card10 from   "./cardImages/10.png"
import card11 from   "./cardImages/11.png"
import card12 from   "./cardImages/12.png"
import card13 from   "./cardImages/13.png"
import card14 from   "./cardImages/14.png"
import card15 from   "./cardImages/15.png"
import card16 from   "./cardImages/16.png"
import card17 from   "./cardImages/17.png"
import card18 from   "./cardImages/18.png"
import card19 from   "./cardImages/19.png"
import SliderSwiper from "../SliderSwiper/SliderSwiper";
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
const  cards=
    [
        {
            id:1,
            cardImages:card1,
            title:"Watch human-curated Staff Picks ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:2,
            cardImages:card2,
            title:"BOO! It's Halloween. ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:3,
            cardImages:card3,
            title:"Indigenous People's Day ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:4,
            cardImages:card4,
            title:"Staff Pick Premieres ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:5,
            cardImages:card5,
            title:"Filmografía ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:6,
            cardImages:card6,
            title:"Animation ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:7,
            cardImages:card7,
            title:"Drama ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:8,
            cardImages:card8,
            title:"Branded Content ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:9,
            cardImages:card9,
            title:"Sports ",
            isViewd:true,
            isCardHave:true,

        },

        {
            id:10,
            cardImages:card10,
            title:"Music ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:11,
            cardImages:card11,
            title:"Comedy ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:12,
            cardImages:card12,
            title:"Ladies With Lenses ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:13,
            cardImages:card13,
            title:"Commercials ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:14,
            cardImages:card14,
            title:"Black Artistry in Film ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:15,
            cardImages:card15,
            title:"LGBTQIA+ Voices ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:16,
            cardImages:card16,
            title:"Documentary",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:17,
            cardImages:card17,
            title:"Asian and Pacific Islander ",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:18,
            cardImages:card18,
            title:"Experimental",
            isViewd:true,
            isCardHave:true,
        },

        {
            id:19,
            cardImages:card19,
            title:"Travel",
            isViewd:true,
            isCardHave:true,
        },
        {
        id:20,
        cardImages:null,
        title:"See what’s trending",
        isViewd:false,
        isCardHave:false,
        },
    ];



const Home = () => {
    return (
        <main className={m['main']}>
            {
                cards.map(({id,cardImages,title,isCardHave,isViewd})=>(
                    <SliderSwiper key={id} arrowClass={id} isCardHave={isCardHave} isViewd={isViewd} sectionTitle={title} cardImage={cardImages} />
                ))
            }
        </main>
    )
}
 export default Home;