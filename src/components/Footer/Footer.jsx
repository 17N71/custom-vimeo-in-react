import React, {useState,useCallback} from "react";
import f from "./style/footer.module.scss"
import LogoImage from "../LogoImage/LogoImage";
import Media from "react-media";
import Chd from "../Chd/Chd";


const Footer = () => {
    const [list1,setList1] = useState(false)
    const [list2,setList2] = useState(false)
    const [list3,setList3] = useState(false)
    const [list4,setList4] = useState(false)
    const footerList1 = useCallback(()=>{
        setList1(!list1)
    },[list1])
    const footerList2 = useCallback(()=>{
        setList2(!list2)
    },[list2])
    const footerList3 = useCallback(()=>{
        setList3(!list3)
    },[list3])
    const footerList4 = useCallback(()=>{
        setList4(!list4)
    },[list4])
    return (
        <footer className={f['footer']}>
            <nav className={f["footer-menu"]} aria-label="footer menu">
                <a href="/" className={f['footer-logo']}><LogoImage color={'#ffffff'} /></a>
                <div className={f['footer-lists']}>
                    <div className={f['footer-list-container']}>
                        <Media query="(min-width: 1100px)">
                            {matches=>matches?   <h2 className={f['footer-list_title']}>
                                Product
                            </h2>:(<> <h2 className={f['footer-list_title']} onClick={footerList1}>
                                Product <Chd size={26}/>
                            </h2></>)}
                        </Media>
                        <ul className={`${f['footer-list']} ${list1?f['opened']:f['closed']}`}>
                            <li className={f['footer-item']}>Interactive Video</li>
                            <li className={f['footer-item']}>Auto Caption</li>
                            <li className={f['footer-item']}>Webinar</li>
                            <li className={f['footer-item']}>Virtual Events</li>
                            <li className={f['footer-item']}>Video Player</li>
                            <li className={f['footer-item']}>Video Library</li>
                            <li className={f['footer-item']}>Create</li>
                            <li className={f['footer-item']}>Live Streaming</li>
                            <li className={f['footer-item']}>Screen Recorder</li>
                            <li className={f['footer-item']}>Privacy</li>
                            <li className={f['footer-item']}>Collaboration</li>
                            <li className={f['footer-item']}>Distribution & Marketing</li>
                            <li className={f['footer-item']}>Monetization</li>
                            <li className={f['footer-item']}>Analytics</li>
                            <li className={f['footer-item']}>Hosting & Management</li>
                            <li className={f['footer-item']}>Stock</li>
                            <li className={f['footer-item']}>For Hire</li>
                        </ul>
                    </div>
                    <div className={f['footer-list-container']}>
                        <Media query="(min-width: 1100px)">
                            {matches=>matches?   <h2 className={f['footer-list_title']}>
                                Resources
                            </h2>:(<> <h2 className={f['footer-list_title']} onClick={footerList2}>
                                Resources <Chd size={26}/>
                            </h2></>)}
                        </Media>
                        <ul className={`${f['footer-list']} ${list2?f['opened']:f['closed']}`}>
                            <li className={f['footer-item']}>Help Center</li>
                            <li className={f['footer-item']}>Blog</li>
                            <li className={f['footer-item']}>Our Customers</li>
                            <li className={f['footer-item']}>Video School</li>
                            <li className={f['footer-item']}>OTT Resources</li>
                            <li className={f['footer-item']}>Developers</li>
                            <li className={f['footer-item']}>Students</li>
                            <li className={f['footer-item']}>Become a Partner</li>
                            <li className={f['footer-item']}>Join Vimeo Experts</li>
                            <li className={f['footer-item']}>Guidelines</li>
                        </ul>
                    </div>
                    <div className={f['footer-list-container']}>
                        <Media query="(min-width: 1100px)">
                        {matches=>matches?   <h2 className={f['footer-list_title']}>
                            Apps
                        </h2>:(<> <h2 className={f['footer-list_title']} onClick={footerList3}>
                            Apps <Chd size={26}/>
                        </h2></>)}
                    </Media>
                        <ul className={`${f['footer-list']} ${list3?f['opened']:f['closed']}`}>
                            <li className={f['footer-item']}>Vimeo for macOS</li>
                            <li className={f['footer-item']}>Vimeo for iOS</li>
                            <li className={f['footer-item']}>Vimeo for Android</li>
                            <li className={f['footer-item']}>Vimeo Create for iOS</li>
                            <li className={f['footer-item']}>Vimeo Create for Android</li>
                            <li className={f['footer-item']}>Magisto</li>
                            <li className={f['footer-item']}>Vimeo for Shopify</li>
                            <li className={f['footer-item']}>Vimeo for Zoom</li>
                        </ul>
                    </div>
                    <div className={f['footer-list-container']}>
                       <Media query="(min-width: 1100px)">
                            {matches=>matches?   <h2 className={f['footer-list_title']}>
                                Vimeo
                            </h2>:(<> <h2 className={f['footer-list_title']} onClick={footerList4}>
                                Vimeo
                                <Chd size={26}/></h2></>)}
                        </Media>
                        <ul className={`${f['footer-list']} ${list4?f['opened']:f['closed']}`}>
                            <li className={f['footer-item']}>Pricing</li>
                            <li className={f['footer-item']}>Upload</li>
                            <li className={f['footer-item']}>Staff Picks</li>
                            <li className={f['footer-item']}>On Demand</li>
                            <li className={f['footer-item']}>Vimeo OTT</li>
                            <li className={f['footer-item']}>Site map</li>
                            <li className={f['footer-item']}>About</li>
                            <li className={f['footer-item']}>Investor Relations</li>
                            <li className={f['footer-item']}>Press</li>
                            <li className={f['footer-item']}>Jobs</li>
                        </ul>
                    </div>
                </div>
                <Media query="(min-width:1100px)">
                    {matches=>matches?<span/>:""}
                </Media>
            </nav>
            <div className={f['footer-footer']}>
                <div className={f['footer-columns']}>
                    <h4 className={f.footer_rights}>&copy; 2022 Vimeo.com, Inc. All rights reserved.</h4>
                    <ul className={f["footer-sub_list"]}>
                        <li className={f['footer-sub_item-link']}>Terms</li>
                        <li className={f['footer-sub_item-link']}>Privacy</li>
                        <li className={f['footer-sub_item-link']}>CA Privacy</li>
                        <li className={f['footer-sub_item-link']}>Copyright</li>
                        <li className={f['footer-sub_item-link']}>Cookies</li>
                    </ul>
                </div>
                <div className={f["footer-settings"]}>
                    <p className={f['footer-setting']}>Language: <a href="#!" className={f['footer-setting_link']}>English</a></p>
                    <p className={f['footer-setting']}>Mature content filter: <a href="#!" className={f['footer-setting_link']}>None</a></p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;