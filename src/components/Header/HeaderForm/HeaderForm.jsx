import React from 'react';
import h from "../style.module.scss";
import {Search, XLg} from "react-bootstrap-icons";

function HeaderForm({setIsFocused,searchValue,serarching,isSearch,isFocused,isClear}) {
    return (
        <div className={h['header-form_searchbar']} style={{border:isFocused?'2px solid #0088cc':"2px solid #bdcad3"}}>
            <input type="text"
                   onFocus={()=>setIsFocused(true)}
                   onBlur={()=>setIsFocused(false)}
                   className={h['header-input']}
                   placeholder={'Search videos,people, and more'}
                   value={searchValue} onChange={serarching}/>
            <button type="button" className={h['header-input_button']} onClick={isClear} aria-label={isSearch?"submit":"clear"}>
                {isSearch? <Search color={'#5a6871'}  /> :<XLg color={'#5a6871'}   />}
            </button>
        </div>
    );
}

export default HeaderForm;