import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import PCSuits from '../Components/PCSuits';
import MOBSuits from '../Components/MOBSuits';
import { useState, useEffect } from 'react';

function Suits() {

    useEffect(() => {
        const isDevIcon = import.meta.env.DEV
        ? "/favicon-dev.ico"
        : "/favicon.ico";

        const favicon = document.querySelector("link[rel='icon']").href = isDevIcon;

    })

    document.title = "DBS - Mercs' Suits Gallery";
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var [winWidth, setWinWidth] = useState(window.innerWidth);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme){
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBSuits color={["dark", "light", "black"]}/> : <PCSuits color={["dark", "light", "black"]}/>}
            </div>
        );
    }
    else{
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBSuits color={["light", "dark", "white"]}/> : <PCSuits color={["light", "dark", "white"]}/>}
            </div>
            );
    }
}

export default Suits;