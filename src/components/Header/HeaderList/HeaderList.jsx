import React from 'react';
import h from "../style.module.scss";
import Chd from "../../Chd/Chd";

function HeaderList() {
    return (
        <ul className={h['header-list']}>
            <li className={h['header-item']}>Solutions <Chd/>
                <div className={h['header-closed_submenu']}>
                    <div className={h['header-grid']}>
                        <a href="#!" className={h['header-grid_link']}>
                        <div className={h['header-grid_item']}><h3 className={h['header-grid_title']}>Video marketing</h3><p className={h['header-grid_desc']}>Create and promote branded videos, host live events and webinars, and more.</p></div>
                        </a>
                        <a href="#!" className={h['header-grid_link']}>
                            <div className={h['header-grid_item']}><h3 className={h['header-grid_title']}>Employee communication</h3><p className={h['header-grid_desc']}>Host virtual town halls, onboard and train employees, collaborate efficiently.</p></div>
                        </a>
                        <a href="#!" className={h['header-grid_link']}>
                        <div className={h['header-grid_item']}><h3 className={h['header-grid_title']}>Video monetization</h3><p className={h['header-grid_desc']}>Build a site and generate income from purchases, subscriptions, and courses.</p></div>
                        </a>
                    </div>
                </div>
            </li>
            <li className={h['header-item']}>Features <Chd/>
                <div className={h['header-closed_submenu']}>
                    <div className={h["header-grid"]}>
                        <div className={h['header-grid_item']}>
                            <h3 className={h['header-grid_title']}>Create</h3>
                            <span className="hr" />
                            <ul className={h['header-grid_list']}>
                                <li className={h['header-grid_links-item']}>Interactive video</li>
                                <li className={h['header-grid_links-item']}>Live stream</li>
                                <li className={h['header-grid_links-item']}>Screen record</li>
                                <li className={h['header-grid_links-item']}>Create from templates</li>
                                <li className={h['header-grid_links-item']}>Hire a video pro</li>
                                <li className={h['header-grid_links-item']}>License stock footage</li>
                            </ul>
                        </div>
                        <div className={h['header-grid_item']}>
                            <h3 className={h['header-grid_title']}>Manage</h3>
                            <span className="hr" />
                            <ul className={h['header-grid_list']}>
                                <li className={h['header-grid_links-item']}>Video library</li>
                                <li className={h['header-grid_links-item']}>Ad-free player</li>
                                <li className={h['header-grid_links-item']}>Hosting</li>
                                <li className={h['header-grid_links-item']}>Privacy</li>
                                <li className={h['header-grid_links-item']}>Collaboration</li>
                            </ul>
                        </div>
                        <div className={h['header-grid_item']}>
                            <h3 className={h['header-grid_title']}>Grow</h3>
                            <span className="hr" />
                            <ul className={h['header-grid_list']}>
                                <li className={h['header-grid_links-item']}>Enterprise</li>
                                <li className={h['header-grid_links-item']}>Host virtual events</li>
                                <li className={h['header-grid_links-item']}>Publish everywhere</li>
                                <li className={h['header-grid_links-item']}>Analyze</li>
                                <li className={h['header-grid_links-item']}>Monetize</li>
                            </ul>
                        </div>
                        <div className={h['header-grid_item']}>
                            <div className={h["header-grid_ad"]}>
                                <h3 className={h["header-grid_ad-sub-title"]}>demo videos</h3>
                                <h4 className={h["header-grid_ad-title"]}>Get to know everything Vimeo can do for your business.</h4>
                                <button type="button" className={h["header-grid_ad-button"]}>Watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className={h['header-item']}>Resources <Chd/>
                <div className={h['header-closed_submenu']}>
                    <div className={h["header-grid"]}>
                        <div className={h['header-grid_item']}>
                            <h3 className={h['header-grid_title']}>Learn</h3>
                            <span className="hr" />
                            <ul className={h['header-grid_list']}>
                                <li className={h['header-grid_links-item']}>Vimeo blog</li>
                                <li className={h['header-grid_links-item']}>Video School</li>
                                <li className={h['header-grid_links-item']}>Customer stories</li>
                                <li className={h['header-grid_links-item']}>Investor Relations</li>
                            </ul>
                        </div>
                        <div className={h['header-grid_item']}>
                            <h3 className={h['header-grid_title']}>Connect</h3>
                            <span className="hr" />
                            <ul className={h['header-grid_list']}>
                                <li className={h['header-grid_links-item']}>Developer tools</li>
                                <li className={h['header-grid_links-item']}>Partner program</li>
                                <li className={h['header-grid_links-item']}>Creative community</li>
                                <li className={h['header-grid_links-item']}>Help center</li>
                            </ul>
                        </div>
                  </div>
                </div>
            </li>
            <li className={h['header-item']}>Watch</li>
            <li className={h['header-item']}>Pricing</li>
            <li className={h['header-item']}>Contact Sales</li>
        </ul>

    );
}

export default HeaderList;