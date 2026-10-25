import { Link, Router } from 'react-router-dom';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './../Components/footer';
import { useEffect } from 'react';

function Main() {
    
    useEffect(() => {
        const isDevIcon = import.meta.env.DEV
        ? "/favicon-dev.ico"
        : "/favicon.ico";

        const favicon = document.querySelector("link[rel='icon']").href = isDevIcon;

    })

    document.title = "Dirty Bomb Stuff";
    var color = [];
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    return (
        <div className={`${isMobileDevice ? "pb-1" : "p-4"} bg-${color[2]} bg-gradient min-vh-100`}>

            <div className={`alert - alert-${color[0]}`} role="alert">
                I'm currently testing a <Link to="/" className="alert-link">new layout for Main Page</Link>. Come, take a look and let me know what do you think about it.
            </div>

            <h1 className={`m-auto ${isMobileDevice ? "" : "w-100"} p-4 bg-${color[0]} text-${color[1]} rounded shadow text-center`}>Dirty Bomb Stuff</h1>

            <div className={`d-none m-auto ${isMobileDevice ? "" : "w-100"} p-3 mt-3 bg-${color[0]} text-${color[1]} rounded shadow text-center`}>
                <h3>DBS 1st Anniversary!</h3>
                <p>Wow, it's been 1 year since the project's release (May 14th 2025). Feels like yesterday</p>
            </div>

            <div className={`m-auto ${isMobileDevice ? "" : "w-100"} mt-4 p-4 bg-${color[0]} text-${color[1]} rounded shadow`}>

                <h3>Why am I doing this?</h3>
                <p>I'm doing this project, because I want to learn some more of ReactJS, I like writing websites, and I wanted to do something cool that's related to Dirty Bomb so community can use it.</p>

                <h3>Here's what I have done so far:</h3>
                <div>

                    <ul>
                        <li>
                            <h4>Weapon Finish Gallery</h4>
                            <p>A complete gallery with weapon skins from cards like leads, bronzes, cobalts, special editions, obsidians and even weapon cards.<br />
                                <Link to="/Gallery"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>Weapon Finish Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <h4>Mercs' Suits Gallery</h4>
                            <p>A complete gallery with every official and acquired with bugs suit for every merc in the game.<br />
                                <Link to="/Suits"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>Mercs' Suits Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <h4>Merc Preview Gallery <b>NEW!</b></h4>
                            <p>Gallery with merc previews from main menu. Both team and enemy variants for every merc with all of their primary weapons.<br />
                                <Link to="/Mercs"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>Merc Preview Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                    </ul>

                    <h5>Ideas that were suggested or I thought about to do in later time:</h5>
                    <ul>
                        <li>(From friend) Weapon Stats Page</li>
                        <li>Trinkets Gallery</li>
                        <li>Remaster/Upgraded version of Zolerox's <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1289953103" target="_blank" className={`text-${color[1]}`}>Weapon Skins Steam guide</a></li>
                    </ul>
                </div>
            </div>

            <div className={`m-auto ${isMobileDevice ? "" : "w-100"} mt-4 p-4 bg-${color[0]} text-${color[1]} rounded shadow`}>

                <h3>Other Dirty Bomb projects worth your attention:</h3>

                <ul>
                    <li>
                        <h4>Aleeee's Dirty Bomb Jumps Hub</h4>
                        <p>Together with Aleeee we've prepared a few usefull, classic or cool to know jumps across all maps in Dirty Bomb.<br />
                            <a href="https://463player.github.io/db-jumps" target="_blank"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>Aleeee's Dirty Bomb Jumps Hub <i className="bi bi-arrow-right"></i></button></a>
                        </p>
                    </li>
                    <li>
                        <h4>★Trixxy★'s DB Ranked Revival</h4>
                        <p>
                            "Community ladder for Dirty Bomb players"<br />
                             Not official ranked, but something separate and different. Generally cool stuff.<br />
                            <a href="https://dbranked.com/" target="_blank"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>★Trixxy★'s DB Ranked Revival <i className="bi bi-arrow-right"></i></button></a>
                        </p>
                    </li>
                    <li>
                        <h4>Dirty Bomb Steam Guides</h4>
                        <p>Despite some of them might be outdated, it's still worth checking out<br />
                        My personal favorite is Zolerox's <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1289953103" target="_blank" className={`text-${color[1]}`}>Weapon Skins -2022 Update- 100%</a> that inspired me to start this project.<br />
                            <a href="https://steamcommunity.com/app/333930/guides/" target="_blank"><button className={`mt-2 btn border-2 border-${color[1]} btn-${color[0]}`}>Dirty Bomb Steam Guides <i className="bi bi-arrow-right"></i></button></a>
                        </p>
                    </li>
                </ul>

            </div>

            <Footer />
        </div>
    );
}

export default Main;