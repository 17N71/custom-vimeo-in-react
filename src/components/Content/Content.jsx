import React, {useEffect, useState} from "react";
const CustomSlider = React.lazy(() => import('../CustomSlider/CustomSlider'));


const Content = ()=>{
    const ACCESSKEY ="Ppak9MsqmTMdgunKhAY0VRJAwrVy1YyMf3SVmn1e81Q"
    const base_url = "https://api.unsplash.com"
    const [images, setImages] = useState([]);
    useEffect(() => {
            dataFetching()
    },[]);
    const dataFetching = async()=>{
       await fetch(`${base_url}/photos/random?client_id=${ACCESSKEY}&&count=10`)
            .then(res=>res.json()).then(json=>setImages([...images,...json]))
    }
    return(
        <>

        </>
    )
}
export default Content;