import './../App.css';
import './../stylejw.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Footer from './../Components/footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import suit_list from '../list/suit_list.js';
import merc_list from '../list/mercs_list.js';

function MOBMercs() {
    var noImg = "img/noimg.png";
    var [ham, setHam] = useState(["none"]);
    var [style, setStyle] = useState([1, "default", "Default", "default", "-def"]);
    var color = [];
    var [hqm, setHqm] = useState(["true", "", "-outline"]);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];
    var [preview, setPreview] = useState("modern");
    var [previewBut, setPreviewBut] = useState(["", "-outline"])

    const renderWepImgs = (lType, colID, col) => {
        switch (lType) {
            case 1: { /* Default */ }
                return merc_list.mMercs[0].map((mer) => (
                    <div className="mt-4">
                        <p className="h6"><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/mPreview/${preview}/${colID}/${mer.filename}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                    </div>
                ))
            case 2: { /* Up to Guardian + Prox G1*/ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[2].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div>
                                {merc_list.mGrdP1[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 3: { /* All mercs + Proxy G1 */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAllP1[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 4: { /* UP TO GUARDIAN */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[3].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mGrd[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h$6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 5: { /* UP TO JAVELIN */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[4].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mJav[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 6: { /* UP TO TURTLE */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[5].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mTrtl[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 7: { /* NO TURTLE / CLASSIC */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[6].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mClassic[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 8: { /* FACTION */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[7].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFaction[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 9: { /* GEN 1 SE */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[8].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mGen1SE[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 10: { /* SD */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[6].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSD[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 11: { /* Nexon */ }
                return merc_list.mNexon.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h6`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/mPreview/${preview}/${colID}/${mer.wep}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                    </div>
                ))
            case 12: { /* Humble */ }
                return merc_list.mHumble.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h6`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/mPreview/${preview}/${colID}/${mer.wep}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                    </div>
                ))
            case 13: { /* Founders */ }
                return merc_list.mFounders.map((mer) => (
                    <div className=" mt-4">
                        <p className={`h6`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</p>
                        <img src={`img/mPreview/${preview}/${colID}/${mer.wep}.jpg` || noImg} alt={`${col} ${mer.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                    </div>
                ))
            case 14: { /* Alienware */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[9].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAlienware[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 15: { /* Logitech */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[10].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mLogitech[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 16: { /* OutforBlood */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[11].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mOutforBlood[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 17: { /* TacticalBlack */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[12].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mTacticalBlack[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)
            case 18: { /* SINGLE - AIMEE */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/aimee.png`} /> Aimee</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSingle[0].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 19: { /* SINGLE - GUARDIAN */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/guardian.png`} /> Guardian</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSingle[1].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 20: { /* SINGLE - HUNTER */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/hunter.png`} /> Hunter</h3>
                                <div>
                                {merc_list.mSingle[2].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 21: { /* SINGLE - JAVELIN */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/javelin.png`} /> Javelin</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSingle[3].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 22: { /* SINGLE - PHOENIX */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/phoenix.png`} /> Phoenix</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSingle[4].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 23: { /* SINGLE - PROXY */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/proxy.png`} /> Proxy</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSingle[5].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 24: { /* SINGLE - TURTLE */ }
                return (<div>
                        <div className="mt-4">
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/turtle.png`} /> Turtle</h3>
                                <div>
                                {merc_list.mSingle[6].map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                        </div>
                    </div>)
            case 25: { /* SUSPECT */ }
                return (<div>
                        <div className="mt-4">
                            {merc_list.mMercs[13].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/merc/${mer.filename}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSuspect[i]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${colID}/${merce.filename}.jpg` || noImg} alt={`${col} ${merce.name}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${style[4]} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                    </div>)

            case 201: { /* AIMEE */ }
                    return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAimee[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/aimee.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mAimee[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAimee[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAimee[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAimee[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obsnew.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAimee[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 202: { /* ARTY */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/arty.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mArty[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[mer.rar == "alienware" ? 6 : mer.rar == "humble" ? 7 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obs50.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mArty[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 203: { /* AURA */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/aura.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mAura[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[mer.rar == "alienware" ? 7 : mer.rar == "logitech" ? 8 : mer.rar == "humble" ? 9 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obsnew.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mAura[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 204: { /* BUSHWHACKER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mBushwhacker[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/bushwhacker.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mBushwhacker[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mBushwhacker[mer.rar == "alienware" ? 6 : mer.rar == "humble" ? 7 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mBushwhacker[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mBushwhacker[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mBushwhacker[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 205: { /* FLETCHER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFletcher[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/fletcher.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mFletcher[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFletcher[mer.rar == "alienware" ? 6 : mer.rar == "humble" ? 7 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFletcher[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFletcher[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obs50.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFletcher[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 206: { /* FRAGGER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/fragger.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mFragger[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[mer.rar == "alienware" ? 7 : mer.rar == "humble" ? 8 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/founders.png`} /> Founders</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Founders ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mFragger[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 207: { /* GUARDIAN */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mGuardian[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/guardian.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mGuardian[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mGuardian[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                </div>)
            case 208: { /* HUNTER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mHunter[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/hunter.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mHunter[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mHunter[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/arctic.png`} /> HunterSpecial</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mHunter[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of HunterSpecial ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 209: { /* JAVELIN */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mJavelin[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/javelin.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mJavelin[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mJavelin[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        </div>
                </div>)
            case 210: { /* KIRA */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mKira[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/kira.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mKira[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mKira[mer.rar == "alienware" ? 5 : mer.rar == "humble" ? 6 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mKira[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mKira[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 211: { /* NADER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mNader[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/nader.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mNader[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mNader[mer.rar == "alienware" ? 6 : mer.rar == "humble" ? 7 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mNader[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mNader[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mNader[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 212: { /* PHANTOM */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhantom[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/phantom.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mPhantom[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhantom[mer.rar == "humble" ? 6 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhantom[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhantom[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obs50.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhantom[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 213: { /* PHOENIX */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/phoenix.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mPhoenix[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[mer.rar == "humble" ? 7 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obs50.png`} /> WoodlandPhoenix</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mPhoenix[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 214: { /* PROXY */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/proxy.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mProxy[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[mer.rar == "alienware" ? 9 : mer.rar == "humble" ? 10 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/culpritobsidian.png`} /> CulpritObsidian</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of CulpritObsidian ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/founders.png`} /> Founders</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Founders ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[7]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obsnew.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mProxy[8]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 215: { /* REDEYE */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRedeye[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/redeye.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mRedeye[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRedeye[mer.rar == "humble" ? 5 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRedeye[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRedeye[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 216: { /* RHINO */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRhino[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/rhino.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mRhino[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRhino[mer.rar == "alienware" ? 5 : mer.rar == "humble" ? 6 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRhino[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mRhino[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 217: { /* SAWBONEZ */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/sawbonez.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mSawbonez[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[mer.rar == "alienware" ? 7 : mer.rar == "humble" ? 8 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/founders.png`} /> Founders</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Founders ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSawbonez[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 218: { /* SKYHAMMER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/skyhammer.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mSkyhammer[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[mer.rar == "alienware" ? 7 : mer.rar == "humble" ? 8 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/founders.png`} /> Founders</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Founders ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obsold.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSkyhammer[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 219: { /* SPARKS */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSparks[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/sparks.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mSparks[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSparks[mer.rar == "humble" ? 5 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSparks[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mSparks[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 220: { /* STOKER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mStoker[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/stoker.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mStoker[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mStoker[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mStoker[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mStoker[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obs50.png`} /> TacticalBlack</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mStoker[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of TacticalBlack ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 221: { /* THUNDER */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mThunder[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/thunder.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mThunder[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mThunder[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mThunder[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mThunder[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 222: { /* TURTLE */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mTurtle[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/turtle.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mTurtle[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mTurtle[0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/obsold.png`} /> Turtleneck</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mTurtle[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Turtleneck ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            case 223: { /* VASSILI */ }
                return (<div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/default.png`} /> Default</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[2]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/vassili.jpg` || noImg} alt={`${preview} preview of Default ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                            {merc_list.mVassili[1].map((mer, i) =>(
                                <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/${mer.rar}.png`} /> {mer.name}</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[mer.rar == "alienware" ? 7 : mer.rar == "humble" ? 8 : 0]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${mer.filename}/${merce.filename}.jpg` || noImg} alt={`${preview} preview of ${mer.name} ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${mer.shadow} w-100`} />
                                    </div>
                            ))}
                                </div></div>
                            ))}
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/founders.png`} /> Founders</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[3]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Founders ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/nexon.png`} /> Nexon</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[5]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of Nexon ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/outforblood.png`} /> OutforBlood</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[4]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of OutforBlood ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        <div className="mb-4">
                                <h3 className={`text-${color[1]} text-center mb-4`}><img src={`img/collection/sd.png`} /> SplashDamage</h3>
                                <div className={`justify-content-around`}>
                                {merc_list.mVassili[6]?.map((merce) =>(
                                    <div className="mb-4">
                                        <p className={`h6 text-${color[1]}`}>{merce.name}</p>
                                        <img src={`img/mPreview/${preview}/${merce.filename}/${merce.mercfilename}.jpg` || noImg} alt={`${preview} preview of SplashDamage ${merce.name} ${style[2]}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow${merce.shadow} w-100`} />
                                    </div>
                            ))}
                        </div></div>
                        </div>
                </div>)
            }
    }

    return (
        <div className={`jw p-1 bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto p-4 bg-${color[0]} rounded shadow text-center text-${color[1]}`}>Merc Preview Gallery</h1>

            { /* Navbar */ }

            <div className={`p-3 rounded mt-4 sticky-top bg-${color[0]} text-${color[1]} p-2 shadow`}>

                <button className={`btn btn-${color[0]} border-2 border-${color[1]}`} onClick={() => ham == "none" ? setHam("block") : setHam("none")}>
                    <i className="bi bi-list"></i> Options
                </button>

                <div className={`d-${ham}`}>
                { /* Back to start */ }

                <Link to="/" className={`btn btn-${color[0]} border-2 border-${color[1]} mt-3`}><i className="bi bi-arrow-return-left" /> Back to Start</Link>

                { /* Regular Edition */ }

                <div className="dropdown">
                <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-4`} type="button" id="nonSE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Regular Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="nonSE" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "default", "Default", "default", "-def"]), (setHam("none")))}><img src="img/collection/default.png" /> Default</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "dirt", "Lead", "lead", "-lead"]), (setHam("none")))}><img src="img/collection/lead.png" /> Lead</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "galvanized", "Iron", "iron", "-iron"]), (setHam("none")))}><img src="img/collection/iron.png" /> Iron</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "woodland", "Brozne", "bronze", "-bronze"]), (setHam("none")))}><img src="img/collection/bronze.png"/> Brozne</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "carbon", "Silver Carbon", "silver", "-silver"]), (setHam("none")))}><img src="img/collection/silver.png" /> Silver Carbon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "urban", "Silver Urban", "silver", "-silver"]), (setHam("none")))}><img src="img/collection/silver.png" /> Silver Urban</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "bamboo", "Gold Bamboo", "gold", "-gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Bamboo</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "crown", "Gold Crown", "gold", "-gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Crown</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "swiss", "Gold Swiss", "gold", "-gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Swiss</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([3, "fragment", "Cobalt Fragment", "cobalt", "-cobalt", "hqm"])) : (setStyle([3, "lfragment", "Cobalt Fragment", "cobalt", "-cobalt", "hqm"])), setHam("none"))}><img src="img/collection/cobalt.png" /> Cobalt Fragment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "shard", "Cobalt Shard", "cobalt", "-cobalt"]), (setHam("none")))}><img src="img/collection/cobalt.png" /> Cobatl Shard</button>
                    </div>
                </div>

                { /* Special Edition */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="SE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Special Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="SE" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([14, "alienware", "Alienware", "alienware", "-se"]), (setHam("none")))}><img src="img/collection/alienware.png" /> Alienware</button>
                        <button className="dropdown-item" onClick={() => (setStyle([6, "containment", "Containment", "containment", "-se"]), (setHam("none")))}><img src="img/collection/containment.png" /> Containment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([23, "culprit", "Culprit", "culprit", "-se"]), (setHam("none")))}><img src="img/collection/culprit.png" /> Culprit</button>
                        <button className="dropdown-item" onClick={() => (setStyle([23, "cybereye", "CyberEye", "cybereye", "-se"]), (setHam("none")))}><img src="img/collection/cybereye.png" /> CyberEye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([18, "detective", "Detective", "detective", "-se"]), (setHam("none")))}><img src="img/collection/detective.png" /> Detective</button>
                        <button className="dropdown-item" onClick={() => (setStyle([8, "faction", "Faction", "faction", "-se"]), (setHam("none")))}><img src="img/collection/faction.png" /> Faction</button>
                        <button className="dropdown-item" onClick={() => (setStyle([5, "ghostclip", "Ghostclip", "ghostclip", "-se"]), (setHam("none")))}><img src="img/collection/ghostclip.png" /> Ghostclip</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? ((setStyle([19, "pirin", "GuardianSpecial", "pirin", "-se", "hqm"])), (setHam("none"))) : ((setStyle([19, "lpirin", "GuardianSpecial", "pirin", "-se", "hqm"])), (setHam("none"))))}><img src="img/collection/pirin.png" /> GuardianSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "halloween17", "Halloween17", "halloween17", "-se"]), (setHam("none")))}><img src="img/collection/halloween17.png" /> Halloween17</button>
                        <button className="dropdown-item" onClick={() => (setStyle([6, "hexagon", "Hexagon", "hexagon", "-se"]), (setHam("none")))}><img src="img/collection/hexagon.png" /> Hexagon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([12, "humble", "Humble", "humble", "-se"]), (setHam("none")))}><img src="img/collection/humble.png" /> Humble</button>
                        <button className="dropdown-item" onClick={() => (setStyle([20, "arctic", "HunterSpecial", "arctic", "-se"]), (setHam("none")))}><img src="img/collection/arctic.png" /> HunterSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([21, "javelin", "Javelin", "javelin", "-se"]), (setHam("none")))}><img src="img/collection/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([15, "logitech", "Logitech", "logitech", "-se"]), (setHam("none")))}><img src="img/collection/logitech.png" /> Logitech</button>
                        <button className="dropdown-item" onClick={() => (setStyle([7, "ranked2", "RankedEagle", "ranked2", "-se"]), (setHam("none")))}><img src="img/collection/ranked2.png" /> RankedEeagle (Ranked 2)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([5, "ranked4", "ScorchedMetal", "ranked4", "-se"]), (setHam("none")))}><img src="img/collection/ranked4.png" /> ScorchedMetal (Ranked 4)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([7, "ranked3", "Shatter", "ranked3", "-se"]), (setHam("none")))}><img src="img/collection/ranked3.png" /> Shatter (Ranked 3)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([25, "suspect", "Suspect", "suspect", "-se"]), (setHam("none")))}><img src="img/collection/suspect.png" /> Suspect</button>
                        <button className="dropdown-item" onClick={() => (setStyle([5, "twitch", "Twitch", "twitch", "-se"]), (setHam("none")))}><img src="img/collection/twitch.png" /> Twitch</button>
                        <button className="dropdown-item" onClick={() => ((hqm[0] == "true" ? (setStyle([9, "xmas15", "Xmas2015", "xmas15", "-se", "hqm"]), (setHam("none"))) : (setStyle([9, "lxmas15", "Xmas2015", "xmas15", "-se", "hqm"])), (setHam("none"))))}><img src="img/collection/xmas15.png" /> Xmas2015</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "xmas17", "Xmas2017", "xmas17", "-se"]), (setHam("none")))}><img src="img/collection/xmas17.png" /> Xmas2017</button>
                    </div>
                </div>

                { /* Obsidian */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="Obs" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obsidian
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Obs" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([23, "culpritobsidian", "CulpritObsidian", "culpritobsidian", "-obs"]), (setHam("none")))}><img src="img/collection/culpritobsidian.png" /> CulpritObsidian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([13, "founders", "Founders", "founders", "-obs"]), (setHam("none")))}><img src="img/collection/founders.png" /> Founders</button>
                        <button className="dropdown-item" onClick={() => (setStyle([11, "nexon", "Nexon", "nexon", "-obs"]), (setHam("none")))}><img src="img/collection/nexon.png" /> Nexon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([16, "outforblood", "OutforBlood", "outforblood", "-obs"]), (setHam("none")))}><img src="img/collection/outforblood.png" /> OutforBlood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([10, "sd", "SplashDamage", "sd", "-obs"]), (setHam("none")))}><img src="img/collection/sd.png" /> SplashDamage</button>
                        <button className="dropdown-item" onClick={() => (setStyle([17, "tacticalblack", "TacticalBlack", "obs50", "-obs"]), (setHam("none")))}><img src="img/collection/obs50.png" /> TacticalBlack</button>
                        <button className="dropdown-item" onClick={() => (setStyle([24, "turtleneck", "Turtleneck", "obsold", "-obs"]), (setHam("none")))}><img src="img/collection/obsold.png" /> Turtleneck</button>
                        <button className="dropdown-item" onClick={() => (setStyle([22, "woodlandphoenix", "WoodlandPhoenix", "obs50", "-obs"]), (setHam("none")))}><img src="img/collection/obs50.png" /> WoodlandPhoenix</button>
                    </div>
                </div>

                { /* Merc */ }

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-3`} type="button" id="merc" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mercs
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="merc" style={{maxHeight: '45vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([201, "aimee", "Aimee", "aimee"]), (setHam("none")))}><img src="img/merc/aimee.png" /> Aimee</button>
                        <button className="dropdown-item" onClick={() => (setStyle([202, "arty", "Arty", "arty"]), (setHam("none")))}><img src="img/merc/arty.png" /> Arty</button>
                        <button className="dropdown-item" onClick={() => (setStyle([203, "aura", "Aura", "aura"]), (setHam("none")))}><img src="img/merc/aura.png" /> Aura</button>
                        <button className="dropdown-item" onClick={() => (setStyle([204, "bushwhacker", "Bushwhacker", "bushwhacker"]), (setHam("none")))}><img src="img/merc/bushwhacker.png" /> Bushwhacker</button>
                        <button className="dropdown-item" onClick={() => (setStyle([205, "fletcher", "Fletcher", "fletcher"]), (setHam("none")))}><img src="img/merc/fletcher.png" /> Fletcher</button>
                        <button className="dropdown-item" onClick={() => (setStyle([206, "fragger", "Fragger", "fragger"]), (setHam("none")))}><img src="img/merc/fragger.png" /> Fragger</button>
                        <button className="dropdown-item" onClick={() => (setStyle([207, "guardian", "Guardian", "guardian"]), (setHam("none")))}><img src="img/merc/guardian.png" /> Guardian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([208, "hunter", "Hunter", "hunter"]), (setHam("none")))}><img src="img/merc/hunter.png" /> Hunter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([209, "javelin", "Javelin", "javelin"]), (setHam("none")))}><img src="img/merc/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([210, "kira", "Kira", "kira"]), (setHam("none")))}><img src="img/merc/kira.png" /> Kira</button>
                        <button className="dropdown-item" onClick={() => (setStyle([211, "nader", "Nader", "nader"]), (setHam("none")))}><img src="img/merc/nader.png" /> Nader</button>
                        <button className="dropdown-item" onClick={() => (setStyle([212, "phantom", "Phantom", "phantom"]), (setHam("none")))}><img src="img/merc/phantom.png" /> Phantom</button>
                        <button className="dropdown-item" onClick={() => (setStyle([213, "phoenix", "Phoenix", "phoenix"]), (setHam("none")))}><img src="img/merc/phoenix.png" /> Phoenix</button>
                        <button className="dropdown-item" onClick={() => (setStyle([214, "prxy", "Proxy", "proxy"]), (setHam("none")))}><img src="img/merc/proxy.png" /> Proxy</button>
                        <button className="dropdown-item" onClick={() => (setStyle([215, "redeye", "Redeye", "redeye"]), (setHam("none")))}><img src="img/merc/redeye.png" /> Redeye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([216, "rhino", "Rhino", "rhino"]), (setHam("none")))}><img src="img/merc/rhino.png" /> Rhino</button>
                        <button className="dropdown-item" onClick={() => (setStyle([217, "sawbonez", "Sawbonez", "sawbonez"]), (setHam("none")))}><img src="img/merc/sawbonez.png" /> Sawbonez</button>
                        <button className="dropdown-item" onClick={() => (setStyle([218, "skyhammer", "Skyhammer", "skyhammer"]), (setHam("none")))}><img src="img/merc/skyhammer.png" /> Skyhammer</button>
                        <button className="dropdown-item" onClick={() => (setStyle([219, "sparks", "Sparks", "sparks"]), (setHam("none")))}><img src="img/merc/sparks.png" /> Sparks</button>
                        <button className="dropdown-item" onClick={() => (setStyle([220, "stoker", "Stoker", "stoker"]), (setHam("none")))}><img src="img/merc/stoker.png" /> Stoker</button>
                        <button className="dropdown-item" onClick={() => (setStyle([221, "thunder", "Thunder", "thunder"]), (setHam("none")))}><img src="img/merc/thunder.png" /> Thunder</button>
                        <button className="dropdown-item" onClick={() => (setStyle([222, "turtle", "Turtle", "turtle"]), (setHam("none")))}><img src="img/merc/turtle.png" /> Turtle</button>
                        <button className="dropdown-item" onClick={() => (setStyle([223, "vassili", "Vassili", "vassili"]), (setHam("none")))}><img src="img/merc/vassili.png" /> Vassili</button>
                    </div>
                </div>

                    { /* Preview */ }

                    <div className={`mt-4`}>
                        <b className={`text-${color[1]}`}>Preview: </b><br />
                        <div className="btn-group">
                            <button className={`rounded-start btn btn${preview[0] == "modern" ? previewBut[1] : previewBut[0]}-${color[1]} border-2`} onClick={() => (setPreview("modern"), setPreviewBut(["", "-outline"]), setHam("none"))}>Modern</button>
                            <button className={`rounded-end btn btn${preview[0] == "beta" ? previewBut[0] : previewBut[1]}-${color[1]} border-2`} onClick={() => (setPreview("beta"), setPreviewBut(["-outline", ""]), setHam("none"))}>Beta</button>
                        </div>
                    </div>

                    { /* HQM */ }

                    <div className={`mt-2 d-${style[5] == "hqm" ? "block" : "none"}`}>
                        <b className={`text-${color[1]}`} title="High Quality Materials">HQM: </b><br />
                        <div className="btn-group">
                            <button className={`rounded-start btn btn${hqm[0] == "true" ? hqm[1] : hqm[2]}-success border-2`} onClick={() => (setHqm(["true", "", "-outline"]), setHam("none"), style[1] == "lfragment" ? setStyle([3, "fragment", "Cobalt Fragment", "cobalt", "-cobalt", "hqm"]) : style[1] == "lpirin" ? setStyle([19, "pirin", "GuardianSpecial", "pirin", "-se", "hqm"]) : style[1] == "lxmas15" ? setStyle([9, "xmas15", "Xmas2015", "xmas15", "-se", "hqm"]) : "")}>ON</button>
                            <button className={`rounded-end btn btn${hqm[0] == "true" ? hqm[2] : hqm[1]}-danger border-2`} onClick={() => (setHqm(["false", "", "-outline"]), setHam("none"), style[1] == "fragment" ? setStyle([3, "lfragment", "Cobalt Fragment", "cobalt", "-cobalt", "hqm"]) : style[1] == "pirin" ? setStyle([19, "lpirin", "GuardianSpecial", "pirin", "-se", "hqm"]) : style[1] == "xmas15" ? setStyle([9, "lxmas15", "Xmas2015", "xmas15", "-se", "hqm"]) : "")}>OFF</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`bg-${color[0]} rounded shadow mt-4 justify-content-center text-center text-${color[1]}`}>
                <h2 className="text-center pt-4"><img src={style[0] >= 200 && style[0] <= 223 ? `img/merc/${style[3]}.png` : style[0] >= 100 && style[0] <= 141 ? `img/weapon/${color[1]}/${style[3]}.png` : `img/collection/${style[3]}.png`} className="mb-2" /> { style[2] }</h2>
                <div className={`p-5`}>
                    {renderWepImgs(style[0], style[1], style[2])}
                </div>
            </div>
            
            <button className={`btn border-2 border-${color[1]} btn-${color[0]} position-fixed bottom-0 end-0 m-3`} onClick={() => window.scrollTo(0, 0)}><i className="bi bi-arrow-bar-up" /></button>

            <Footer />


        </div>
    );
}

export default MOBMercs;