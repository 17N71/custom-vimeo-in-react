import LogoImage from "../LogoImage/LogoImage";
import {Link} from "react-router-dom";
import h from "./style.module.scss"
import Chd from "../Chd/Chd";
import {useEffect, useState} from "react";
import {
    CameraVideo,
    CloudArrowUpFill,
    List,
    Pencil,
    PencilFill,
    RecordCircle,
    Search,
    XLg
} from "react-bootstrap-icons";
import Media from "react-media";
import HeaderForm from "./HeaderForm/HeaderForm";
import React from "react";
import HeaderList from "./HeaderList/HeaderList";
import HeaderMediaList from "./HeaderMediaList/HeaderMediaList";
const Header = () => {

    const [searchValue,setSearchValue] = useState("")
    const [isSearch,setIsSearch] = useState(true)
    const [isFocused,setIsFocused] = useState(false)
    const [isMenuOpened,setIsMenuOpened] = useState(false)
    useEffect(()=>{
        if (isMenuOpened){
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "auto"
        }

    },[isMenuOpened])
    const serarching = ({target:{value}})=> {
        setSearchValue(value)
        if (value.length>=1){
            setIsSearch(false)
        }
        else {
            setIsSearch(true)
        }
    }
    function isClear(){
        if(isSearch){
            return''
        }
        else{
            setSearchValue('')
            setIsSearch(true)
        }
    }

    return(
        <>
        <header className={h['header']}>
            <Media query='(min-width: 1160px)'>
                {matches => matches?(
                    ""
                    ):<button type="button" className={h['header-burger']} onClick={()=>setIsMenuOpened(!isMenuOpened)} >
                    {isMenuOpened?<XLg size={26} color={"#636f79"} />:<List size={26} color={"#636f79"} />}
                </button>}
            </Media>
            <nav className={h['header-menu']} aria-label="header menu">
                <Media query="(min-width: 1160px)">
                    {
                        matches => matches ?
                            <Link to={'/'} className={h['header-logo']}><LogoImage color={'#17272e'} /></Link>
                            :
                            <Link to={'/'} className={h['header-logo']}><LogoImage color={'#00adef'}/></Link>
                    }
                </Media>
                <Media query="(min-width: 1160px)">
                    {
                        matches => matches ?
                           <>
                               {setIsMenuOpened(false)}
                            <HeaderList />
                           </>:
                            <>
                            <HeaderMediaList isMenuOpened={isMenuOpened} />
                            </>
                    }
                </Media>
            </nav>
            <form className={h['header-form']}>
                <Media query="(min-width: 1160px)">
                    {matches => matches?(
                        <HeaderForm isFocused={isFocused}
                                    serarching={serarching}
                                    isClear={isClear}
                                    setIsFocused={setIsFocused}
                                    isSearch={isSearch}
                                    searchValue={searchValue} />
                    ):<a className={h['header-media_link']}  href={"https://vimeo.com/search"}><Search color={'#5a6871'} size={22} /></a>   }
                </Media>
                <Media query="(min-width: 1160px)">
                    {matches =>
                        matches ? (
                            <>
                        <button className={`${h['header-form_btn']} ${h['tt']}`}>Log in</button>
                        <button className={`${h['header-form_btn']} ${h['gn']}`}>Join</button>
                        <button className={`${h['header-form_btn']} ${h['bu']}`}>New video {<Chd />}
                            <div className={h['header-new_video']}>
                                <ul className={h['header-new_video-list']}>
                                    <li className={h['header-new_video-item']} ><CloudArrowUpFill  size={22}  />Upload </li>
                                    <li className={h['header-new_video-item']} ><Pencil  size={22}  />Create video</li>
                                    <li className={h['header-new_video-item']} ><RecordCircle  size={22}  />Record Screen</li>
                                    <li className={h['header-new_video-item']} ><CameraVideo  size={22}  />Go live</li>
                                </ul>
                            </div>
                        </button>
                            </>
                        ) : <p></p>
                    }
                </Media>

            </form>
        </header>
        </>
    )
}
export default  Header;