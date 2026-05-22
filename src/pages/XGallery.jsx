import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import XPCGallery from '../Components/XPCgallery';
import XMOBGallery from '../Components/XMOBgallery';
import { useState } from 'react';

function XGallery() {
    document.getElementById("webTitle").textContent = "DBS - *Illegal* Weapon Finish Gallery";
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var [winWidth, setWinWidth] = useState(window.innerWidth);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme){
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <XMOBGallery color={["dark", "light", "black"]}/> : <XPCGallery color={["dark", "light", "black"]}/>}
            </div>
        );
    }
    else{
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <XMOBGallery color={["light", "dark", "white"]}/> : <XPCGallery color={["light", "dark", "white"]}/>}
            </div>
            );
    }
}

export default XGallery;