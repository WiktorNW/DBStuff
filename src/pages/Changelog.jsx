import { Link } from 'react-router-dom';
import Footer from './../Components/footer';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { useState } from 'react';

function Changelog() {
    document.title = "DBS - WFG Changelog";
    var color = [];
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);

    var [up1, setUp1] = useState(['none', 'right']);
    var [up2, setUp2] = useState(['none', 'right']);
    var [up2h2, setUp2h2] = useState(['none', 'right']);
    var [up3, setUp3] = useState(['none', 'right']);
    var [up3p1, setUp3p1] = useState(['none', 'right']);
    var [up3p2, setUp3p2] = useState(['none', 'right']);
    var [up4, setUp4] = useState(['block', 'down']);
    return (
        <div className={`${isMobileDevice ? "pb-1" : "p-4"} bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto ${isMobileDevice ? '' : 'w-75'} p-4 bg-${color[0]} rounded shadow text-center text-${color[1]}`}>WFG Changelog</h1>

            <div className={`mt-4 navbar sticky-top bg-${color[0]} text-${color[1]} m-auto ${isMobileDevice ? '' : 'w-75'} p-3 bg-${color[0]} rounded shadow m-auto justify-content-center`}>

                <Link to="/GAbout" className={`btn btn-${color[0]} bg-${color[0]} border-2 border-${color[1]} m-1`}><i className="bi bi-arrow-return-left" /> Back to the About</Link>
                <Link to="/Gallery" className={`btn btn-${color[0]} bg-${color[0]} border-2 border-${color[1]} m-1`}><i className="bi bi-arrow-return-left" /> Back to the Gallery</Link>

            </div>

            <div className={`m-auto ${isMobileDevice ? '' : 'w-75'} p-4 bg-${color[0]} mt-4 p-4 bg-${color[0]} text-${color[1]} rounded shadow`}>

                { /* Update 4 - 14.05.2025 */ }
                <div>
                    <h2 onClick={() => up4[0] == 'none' ? setUp4(["block", "down"]) : setUp4(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up4[1]}-fill`}></i> Update 4</h2>
                    <h6>The Mercs And Stuff... Update</h6>
                    <div className={`d-${up4[0]}`}>
                        <ul>
                            <li><h5><b>NEW! Added mercs menu with all collections and weapons selected merc can use!</b></h5></li>
                            <li><b>For the whole project - added dark theme</b></li>
                            <li><b>Added Nexon collection!</b><br />- Honestly I never thought I could ever get screenshots of this collection, but I did! Thank you for helping me</li>
                            <li>Added HOCHFIR SMG to Alienware view<br />- I somehow missed it, thanks to my friend for pointing this out</li>
                            <li>Added option to check some skins without High Quality Materials setting on</li>
                            <li>(PC View) Added option to change amount of images per row - from 1 to 6 images in a single row</li>
                            <li>Changed a bit order of navbar menus</li>
                            <li>Changed blocks' width to be always 75% of your screen's width</li>
                            <li>Reworked Changelog site</li>
                            <li>Updated icons of rarity based weapon cards (Alice, Aquila, BetaVeteran etc.)</li>
                            <li>Changed MP400 screenshots to show playside instead of backside</li>
                        </ul>
                        <h4>Images</h4>
                        Refreshed like A LOT of them<br />
                        Added:
                        <ul>
                            <li>
                                Gold Bamboo
                                <ul>
                                    <li>AREVAROV 9</li>
                                    <li>BLISHLOK</li>
                                    <li>BR-16</li>
                                    <li>GRANDEUR SR</li>
                                    <li>KEK-10</li>
                                    <li>PDP-70</li>
                                    <li>RYBURN</li>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                            <li>
                                Gold Crown
                                <ul>
                                    <li>AREVAROV 9</li>
                                    <li>GRANDEUR SR</li>
                                    <li>KEK-10</li>
                                    <li>MK46</li>
                                    <li>PDP-70</li>
                                    <li>RYBURN</li>
                                    <li>SELBSTADT .40</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>EMPIRE-9</li>
                                    <li>STARK AR</li>
                                </ul>
                            </li>
                            <li>
                                Nuclear Winter
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>GRANDEUR SR</li>
                                    <li>MOA SNPR-1</li>
                                    <li>PDP-70</li>
                                    <li>SHAR-C</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                { /* Update 3: Patch 1 */ }
                <div>
                    <h2 onClick={() => up3p2[0] == 'none' ? setUp3p2(["block", "down"]) : setUp3p2(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up3p2[1]}-fill`}></i> Update 3: Patch 2</h2>
                    <div className={`d-${up3p2[0]}`}>
                        <ul>
                            <li>Added option to expand and collapse changelogs of each update. The latest update will be automatically expanded while the rest is collapsed</li>
                        </ul>
                        <h4>Images</h4>
                        <ul>
                            <li>Refreshed a bunch of images for better lighting or color combos with suit</li>
                            <li>Changed Favicon to a custom one instead of default ReactJS</li>
                        </ul>
                        Added:
                        <ul>
                            <li>
                                Gold Bamboo
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>K-121</li>
                                    <li>MK46</li>
                                    <li>MOA SNPR-1</li>
                                    <li>MP400</li>
                                    <li>REMBURG-7</li>
                                    <li>SHAR-C</li>
                                    <li>SIMEON .357</li>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                    <li>STARK AR</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                            <li>
                                Gold Crown
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>BLISHLOK</li>
                                    <li>BR-16</li>
                                    <li>EMPIRE-9</li>
                                    <li>HOLLUNDS 880</li>
                                    <li>SHAR-C</li>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>BR-16</li>
                                    <li>CROTZNI</li>
                                    <li>DREISS AR</li>
                                    <li>GRANDEUR SR</li>
                                    <li>KEK-10</li>
                                    <li>MK46</li>
                                    <li>SHAR-C</li>
                                </ul>
                            </li>
                            <li>
                                Alice
                                <ul>
                                    <li>SELBSTADT .40 | Warped</li>
                                </ul>
                            </li>
                            <li>
                                Aquila
                                <ul>
                                    <li>KEK-10 | Aureum</li>
                                </ul>
                            </li>
                            <li>
                                CoreSec
                                <ul>
                                    <li>STARK AR | Blue Steel</li>
                                </ul>
                            </li>
                            <li>
                                KMA
                                <ul>
                                    <li>K-121 | Engaged</li>
                                    <li>HOCHFIR SMG | Engaged</li>
                                    <li>TØLEN MP | Engaged</li>
                                    <li>M4A1 | Overdrive</li>
                                </ul>
                            </li>
                            <li>
                                RoyalForce
                                <ul>
                                    <li>PDP-70 | Imperial Fade</li>
                                    <li>BR-16 | Imperial Fade</li>
                                    <li>HOLLUNDS 880 | Dragon King</li>
                                </ul>
                            </li>
                            <li>
                                FACEIT
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>AREVAROV 9</li>
                                    <li>BR-16</li>
                                    <li>CAULDEN</li>
                                    <li>DE .50</li>
                                    <li>EMPIRE-9</li>
                                    <li>HOIGAT .224</li>
                                    <li>HOLLUNDS 880</li>
                                    <li>K-121</li>
                                    <li>KEK-10</li>
                                    <li>M9</li>
                                    <li>MP400</li>
                                    <li>PDP-70</li>
                                    <li>REMBURG-7</li>
                                    <li>RYBURN</li>
                                    <li>SELBSTADT .40</li>
                                    <li>SIMEON .357</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                            <li>
                                Nuclear Winter
                                <ul>
                                    <li>K-121</li>
                                    <li>STARK AR</li>
                                </ul>
                            </li>
                            <li>
                                Ranked Season 4
                                <ul>
                                    <li>DE .50</li>
                                    <li>DREISS AR</li>
                                    <li>KEK-10</li>
                                    <li>M9</li>
                                    <li>MK46</li>
                                    <li>REMBURG-7</li>
                                    <li>SIMEON .357</li>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                { /* Update 3: Patch 1 */ }
                <div>
                    <h2 onClick={() => up3p1[0] == 'none' ? setUp3p1(["block", "down"]) : setUp3p1(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up3p1[1]}-fill`}></i> Update 3: Patch 1</h2>
                    <div className={`d-${up3p1[0]}`}>
                        <ul>
                            <li>Changed "More Options" to "Options" in mobile view</li>
                            <li>Fixed few typos</li>
                        </ul>
                        <h4>Images</h4>
                        Added:
                        <ul>
                            <li>
                                Gold Bamboo
                                <ul>
                                    <li>HOLLUNDS 880</li>
                                </ul>
                            </li>
                            <li>
                                Gold Crown
                                <ul>
                                    <li>CROTZNI</li>
                                    <li>DREISS AR</li>
                                    <li>FEL-IX</li>
                                    <li>HOCHFIR SMG</li>
                                    <li>K-121</li>
                                    <li>M9</li>
                                    <li>REMBURG-7</li>
                                    <li>SIMEON .357</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>MOA SNPR-1</li>
                                    <li>PDP-70</li>
                                    <li>REMBURG-7</li>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                </ul>
                            </li>
                            <li>
                                Alice
                                <ul>
                                    <li>DREISS AR | Troika</li>
                                    <li>SMJÜTH & WHETSMAN .40 | Troika</li>
                                </ul>
                            </li>
                            <li>
                                Aquila
                                <ul>
                                    <li>SELBSTADT .40 | Viridis</li>
                                    <li>SHAR-C | Legion</li>
                                </ul>
                            </li>
                            <li>
                                CoreSec
                                <ul>
                                    <li>SHAR-C | Defender</li>
                                </ul>
                            </li>
                            <li>
                                RoyalForce
                                <ul>
                                    <li>FEL-IX | Gold Scale</li>
                                </ul>
                            </li>
                            <li>
                                Contraband
                                <ul>
                                    <li>DREISS AR</li>
                                    <li>KEK-10</li>
                                </ul>
                            </li>
                            <li>
                                FACEIT
                                <ul>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                </ul>
                            </li>
                            <li>
                                Ranked Season 4
                                <ul>
                                    <li>BLISHLOK</li>
                                    <li>MOA SNPR-1</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                        </ul>
                        Refreshed:
                        <ul>
                            <li>
                                FACEIT
                                <ul>
                                    <li>SHAR-C</li>
                                    <li>TIMIK-47</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                { /* Update 3 */ }
                <div>

                    <h2 onClick={() => up3[0] == 'none' ? setUp3(["block", "down"]) : setUp3(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up3[1]}-fill`}></i> Update 3</h2>
                    <h6>The Mobile View Update</h6>
                    <div className={`d-${up3[0]}`}>
                        <h4>Gallery</h4>
                        <ul>
                            <li><h5>Gallery has now dedicated mobile view!</h5></li>
                            <li>Changed default grid to 3 images instead of 1</li>
                            <li>Added collection or weapon image next to title</li>
                        </ul>
                        <h4>Images</h4>
                        Added:
                        <ul>
                            <li>
                                Silver Carbon
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>KEK-10</li>
                                    <li>SHAR-C</li>
                                </ul>
                            </li>
                            <li>
                                Silver Urban
                                <ul>
                                    <li>GRANDEUR SR</li>
                                    <li>KEK-10</li>
                                </ul>
                            </li>
                            <li>
                                Alice
                                <ul>
                                    <li>M9 | Troika</li>
                                </ul>
                            </li>
                            <li>
                                Aquila
                                <ul>
                                    <li>CROTZNI | Viridis</li>
                                    <li>DREISS AR | Legion</li>
                                    <li>M9 | Legion</li>
                                </ul>
                            </li>
                            <li>
                                CoreSec
                                <ul>
                                    <li>BR-16 | Blue Steel</li>
                                    <li>M9 | Blue Steel</li>
                                    <li>DREISS AR | Titanium</li>
                                    <li>MK46 | Titanium</li>
                                    <li>MOA SNPR-1 | Defender</li>
                                </ul>
                            </li>
                            <li>
                                KMA
                                <ul>
                                    <li>BLISHLOK | Steamline</li>
                                    <li>KEK-10 | Streamline</li>
                                    <li>GRANDEUR SR | Prototype</li>
                                </ul>
                            </li>
                            <li>
                                RoyalForce
                                <ul>
                                    <li>K-121 | Blood Red</li>
                                    <li>EMPIRE-9 | Blood Red</li>
                                    <li>SIMEON .357 | Blood Red</li>
                                    <li>STILNOTTO STILETTO | Dragon King</li>
                                </ul>
                            </li>
                        </ul>
                        Updated
                        <ul>
                            <li>
                                CoreSec
                                <ul>
                                    <li>BLISHLOK | Vindicator</li>
                                </ul>
                            </li>
                            <li>
                                FACEIT
                                <ul>
                                    <li>HURTSALL 2K</li>
                                    <li>M4A1</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                { /* Update 2: Hotfix 1 & 2 */ }
                <div>
                    <h2 onClick={() => up2h2[0] == 'none' ? setUp2h2(["block", "down"]) : setUp2h2(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up2h2[1]}-fill`}></i> Update 2: Hotfix 1 & 2</h2>
                    <div className={`d-${up2h2[0]}`}>
                        <ul>
                            <li>Fixed weapons' names and filenames for few default melee and cobalt KMA Bat</li>
                        </ul>
                    </div>
                </div>

                { /* Update 2 */ }
                <div>
                    <h2 onClick={() => up2[0] == 'none' ? setUp2(["block", "down"]) : setUp2(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up2[1]}-fill`}></i> Update 2</h2>
                    <h6>The Weapon Card Update</h6>
                    <div className={`d-${up2[0]}`}>
                        <ul>
                            <li><h5>NEW! Added weapon cards' skins!</h5></li>
                            <li>Added melee weapons to "Weapons" dropdown</li>
                            <li>Added collection images next to weapons' names in all skins for 1 weapon preview. Similar thing can be seen in rarity based weapon cards' skins</li>
                        </ul>
                        <h4>Images</h4>
                        Added:
                        <ul>
                            <li>Added all default melee skins and TacticalBlack Katana to corresponding collections</li>
                            <li>
                                Silver Carbon
                                <ul>
                                    <li>CROTZNI</li>
                                    <li>EMPIRE-9</li>
                                    <li>FEL-IX</li>
                                    <li>GRANDEUR SR</li>
                                    <li>HOLLUNDS 880</li>
                                    <li>K-121</li>
                                    <li>MK46</li>
                                    <li>MOA SNPR-1</li>
                                    <li>PDP-70</li>
                                    <li>REMBURG-7</li>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                            <li>
                                Silver Urban
                                <ul>
                                    <li>AREVAROV 9</li>
                                    <li>BR-16</li>
                                    <li>CROTZNI</li>
                                    <li>HOLLUNDS 880</li>
                                    <li>M9</li>
                                    <li>MK46</li>
                                    <li>MP400</li>
                                    <li>PDP-70</li>
                                    <li>REMBURG-7</li>
                                    <li>RYBURN</li>
                                    <li>SHAR-C</li>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                            <li>
                                Gold Bamboo
                                <ul>
                                    <li>CROTZNI</li>
                                    <li>EMPIRE-9</li>
                                </ul>
                            </li>
                            <li>
                                Gold Crown
                                <ul>
                                    <li>STARK AR</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>AREVAROV 9</li>
                                    <li>HOCHFIR SMG</li>
                                    <li>RYBURN</li>
                                </ul>
                            </li>
                            <li>
                                SplashDamage
                                <ul>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                        </ul>
                        Updaded:
                        <ul>
                            <li>
                                Lead - Updated all leads with better lighting
                            </li>
                            <li>
                                Iron - Updated all irons with better lighting
                            </li>
                        </ul>
                    </div>
                </div>

                { /* Update 1 - 26.05.2025 */ }
                <div>
                    <h2 onClick={() => up1[0] == 'none' ? setUp1(["block", "down"]) : setUp1(["none", "right"])} style={{userSelect: "none"}}><i className={`bi bi-caret-${up1[1]}-fill`}></i> Update 1</h2>
                    <h6>The Optimization And Small Stuff Update</h6>
                    <div className={`d-${up1[0]}`}>
                        <h4>Optimization</h4>
                        <ul>
                            <li>Reduced image size from 1080p to 720p to load images faster</li>
                        </ul>
                        <h4>Functions</h4>
                        <ul>
                            <li>Scroll to top button is now 100% complete</li>
                        </ul>
                        <h4>Gallery collections</h4>
                        <ul>
                            <li>Removed MK46 from Faction, since there's no Thunder with his LMG in that collection</li>
                        </ul>
                        <h4>Texts</h4>
                        <ul>
                            <li>Some texts have been slightly tweaked</li>
                        </ul>
                        <h4>Other stuff</h4>
                        <ul>
                            <li>Added Back to start button to navigation</li>
                            <li>Tweaked a bit spacing between buttons in navbar</li>
                            <li>Added collection and weapon images in dropdown menus</li>
                        </ul>
                        <h4>Images</h4>
                        { /* Add */ }
                        Added:
                        <ul>
                            <li>
                                Bronze
                                <ul>
                                    <li>FEL-IX</li>
                                </ul>
                            </li>
                            <li>
                                Silver Carbon
                                <ul>
                                    <li>AREVAROV 9</li>
                                    <li>BLISHLOK</li>
                                    <li>HOCHFIR SMG</li>
                                    <li>MP400</li>
                                    <li>RYBURN</li>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                    <li>STARK AR</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                            <li>
                                Silver Urban
                                <ul>
                                    <li>AHNUHLD-12</li>
                                    <li>BLISHLOK</li>
                                    <li>CAULDEN</li>
                                    <li>EMPIRE-9</li>
                                    <li>K-121</li>
                                    <li>M4A1</li>
                                    <li>MOA SNPR-1</li>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                </ul>
                            </li>
                            <li>
                                Gold Bamboo
                                <ul>
                                    <li>DREISS AR</li>
                                    <li>M9</li>
                                    <li>HOCHFIR SMG</li>
                                    <li>FEL-IX</li>
                                    <li>SELBSTADT .40</li>
                                </ul>
                            </li>
                            <li>
                                Gold Crown
                                <ul>
                                    <li>SMJÜTH & WHETSMAN .40</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>FEL-IX</li>
                                    <li>K-121</li>
                                    <li>SIMEON .357</li>
                                    <li>HOLLUNDS 880</li>
                                </ul>
                            </li>
                        </ul>
                        {/* Update */}
                        Updaded:
                        <ul>
                            <li>
                                Lead
                                <ul>
                                    <li>SMG-9</li>
                                    <li>STARK AR</li>
                                </ul>
                            </li>
                            <li>
                                Silver Urban
                                <ul>
                                    <li>STARK AR</li>
                                </ul>
                            </li>
                            <li>
                                Gold Swiss
                                <ul>
                                    <li>SMG-9</li>
                                </ul>
                            </li>
                            <li>
                                Cobalt Fragment
                                <ul>
                                    <li>FEL-IX</li>
                                    <li>GRANDEUR SR</li>
                                    <li>SHAR-C</li>
                                    <li>SIMEON .357</li>
                                </ul>
                            </li>
                            <li>
                                GuardianSpecial
                                <ul>
                                    <li>CAULDEN</li>
                                    <li>TIMIK-47</li>
                                </ul>
                            </li>
                            <li>
                                Javelin
                                <ul>
                                    <li>BR-16</li>
                                    <li>DREISS AR</li>
                                </ul>
                            </li>
                            <li>
                                OutforBlood
                                <ul>
                                    <li>DE .50</li>
                                    <li>DREISS AR</li>
                                    <li>HOCHFIR SMG</li>
                                    <li>K-121</li>
                                    <li>M9</li>
                                    <li>REMBURG-7</li>
                                    <li>SELBSTADT .40</li>
                                    <li>TØLEN MP</li>
                                </ul>
                            </li>
                            <li>
                                TacticalBlack
                                <ul>
                                    <li>BLISHLOK</li>
                                    <li>SIMEON .357</li>
                                </ul>
                            </li>
                        </ul>
                        { /* Fix */ }
                        Fixed:
                        <ul>
                            <li>Detective DE .50 not showing while viewing all it's skins</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Changelog;