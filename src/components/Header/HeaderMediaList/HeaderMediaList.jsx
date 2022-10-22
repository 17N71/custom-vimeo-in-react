import hd from "./style.module.scss"
import {Link} from "react-router-dom";
import LogoImage from "../../LogoImage/LogoImage";
import React, {useEffect, useState} from "react";
import {CloudArrowUp, Gear, Search} from "react-bootstrap-icons";
import Chd from "../../Chd/Chd";
const HeaderMediaList = ({isMenuOpened}) => {
    const [isOpenSubList1,setIsOpenSubList1] = useState(false)
    const [isOpenSubList2,setIsOpenSubList2] = useState(false)
    const [isOpenSubList3,setIsOpenSubList3] = useState(false)
    useEffect(()=>{
        if(!isMenuOpened){
            setIsOpenSubList1(false)
            setIsOpenSubList2(false)
            setIsOpenSubList3(false)
        }
    },[isMenuOpened])
    return (
        <div className={`${hd['header-list']} ${isMenuOpened?hd['opened']:""}`}>
            <div className={hd["header-list_header"]}>
                <span></span>
                <Link to={'/'} className={hd['header-logo']}><LogoImage color={'#17272e'} /></Link>
                <button type="button" className={hd['header-settings']}><Gear size={24} color={'#b1b1b1'}/></button>
            </div>
            <ul className={hd['sub-list']}>
                <li className={`${hd['sub-list_child']} ${isOpenSubList1?hd['opened']:""}`} onClick={()=>setIsOpenSubList1(!isOpenSubList1)}>Solutions  <Chd size={26} /></li>
                <div className={`${hd['header-list-sub_menu']} ${isOpenSubList1?hd['opened']:""}`}>
                    <a href="#!" className={hd['header-sub-list_link']}>
                        <div className={hd['header-sub-list_item']}>
                            <h3 className={hd['header-sub-list_title']}>Video marketing</h3>
                            <p className={hd['header-sub-list_desc']}>Create and promote branded videos, host live events and webinars, and more.</p>
                        </div>
                    </a>
                    <a href="#!" className={hd['header-sub-list_link']}>
                        <div className={hd['header-sub-list_item']}>
                            <h3 className={hd['header-sub-list_title']}>Employee communication</h3>
                            <p className={hd['header-sub-list_desc']}>Host virtual town halls, onboard and train employees, collaborate efficiently.</p>
                        </div>
                    </a>
                    <a href="#!" className={hd['header-sub-list_link']}>
                        <div className={hd['header-sub-list_item']}>
                            <h3 className={hd['header-sub-list_title']}>Video monetization</h3>
                            <p className={hd['header-sub-list_desc']}>Build a site and generate income from purchases, subscriptions, and courses.</p>
                        </div>
                    </a>
                </div>
                <li className={`${hd['sub-list_child']} ${isOpenSubList2?hd['opened']:""}`} onClick={()=>setIsOpenSubList2(!isOpenSubList2)}>Features <Chd  size={26}/></li>
                <div className={`${hd['header-list-sub_menu']} ${isOpenSubList2?hd['opened']:""}`}>
                    <div className={hd["header-list-sub_menu-container"]}>
                        <div className={hd["header-list-sub_menu-container"]}>
                            <h3 className={hd['header-list-sub_title']}>Create</h3>
                            <ul className={hd['header-sub-list_list']}>
                                <li className={hd['header-sub_list_links-item']}>Interactive video</li>
                                <li className={hd['header-sub_list_links-item']}>Live stream</li>
                                <li className={hd['header-sub_list_links-item']}>Screen record</li>
                                <li className={hd['header-sub_list_links-item']}>Create from templates</li>
                                <li className={hd['header-sub_list_links-item']}>Hire a video pro</li>
                                <li className={hd['header-sub_list_links-item']}>License stock footage</li>
                            </ul>
                        </div>
                        <div className={hd["header-list-sub_menu-container"]}>
                            <h3 className={hd['header-list-sub_title']}>Manage</h3>
                            <ul className={hd['header-sub-list_list']}>
                                <li className={hd['header-sub_list_links-item']}>Video library</li>
                                <li className={hd['header-sub_list_links-item']}>Ad-free player</li>
                                <li className={hd['header-sub_list_links-item']}>Hosting</li>
                                <li className={hd['header-sub_list_links-item']}>Privacy</li>
                                <li className={hd['header-sub_list_links-item']}>Collaboration</li>
                            </ul>
                        </div>
                        <div className={hd["header-list-sub_menu-container"]}>
                            <h3 className={hd['header-list-sub_title']}>Grow</h3>
                            <ul className={hd['header-sub-list_list']}>
                                <li className={hd['header-sub_list_links-item']}>Enterprise</li>
                                <li className={hd['header-sub_list_links-item']}>Host virtual events</li>
                                <li className={hd['header-sub_list_links-item']}>Publish everywhere</li>
                                <li className={hd['header-sub_list_links-item']}>Analyze</li>
                                <li className={hd['header-sub_list_links-item']}>Monetize</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <li className={`${hd['sub-list_child']} ${isOpenSubList3?hd['opened']:""}`} onClick={()=>setIsOpenSubList3(!isOpenSubList3)}>Resources <Chd size={26} /></li>
                <li className={hd['sub-list_child']}>Watch</li>
                <div className={`${hd['header-list-sub_menu']} ${isOpenSubList3?hd['opened']:""}`}>
                    <div className={hd["header-list-sub_menu-container"]}>
                        <div className={hd["header-list-sub_menu-container"]}>
                            <h3 className={hd['header-list-sub_title']}>Learn</h3>
                            <ul className={hd['header-sub-list_list']}>
                                <li className={hd['header-sub-list_links-item']}>Vimeo blog</li>
                                <li className={hd['header-sub-list_links-item']}>Video School</li>
                                <li className={hd['header-sub-list_links-item']}>Customer stories</li>
                                <li className={hd['header-sub-list_links-item']}>Investor Relations</li>
                            </ul>
                        </div>
                        <div className={hd["header-list-sub_menu-container"]}>
                            <h3 className={hd['header-list-sub_title']}>Connect</h3>
                            <ul className={hd['header-sub-list_list']}>
                                <li className={hd['header-sub-list_links-item']}>Developer tools</li>
                                <li className={hd['header-sub-list_links-item']}>Partner program</li>
                                <li className={hd['header-sub-list_links-item']}>Creative community</li>
                                <li className={hd['header-sub-list_links-item']}>Help center</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <li className={hd['sub-list_child']}>Pricing</li>
                <li className={hd['sub-list_child']}>Contact Sales</li>
                <li className={hd['sub-list_child']}>
                    <a className={hd['header-media_link']}  href={"https://vimeo.com/search"}><Search color={'#5a6871'} size={16} /> Search</a></li>
            </ul>
            <button type="button" className={hd['sub-footer-btn']}> <CloudArrowUp /> Upload</button>
        </div>
    )
}
export default HeaderMediaList;