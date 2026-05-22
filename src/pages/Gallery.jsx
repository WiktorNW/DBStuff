import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import PCGallery from '../Components/PCgallery';
import MOBGallery from '../Components/MOBgallery';
import { useState } from 'react';

function Gallery() {
    document.title = "DBS - Weapon Finish Gallery";
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var [winWidth, setWinWidth] = useState(window.innerWidth);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(isDarkTheme)

    if (isDarkTheme){
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBGallery color={["dark", "light", "black"]}/> : <PCGallery color={["dark", "light", "black"]}/>}
            </div>
        );
    }
    else{
        return(
            <div>
                {isMobileDevice || winWidth < 1280 ? <MOBGallery color={["light", "dark", "white"]}/> : <PCGallery color={["light", "dark", "white"]}/>}
            </div>
            );
    }
}

export default Gallery;