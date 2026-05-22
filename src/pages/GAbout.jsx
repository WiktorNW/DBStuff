import { Link } from 'react-router-dom';
import Footer from './../Components/footer';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function GAbout() {
    document.title = "DBS - About WFG";
    var color = [];
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    return (
        <div className={`${isMobileDevice ? "pb-1" : "p-4"} bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto p-4 bg-${color[0]} text-${color[1]} m-auto ${isMobileDevice ? '' : 'w-75'} p-3 bg-${color[0]} rounded shadow text-center`}>About Weapon Finish Gallery</h1>

            <div className={`mt-4 navbar sticky-top bg-${color[0]} text-${color[1]} m-auto ${isMobileDevice ? '' : 'w-75'} p-3 bg-${color[0]} rounded shadow m-auto justify-content-center`}>

                <Link to="/Gallery" className={`btn btn-${color[0]} bg-${color[0]} border-2 border-${color[1]} m-1`}><i className="bi bi-arrow-return-left" /> Back to the Gallery</Link>
                <Link to="/Changelog" className={`btn btn-${color[0]} bg-${color[0]} border-2 border-${color[1]} m-1`}>WFG Changelog</Link>

            </div>

            <div className={`m-auto ${isMobileDevice ? '' : 'w-75'} mt-4 p-4 bg-${color[0]} text-${color[1]} rounded shadow`}>

                <h2>First of all - special thanks</h2>
                <p><b>Special thanks to all my friends and other people who got involved in creation of this project for your help</b></p>

                <h3>Why have I created this?</h3>
                <p>I did it mostly because I like how different weapon skins look like in game and I wanted to make a gallery where I could check them. But I decided to make it public so everyone can see how different weapons look in ranked, obsidian or other collections. The main inspiration was Steam guide made by Zolerox <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1289953103" target="_blank" className={`text-${color[1]}`}>Weapon Skins -2022 Update- 100%</a> where you can see in main menu different weapon skins from dedicated weapon skins' cards like KMA, CoreSec or Contraband.</p>

                <h3>Why do some of these weapons look better than mine?</h3>
                <p>Well, I use high graphics settings, but it all depends on 1 setting "High Quality Materials". The skins I found affected by it with clear difference are: Cobalt Fragment, Xmas2015 and GuardianSpecial. Some other collections have 3D effects like Hexagon or Ghostclip which aren't present without HQM on, it's very small detail.</p>
                <p><img src="img/diff.png" alt="HQM ON VS HQM OFF" className={ isMobileDevice ? "w-100" : "w-50" } /></p>

                <h3>Missing images</h3>
                <p>There might be some missing images, that means I didn't get any screenshot of that weapon in this collection yet. You can help me with getting missing screenshots, but more about this in next point. Also I if you see missing images in collection view but not in weapon view and vice versa, fell free to message me about this.</p>

                <h3>How can I help?</h3>
                <p>You can help me by sending me on Discord screenshots you took, my name is "wiktornw".<br />The screenshots I do and prefer to add here are no hud (<i>togglehud</i> command), high graphics settings and and in all positions where the inspect animation like stops for a second. For weapons' skin cards I prefer them in Pristine wear. Also, here are the lists where both I and you can check what's missing or not, aside of what you can see on the website:</p>
                    <ul>
                        <li><a href="https://lists.live.com/:l:/g/personal/5d9f56a2278a208a/FK1Fwf14wR5MlI3ty41rHYkBpcjZOauN3SPMPGDRzh--3g?e=Su3dbs" target="_blank" className={`text-${color[1]}`}>Regular Edition Cards</a> (finished)</li>
                        <li><a href="https://lists.live.com/:l:/g/personal/5d9f56a2278a208a/FHBBJWX87XNEm3vLlN9FFy0BGuoQYHzCtT7bE67qpGlhiA?e=1REBOn" target="_blank" className={`text-${color[1]}`}>Special Edition Cards</a> (finished)</li>
                        <li><a href="https://lists.live.com/:l:/g/personal/5d9f56a2278a208a/FCVTezkQSHJLt48jrOCkfXAB6WOjp-OS2ph-rY7Mct96rQ?e=1KdmpG" target="_blank" className={`text-${color[1]}`}>Obsidian Cards</a> (finished)</li>
                        <li><a href="https://lists.live.com/:l:/g/personal/5d9f56a2278a208a/FKG5Beto9wJBorh0ryv5rTcB_W1cXlT1anfOubTJY7WRTA?e=mmuK4A" target="_blank" className={`text-${color[1]}`}>Weapon Cards</a> (finished)</li>
                    </ul>

                <h3>Future plans</h3>
                <p>After "finishing" gallery that doesn't mean I won't do anything here. I surely will be refreshing some of the screenshots to be the same style on Underground map, but it won't be top priority. There are other projects I want to do and have my personal life.</p>
                <p>I don't think there will be many changes, but I have some in my mind. Here's a few of them:</p>
                    <ul>
                        {/*<li>Dark theme</li>*/}
                        <li><s>Hamburger menu - to replace navigation bar for mobile users and low resolution devices</s></li>
                        <li><s>Scroll to top button</s></li>
                    </ul>
                    <p>If you have any idea feel free to message me about it and I may consider implementing it.</p>

            </div>

            <Footer />

        </div>
    );
}

export default GAbout;