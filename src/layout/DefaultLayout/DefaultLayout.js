import React, {useState, useEffect} from "react";

import ProgressBar from "~/components/ProgressBar";
import About from "./About";
import Knowledge from "./Knowledge";
import Welcome from "./Welcome";
import Activity from "./Activity";
import Project from "./Project";
import CopyRight from "./CopyRight";


function DefaultLayout({children}){
    const [barProcess, setBarProcess] = useState(true);
    const [content, setContent] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setBarProcess(false);
            setContent(true)
        },[2500])
    },[])
    return(
        <div className="px-10 md:px-24">
            {
                barProcess && <>
                    <ProgressBar/>
                </>
            }
            {
                content && <>
                    <Welcome/>
                    <About/>
                    <Knowledge/>
                    <Activity/>
                    <Project/>
                    <CopyRight/>
                </>
            }
        </div>
    );
}

export default DefaultLayout;