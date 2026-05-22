import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Footer from './../Components/footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import suit_list from '../list/suit_list.js';

function PCSuits() {
    document.getElementById("webTitle").textContent = "DBS - Mercs' Suits Gallery";
    var noImg = "img/noimg.png";
    var [grid, setGrid] = useState([3, 6]);
    var [style, setStyle] = useState([300, "default", "Default", "default"]);
    var color = [];
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];

    var JavSDMsg = 'Existence of this particular skin IS NOT officially confirmed.\nOne of the devs was spotted with it in game.\nAlso it\'s not possible to trade for this card so please, DON\'T CONTACT\nSplash Damage devs for additional info or in order to buy/obtain it.';

    const renderWepImgs = (lType, colID, col) => {
        switch (lType) {
            case 1:
                return suit_list.mercList.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 2:
                return suit_list.tb.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 3:
                return suit_list.founder.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 10:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/aimee.png`} /> Aimee</p>
                        <img src={`img/suits/${colID}/aimee.jpg` || noImg} alt={`${col} Aimee`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 11:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/guardian.png`} /> Guardian</p>
                        <img src={`img/suits/${colID}/guardian.jpg` || noImg} alt={`${col} Guardian`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 12:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/hunter.png`} /> Hunter</p>
                        <img src={`img/suits/${colID}/hunter.jpg` || noImg} alt={`${col} Hunter`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 13:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/javelin.png`} /> Javelin</p>
                        <img src={`img/suits/${colID}/javelin.jpg` || noImg} alt={`${col} Javelin`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 14:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/phoenix.png`} /> Phoenix</p>
                        <img src={`img/suits/${colID}/phoenix.jpg` || noImg} alt={`${col} Phoenix`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 15:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/proxy.png`} /> Proxy</p>
                        <img src={`img/suits/${colID}/proxy.jpg` || noImg} alt={`${col} Proxy`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            case 16:
                return (
                    <div className=" mt-4">
                        <p className="h4"><img src={`img/merc/turtle.png`} /> Turtle</p>
                        <img src={`img/suits/${colID}/turtle.jpg` || noImg} alt={`${col} Turtle`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                )
            { /* Default */ }
            case 300:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Present on current DB</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.defMercList[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Different on old DB</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.defMercList[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Hunter-bug */ }
            case 301:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.huntBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.huntBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Guardian-bug */ }
            case 302:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.grdBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.grdBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Javelin-bug */ }
            case 303:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.javBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.javBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Turtle-bug */ }
            case 304:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.turtleBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.turtleBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Aimee-bug */ }
            case 305:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aimeeBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aimeeBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Thunder-bug */ }
            case 306:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.thunBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.thunBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* Humble */ }
            case 307:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.humbleBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.humbleBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* OutforBlood */ }
            case 308:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.obBug[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.obBug[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            { /* SPECIAL SD (JAV) */ }
            case 309:
                return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.SDSpecial[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} title={`${mer.filename == "javelin" ? JavSDMsg : ""}`} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.SDSpecial[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/merc/${mer.name.toLowerCase()}.png`} /> {mer.name}</p>
                                    <img src={`img/suits/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 201: { /* AIMEE */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aimee[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/aimee.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aimee[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/aimee.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 202: { /* ARTY */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.arty[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/arty.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.arty[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/arty.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 203: { /* AURA */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aura[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/aura.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.aura[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/aura.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 204: { /* BUSHWHACKER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.bushwhacker[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/bushwhacker.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.bushwhacker[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/bushwhacker.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 205: { /* FLETCHER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.fletcher[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/fletcher.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.fletcher[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/fletcher.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 206: { /* FRAGGER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.fragger[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/fragger.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.fragger[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/fragger.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 207: { /* GUARDIAN */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.guardian[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/guardian.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.guardian[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/guardian.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 208: { /* HUNTER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.hunter[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/hunter.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.hunter[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/hunter.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 209: { /* JAVELIN */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.javelin[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/javelin.jpg` || noImg} title={`${mer.fileFolder == "sd" ? JavSDMsg : ""}`} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.javelin[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/javelin.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 210: { /* KIRA */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.kira[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/kira.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.kira[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/kira.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 211: { /* NADER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.nader[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/nader.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.nader[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/nader.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 212: { /* PHANTOM */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.phantom[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/phantom.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.phantom[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/phantom.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 213: { /* PHOENIX */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.phoenix[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/phoenix.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.phoenix[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/phoenix.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 214: { /* PROXY */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.proxy[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/proxy.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.proxy[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/proxy.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 215: { /* REDEYE */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.redeye[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/redeye.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.redeye[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/redeye.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 216: { /* RHINO */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.rhino[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/rhino.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.rhino[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/rhino.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 217: { /* SAWBONEZ */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.sawbonez[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/sawbonez.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.sawbonez[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/sawbonez.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 218: { /* SKYHAMMER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.skyhammer[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/skyhammer.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.skyhammer[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/skyhammer.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 219: { /* SPARKS */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.sparks[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/sparks.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.sparks[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/sparks.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 220: { /* STOKER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.stoker[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/stoker.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.stoker[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/stoker.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 221: { /* THUNDER */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.thunder[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/thunder.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.thunder[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/thunder.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 222: { /* TRUTLE */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.turtle[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/turtle.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.turtle[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/turtle.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
                case 223: { /* VASSILI */ }
                    return (<div>
                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Official Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.vassili[0].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/vassili.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>

                        <div className="mt-4">
                            <h3 className={`text-center text-${color[1]}`}>Suit-bug Only Suits</h3>
                            <div className={`row row-cols-${grid[0]}`}>
                            {suit_list.vassili[1].map((mer) =>(
                                <div className="mb-4">
                                    <p className={`h${grid[1]} text-${color[1]}`}><img src={`img/collection/${mer.rar}.png`} /> {mer.suitName}</p>
                                    <img src={`img/suits/${mer.fileFolder}/vassili.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                                </div>
                            ))}
                        </div></div>
                    </div>)
            }
    }

    return (
        <div className={`p-4 bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto w-75 p-4 bg-${color[0]} rounded shadow text-center text-${color[1]}`}>Mercs' Suits Gallery</h1>

            { /* Navbar */ }

            <div className={`mt-4 p-3 navbar sticky-top bg-${color[0]} text-${color[1]} m-auto w-75 rounded p-2 shadow m-auto justify-content-center`}>

                { /* Back to start */ }

                <Link to="/" className={`btn btn-${color[0]} border-2 border-${color[1]} me-3`}><i className="bi bi-arrow-return-left" /> Back to start</Link>

                { /* Regular Edition */ }

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="nonSE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Regular Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="nonSE" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([300, "default", "Default", "default"]))}><img src="img/collection/default.png" /> Default</button>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "dirt", "Dirt", "dirt"]))}><img src="img/collection/dirt.png" /> Dirt</button>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "galvanized", "Galvanized", "galvanized"]))}><img src="img/collection/galvanized.png" /> Galvanized</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "woodland", "Woodland", "woodland"]))}><img src="img/collection/woodland.png"/> Woodland</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "carbon", "Carbon", "carbon"]))}><img src="img/collection/carbon.png" /> Carbon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "urban", "Urban", "urban"]))}><img src="img/collection/urban.png" /> Urban</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "bamboo", "Bamboo", "bamboo"]))}><img src="img/collection/bamboo.png" /> Bamboo</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "crown", "Crown", "crown"]))}><img src="img/collection/crown.png" /> Crown</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "swiss", "Swiss", "swiss"]))}><img src="img/collection/swiss.png" /> Swiss</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "fragment", "Fragment", "fragment"]))}><img src="img/collection/fragment.png" /> Fragment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "shard", "Shard", "shard"]))}><img src="img/collection/shard.png" /> Shard</button>
                    </div>
                </div>

                { /* Special Edition */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="SE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Special Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="SE" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([303, "containment", "Containment", "containment"]))}><img src="img/collection/containment.png" /> Containment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([15, "culprit", "Culprit", "culprit"]))}><img src="img/collection/culprit.png" /> Culprit</button>
                        <button className="dropdown-item" onClick={() => (setStyle([15, "cybereye", "CyberEye", "cybereye"]))}><img src="img/collection/cybereye.png" /> CyberEye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([10, "detective", "Detective", "detective"]))}><img src="img/collection/detective.png" /> Detective</button>
                        <button className="dropdown-item" onClick={() => (setStyle([306, "faction", "Faction", "faction"]))}><img src="img/collection/faction.png" /> Faction</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "ghostclip", "Ghostclip", "ghostclip"]))}><img src="img/collection/ghostclip.png" /> Ghostclip</button>
                        <button className="dropdown-item" onClick={() => (setStyle([11, "pirin", "GuardianSpecial", "pirin"]))}><img src="img/collection/pirin.png" /> GuardianSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "halloween17", "Halloween17", "halloween17"]))}><img src="img/collection/halloween17.png" /> Halloween17</button>
                        <button className="dropdown-item" onClick={() => (setStyle([303, "hexagon", "Hexagon", "hexagon"]))}><img src="img/collection/hexagon.png" /> Hexagon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([307, "humble", "Humble", "humble"]))}><img src="img/collection/humble.png" /> Humble</button>
                        <button className="dropdown-item" onClick={() => (setStyle([12, "arctic", "HunterSpecial", "arctic"]))}><img src="img/collection/arctic.png" /> HunterSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([13, "javelin", "Javelin", "javelin"]))}><img src="img/collection/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([304, "ranked2", "RankedEagle", "ranked2"]))}><img src="img/collection/ranked2.png" /> RankedEeagle (Ranked 2)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "ranked4", "ScorchedMetal", "ranked4"]))}><img src="img/collection/ranked4.png" /> ScorchedMetal (Ranked 4)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([304, "ranked3", "Shatter", "ranked3"]))}><img src="img/collection/ranked3.png" /> Shatter (Ranked 3)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([305, "suspect", "Suspect", "suspect"]))}><img src="img/collection/suspect.png" /> Suspect</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "twitch", "Twitch", "twitch"]))}><img src="img/collection/twitch.png" /> Twitch</button>
                        <button className="dropdown-item" onClick={() => (setStyle([305, "xmas15", "Xmas2015", "xmas15"]))}><img src="img/collection/xmas15.png" /> Xmas2015</button>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "xmas17", "Xmas2017", "xmas17"]))}><img src="img/collection/xmas17.png" /> Xmas2017</button>
                    </div>
                </div>

                { /* Obsidian */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="Obs" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obsidian
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Obs" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([15, "culpritobsidian", "CulpritObsidian", "culpritobsidian"]))}><img src="img/collection/culpritobsidian.png" /> CulpritObsidian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "founders", "Founders", "founders"]))}><img src="img/collection/founders.png" /> Founders</button>
                        <button className="dropdown-item" onClick={() => (setStyle([308, "outforblood", "OutforBlood", "outforblood"]))}><img src="img/collection/outforblood.png" /> OutforBlood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([309, "sd", "SplashDamage", "sd"]))}><img src="img/collection/sd.png" /> SplashDamage</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "tacticalblack", "TacticalBlack", "obs50"]))}><img src="img/collection/obs50.png" /> TacticalBlack</button>
                        <button className="dropdown-item" onClick={() => (setStyle([16, "turtleneck", "Turtleneck", "obsold"]))}><img src="img/collection/obsold.png" /> Turtleneck</button>
                        <button className="dropdown-item" onClick={() => (setStyle([14, "woodlandphoenix", "WoodlandPhoenix", "obs50"]))}><img src="img/collection/obs50.png" /> WoodlandPhoenix</button>
                    </div>
                </div>

                { /* Merc */ }

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mercs
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="wep" style={{maxHeight: '70vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([201, "aimee", "Aimee", "aimee"]))}><img src="img/merc/aimee.png" /> Aimee</button>
                        <button className="dropdown-item" onClick={() => (setStyle([202, "arty", "Arty", "arty"]))}><img src="img/merc/arty.png" /> Arty</button>
                        <button className="dropdown-item" onClick={() => (setStyle([203, "aura", "Aura", "aura"]))}><img src="img/merc/aura.png" /> Aura</button>
                        <button className="dropdown-item" onClick={() => (setStyle([204, "bushwhacker", "Bushwhacker", "bushwhacker"]))}><img src="img/merc/bushwhacker.png" /> Bushwhacker</button>
                        <button className="dropdown-item" onClick={() => (setStyle([205, "fletcher", "Fletcher", "fletcher"]))}><img src="img/merc/fletcher.png" /> Fletcher</button>
                        <button className="dropdown-item" onClick={() => (setStyle([206, "fragger", "Fragger", "fragger"]))}><img src="img/merc/fragger.png" /> Fragger</button>
                        <button className="dropdown-item" onClick={() => (setStyle([207, "guardian", "Guardian", "guardian"]))}><img src="img/merc/guardian.png" /> Guardian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([208, "hunter", "Hunter", "hunter"]))}><img src="img/merc/hunter.png" /> Hunter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([209, "javelin", "Javelin", "javelin"]))}><img src="img/merc/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([210, "kira", "Kira", "kira"]))}><img src="img/merc/kira.png" /> Kira</button>
                        <button className="dropdown-item" onClick={() => (setStyle([211, "nader", "Nader", "nader"]))}><img src="img/merc/nader.png" /> Nader</button>
                        <button className="dropdown-item" onClick={() => (setStyle([212, "phantom", "Phantom", "phantom"]))}><img src="img/merc/phantom.png" /> Phantom</button>
                        <button className="dropdown-item" onClick={() => (setStyle([213, "phoenix", "Phoenix", "phoenix"]))}><img src="img/merc/phoenix.png" /> Phoenix</button>
                        <button className="dropdown-item" onClick={() => (setStyle([214, "prxy", "Proxy", "proxy"]))}><img src="img/merc/proxy.png" /> Proxy</button>
                        <button className="dropdown-item" onClick={() => (setStyle([215, "redeye", "Redeye", "redeye"]))}><img src="img/merc/redeye.png" /> Redeye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([216, "rhino", "Rhino", "rhino"]))}><img src="img/merc/rhino.png" /> Rhino</button>
                        <button className="dropdown-item" onClick={() => (setStyle([217, "sawbonez", "Sawbonez", "sawbonez"]))}><img src="img/merc/sawbonez.png" /> Sawbonez</button>
                        <button className="dropdown-item" onClick={() => (setStyle([218, "skyhammer", "Skyhammer", "skyhammer"]))}><img src="img/merc/skyhammer.png" /> Skyhammer</button>
                        <button className="dropdown-item" onClick={() => (setStyle([219, "sparks", "Sparks", "sparks"]))}><img src="img/merc/sparks.png" /> Sparks</button>
                        <button className="dropdown-item" onClick={() => (setStyle([220, "stoker", "Stoker", "stoker"]))}><img src="img/merc/stoker.png" /> Stoker</button>
                        <button className="dropdown-item" onClick={() => (setStyle([221, "thunder", "Thunder", "thunder"]))}><img src="img/merc/thunder.png" /> Thunder</button>
                        <button className="dropdown-item" onClick={() => (setStyle([222, "turtle", "Turtle", "turtle"]))}><img src="img/merc/turtle.png" /> Turtle</button>
                        <button className="dropdown-item" onClick={() => (setStyle([223, "vassili", "Vassili", "vassili"]))}><img src="img/merc/vassili.png" /> Vassili</button>
                    </div>
                </div>

                { /* Suit-bug Video */}

                <button className={`btn border-2 border-${color[1]} btn-${color[0]} me-3`}>
                    Suit-bug Video (W.I.P) <i className="bi bi-youtube" />
                </button>

                { /* Grid */}

                <div className="btn-group">
                    <button className={`rounded-start btn btn-${color[0]} border-2 border-${color[1]}`} onClick={() => grid[0] == 1 ? setGrid([3, 6]) : setGrid([1, 4])}>{grid[0] == 1 ? <i className="bi bi-view-list" /> : <i className="bi bi-grid-3x3-gap" />}</button>
                    <button className={`rounded-end btn btn-${color[0]} border-2 border-${color[1]} dropdown-toggle`} type="button" id="multigrid" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto p-2`} aria-labelledby="multigrid" style={{maxHeight: '70vh'} }>
                        <input className="dropdown-item" type="range" min="1" max="6" defaultValue="3" value={grid[0]} onChange={e => setGrid([e.target.value,e.target.value >= 3 ? 6 : 4])} />
                        <span>img per row: {grid[0]}</span>
                    </div>
                </div>

            </div>

            <div className={`m-auto w-75 bg-${color[0]} text-${color[1]} rounded shadow mt-4 justify-content-center`}>
                <h2 className="text-center pt-4"><img src={style[0] >= 200 && style[0] <= 223 ? `img/merc/${style[3]}.png` : `img/collection/${style[3]}.png`} className="mb-2" /> { style[2] }</h2>

                <div className={style[0] >= 10 ? `p-5 w-100` : `p-5 row row-cols-${grid[0]}`}>
                    {renderWepImgs(style[0], style[1], style[2])}
                </div>
            </div>
            
            <button className={`btn border-2 border-${color[1]} btn-${color[0]} position-fixed bottom-0 end-0 m-3`} onClick={() => window.scrollTo(0, 0)}><i className="bi bi-arrow-bar-up" /></button>

            <Footer />


        </div>
    );
}

export default PCSuits;