import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import PCMercs from '../Components/PCMercs';
import MOBMercs from '../Components/MOBMercs';
import { useState, useEffect } from 'react';

function Mercs() {

    useEffect(() => {
        const isDevIcon = import.meta.env.DEV
        ? "/favicon-dev.ico"
        : "/favicon.ico";

        const favicon = document.querySelector("link[rel='icon']").href = isDevIcon;

    })

    document.title = "DBS - Merc Preview Gallery";
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var [winWidth, setWinWidth] = useState(window.innerWidth);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme){
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBMercs color={["dark", "light", "black"]}/> : <PCMercs color={["dark", "light", "black"]}/>}
            </div>
        );
    }
    else{
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBMercs color={["light", "dark", "white"]}/> : <PCMercs color={["light", "dark", "white"]}/>}
            </div>
            );
    }
}

export default Mercs;