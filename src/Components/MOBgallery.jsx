import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Footer from '../Components/footer';
import List from '../lists.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MOBGallery({color}) {
    console.log(navigator.userAgent);
    var noImg = "img/noimg.png";
    var [ham, setHam] = useState(["none"]);
    var [style, setStyle] = useState([19, "default", "Default", "default"]);
    var [exp, setExp] = useState(["none"]);
    var [hqm, setHqm] = useState(["true", "", "-outline"]);
    var [wearBut, setWearBut] = useState(["", "-outline", "-outline", "-outline", "-outline"])
    var [wear, setWear] = useState("");

    const renderWepImgs = (lType, colID, col) => {
        switch (lType) {
            case 1:
                return List.ListClassic.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 2:
                return List.ListAddJav.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 3:
                return List.ListAddGrd.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 4:
                return List.ListAddHntr.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 5:
                return List.ListAlien.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 6:
                return List.ListProx.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 7:
                return List.ListAimee.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 8:
                return List.ListGrd.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 9:
                return List.ListHntr.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 10:
                return List.ListJav.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 11:
                return List.ListHumb.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 12:
                return List.ListLog.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 13:
                return List.ListFounders.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 14:
                return List.ListBlood.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 15:
                return List.ListTacticalB.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 16:
                return List.ListTurtle.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 17:
                return List.ListPhoenix.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 18:
                return List.ListFaction.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 19:
                return List.ListAll.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 20:
                return List.ListNexon.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 21:
                return List.ListSpecialSD.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                        <span className={`m-4 d-${weapon.fileName == "tolen.jpg" ? "block" : "none"}`}>
                            *Existence of this particular weapon skin IS NOT officially confirmed.<br />
                            One of the devs was spotted with it in game.<br />
                            Also it's not possible to trade for this card so please, DON'T CONTACT<br />
                            Splash Damage devs for additional info or in order to buy/obtain it.<br /><br />
                            Screenshot done on old version of DB and skin's displayed thanks to currently patched bugs
                        </span>
                    </div>
                ))
            case 101: { /* AHNUHLD-12 */ }
                return List.wepA.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ahnuhld.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 102: { /* AREVAROV 9 */ }
                return List.wep11.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/arevarov.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 103: { /* BLISHLOK */ }
                return List.wepBL.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/blishlok.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 104: { /* BR-16 */ }
                return List.wepB.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/br.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 105: { /* CAULDEN */ }
                return List.wep7.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/caulden.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 106: { /* CROTZNI */ }
                return List.wepCR.map((skin) => ( 
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/crotzni.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 107: { /* DE .50 */ }
                return List.wep5.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/de.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 108: { /* DREISS AR */ }
                return List.wepD.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/dreiss.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 109: { /* EMPIRE-9 */ }
                return List.wep3.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/empire.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 110: { /* FEL-IX */ }
                return List.wepF.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/felix.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 111: { /* GRANDEUR SR */ }
                return List.wepG.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/grandeur.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 112: { /* HOCHFIR SMG */ }
                return List.wepKE.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hochfir.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 113: { /* HOIGAT .224 */ }
                return List.wep10.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hoigat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 114: { /* HOLLUNDS 880 */ }
                return List.wepH.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hollunds.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 115: { /* HURTSALL 2K */ }
                return List.wepHU.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hurtsall.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 116: { /* K-121 */ }
                return List.wepK.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/k121.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 117: { /* KEK-10 */ }
                return List.wepC.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/kek.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 118: { /* M4A1 */ }
                return List.wepM.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m4a1.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 119: { /* M9 */ }
                return List.wep4.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m9.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 120: { /* MK46 */ }
                return List.wepMA.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mk46.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 121: { /* MOA SNPR-1 */ }
                return List.wepMO.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/moa.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 122: { /* MP400 */ }
                return List.wep1.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mp400.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 123: { /* PDP-70 */ }
                return List.wepP.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/pdp.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 124: { /* REMBURG-7 */ }
                return List.wepR.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/remburg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 125: { /* RYBURN */ }
                return List.wep4r.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ryburn.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 126: { /* SELBSTADT .40 */ }
                return List.wep8.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/selbstadt.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 127: { /* SHAR-C */ }
                return List.wepSH.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/shar.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                        <span className={`m-4 d-${skin.fileName == "rankedseason4" ? "block" : "none"}`}>
                            *Existence of this particular weapon skin IS NOT officially confirmed.<br />
                            One of the devs was spotted with it in game.<br />
                            Also it's not possible to trade for this card so please, DON'T CONTACT<br />
                            Splash Damage devs for additional info or in order to buy/obtain it.<br /><br />
                            Screenshot done on old version of DB and skin's displayed thanks to currently patched bugs
                        </span>
                    </div>
                ))
            case 128: { /* SIMEON .357 */ }
                return List.wep6.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/simeon.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 129: { /* SMG-9 */ }
                return List.wepSM.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/smg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 130: { /* SMJÜTH & WHETSMAN .40 */ }
                return List.wep9.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/sw.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 131: { /* STARK AR */ }
                return List.wepS.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/stark.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 132: { /* TIMIK-47 */ }
                return List.wepT.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/timik.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 133: { /* TØLEN MP */ }
                return List.wep2.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/tolen.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 134: { /* BECKHILL COMBAT KNIFE */ }
                return List.melee1.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}beckhill.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 135: { /* STILNOTTO STILETTO */ }
                return List.melee2.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}stiletto.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 136: { /* CRICKET BAT */ }
                return List.melee3.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}bat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 137: { /* KATANA */ }
                return List.melee4.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}katana.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 138: { /* KUKRI */ }
                return List.melee5.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}kukri.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 139: { /* TACTICAL BATTLE AXE */ }
                return List.melee6a.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}tomahawk.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 140: { /* BATONS */ }
                return List.melee6b.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}batons.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 141: { /* ULU */ }
                return List.melee7.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}ulu.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 201: { /* AIMEE */ }
                return (
                <div>
                    { /* DEFAULT */}
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.aimee[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className={`img-fluid rounded shadow mb-2`} />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.aimee[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.aimee[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.aimee[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDamage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.aimee[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                        {List.aimee[4].map((def) => (
                            <div className="mb-4">
                                <p className="h6">{def.wepName}</p>
                                <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                            </div>
                    ))}
                    </div></div>
                </div>)
            case 202: { /* ARTY */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.arty[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.arty[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.arty[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (                                    
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.arty[8].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.arty[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.arty[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.arty[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 203: { /* AURA */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.aura[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.aura[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.aura[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : skin.rar == "logitech" ? 8 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.aura[9].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.aura[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.aura[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.aura[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 204: { /* BUSHWHACKER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.bushwhacker[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.bushwhacker[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.bushwhacker[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.bushwhacker[7].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.bushwhacker[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.bushwhacker[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 205: { /* FLETCHER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.fletcher[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.fletcher[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.fletcher[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.fletcher[7].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.fletcher[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.fletcher[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 206: { /* FRAGGER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.fragger[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.fragger[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.fragger[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div>
                    {List.fragger[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.fragger[8].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.fragger[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.fragger[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 207: { /* GUARDIAN */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.guardian[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.guardian[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.guardian[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Additional for me */ }
                    {List.guardian[3].map((skin) => (
                        <div className={`mt-4 d-${exp}`}>
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.guardian[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>)
            case 208: { /* HUNTER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.hunter[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.hunter[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.hunter[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/arctic.png`} className="mb-2" /> HunterSpecial</h2>
                        <div>
                    {List.hunter[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 209: { /* JAVELIN */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.javelin[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.javelin[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.javelin[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage*</h2>
                        <div>
                    {List.javelin[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    <span>
                        *Existence of these weapon skins for Javelin IS NOT officially confirmed.<br />
                        One of the devs was spotted with them in game.<br />
                        Also it's not possible to trade for this card so please, DON'T CONTACT<br />
                        Splash Damage devs for additional info or in order to buy/obtain it.<br /><br />
                        Screenshots done on old version of DB and skins are displayed thanks to currently patched bugs
                    </span>
                    </div></div>
                </div>)
            case 210: { /* KIRA */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.kira[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.kira[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.kira[skin.rar == "alienware" ? 4 : skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.kira[6].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.kira[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 211: { /* NADER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.nader[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.nader[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.nader[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (                                    
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.nader[7].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.nader[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.nader[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 212: { /* PHANTOM */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.phantom[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.phantom[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.phantom[skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.phantom[6].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.phantom[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.phantom[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 213: { /* PHOENIX */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.phoenix[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.phoenix[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.phoenix[skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.phoenix[7].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.phoenix[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.phoenix[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* WoodlandPhoenix */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> WoodlandPhoenix</h2>
                        <div>
                    {List.phoenix[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 214: { /* PROXY */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.proxy[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.proxy[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.proxy[skin.rar == "alienware" ? 8 : skin.rar == "humble" ? 9 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* CulpritObsidian */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/culpritobsidian.png`} className="mb-2" /> CulpritObsidian</h2>
                        <div>
                    {List.proxy[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div>
                    {List.proxy[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.proxy[10].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.proxy[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.proxy[6].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.proxy[7].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 215: { /* REDEYE */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.redeye[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.redeye[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.redeye[skin.rar == "humble" ? 4 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.redeye[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.redeye[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 216: { /* RHINO */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.rhino[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.rhino[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.rhino[skin.rar == "alienware" ? 4 : skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.rhino[6].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.rhino[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 217: { /* SAWBONEZ */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.sawbonez[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.sawbonez[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.sawbonez[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div>
                    {List.sawbonez[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.sawbonez[8].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.sawbonez[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.sawbonez[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 218: { /* SKYHAMMER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.skyhammer[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.skyhammer[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.skyhammer[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : skin.rar == "logitech" ? 8 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div>
                    {List.skyhammer[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.skyhammer[9].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.skyhammer[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.skyhammer[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 219: { /* SPARKS */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.sparks[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.sparks[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.sparks[skin.rar == "humble" ? 4 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.sparks[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.sparks[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 220: { /* STOKER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.stoker[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.stoker[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.stoker[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.stoker[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.stoker[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div>
                    {List.stoker[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 221: { /* THUNDER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.thunder[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.thunder[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.thunder[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.thunder[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.thunder[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 222: { /* TURTLE */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.turtle[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.turtle[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.turtle[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Turtleneck */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsold.png`} className="mb-2" /> Turtleneck</h2>
                        <div>
                    {List.turtle[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 223: { /* VASSILI */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div>
                    {List.vassili[2].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.vassili[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div>
                                {List.vassili[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className="h6">{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div>
                    {List.vassili[5].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* Nexon */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/nexon.png`} className="mb-2" /> Nexon</h2>
                        <div>
                    {List.vassili[8].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div>
                    {List.vassili[3].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div>
                    {List.vassili[4].map((def) => (
                        <div className="mb-4">
                            <p className="h6">{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2" />
                        </div>
                    ))}
                    </div></div>
                </div>)                
            case 301:
                return List.alice.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${wear}${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 302:
                return List.aquila.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${wear}${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 303:
                return List.betav.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 304:
                return List.contraband.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 305:
                return List.coresec.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${wear}${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 306:
                return List.faceit.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 307:
                return List.kma.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${wear}${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 308:
                return List.nuclearwinter.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 309:
                return List.rankedseason4.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 310:
                return List.royalforce.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${wear}${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 311:
                return List.tapir.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            }
    }

    return (
        <div className={`pb-1 min-vh-100 bg-${color[2]} bg-gradient`}>

            <h1 className={`p-4 bg-${color[0]} text-${color[1]} rounded shadow text-center`}>Weapon Finish Gallery</h1>

            <p className={`m-auto p-1 mt-4 bg-${color[0]} text-${color[1]} rounded shadow text-center d-${exp}`}><i>Experimental mode, some new features may not work, yet</i></p>

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
                        <button className="dropdown-item" onClick={() => (setStyle([19, "default", "Default", "default"]), (setHam("none")))}><img src="img/collection/default.png" /> Default</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "lead", "Lead", "lead"]), (setHam("none")))}><img src="img/collection/lead.png" /> Lead</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "iron", "Iron", "iron"]), (setHam("none")))}><img src="img/collection/iron.png" /> Iron</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "bronze", "Bronze", "bronze"]), (setHam("none")))}><img src="img/collection/bronze.png"/> Bronze</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "carbon", "Silver Carbon", "silver"]), (setHam("none")))}><img src="img/collection/silver.png" /> Silver Carbon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "urban", "Silver Urban", "silver"]), (setHam("none")))}><img src="img/collection/silver.png" /> Silver Urban</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "bamboo", "Gold Bamboo", "gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Bamboo</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "crown", "Gold Crown", "gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Crown</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "swiss", "Gold Swiss", "gold"]), (setHam("none")))}><img src="img/collection/gold.png" /> Gold Swiss</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([4, "fragment", "Cobalt Fragment", "cobalt", "hqm"]), (setHam("none"))) : (setStyle([4, "lfragment", "Cobalt Fragment", "cobalt", "hqm"]), (setHam("none"))))}><img src="img/collection/cobalt.png" /> Cobalt Fragment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "shard", "Cobalt Shard", "cobalt"]), (setHam("none")))}><img src="img/collection/cobalt.png" /> Cobalt Shard</button>
                    </div>
                </div>

                { /* Special Edition */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="SE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Special Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="SE" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([5, "alienware", "Alienware", "alienware"]), (setHam("none")))}><img src="img/collection/alienware.png"/> Alienware</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "containment", "Containment", "containment"]), (setHam("none")))}><img src="img/collection/containment.png" /> Containment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([6, "culprit", "Culprit", "culprit"]), (setHam("none")))}><img src="img/collection/culprit.png" /> Culprit</button>
                        <button className="dropdown-item" onClick={() => (setStyle([6, "cybereye", "CyberEye", "cybereye"]), (setHam("none")))}><img src="img/collection/cybereye.png" /> CyberEye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([7, "detective", "Detective", "detective"]), (setHam("none")))}><img src="img/collection/detective.png" /> Detective</button>
                        <button className="dropdown-item" onClick={() => (setStyle([18, "faction", "Faction", "faction"]), (setHam("none")))}><img src="img/collection/faction.png" /> Faction</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "ghostclip", "Ghostclip", "ghostclip"]), (setHam("none")))}><img src="img/collection/ghostclip.png" /> Ghostclip</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? ((setStyle([8, "pirin", "GuardianSpecial", "pirin", "hqm"])), (setHam("none"))) : ((setStyle([8, "lpirin", "GuardianSpecial", "pirin", "hqm"])), (setHam("none"))))}><img src="img/collection/pirin.png" /> GuardianSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "halloween17", "Halloween17", "halloween17"]), (setHam("none")))}><img src="img/collection/halloween17.png" /> Halloween17</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "hexagon", "Hexagon", "hexagon"]), (setHam("none")))}><img src="img/collection/hexagon.png" /> Hexagon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([11, "humble", "Humble", "humble"]), (setHam("none")))}><img src="img/collection/humble.png" /> Humble</button>
                        <button className="dropdown-item" onClick={() => (setStyle([9, "arctic", "HunterSpecial", "arctic"]), (setHam("none")))}><img src="img/collection/arctic.png" /> HunterSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([10, "javelin", "Javelin", "javelin"]), (setHam("none")))}><img src="img/collection/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([12, "logitech", "Logitech", "logitech"]), (setHam("none")))}><img src="img/collection/logitech.png" /> Logitech</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "ranked2", "RankedEagle", "ranked2"]), (setHam("none")))}><img src="img/collection/ranked2.png" /> RankedEeagle (Ranked 2)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "ranked4", "ScorchedMetal", "ranked4"]), (setHam("none")))}><img src="img/collection/ranked4.png" /> ScorchedMetal (Ranked 4)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "ranked3", "Shatter", "ranked3"]), (setHam("none")))}><img src="img/collection/ranked3.png" /> Shatter (Ranked 3)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([1, "suspect", "Suspect", "suspect"]), (setHam("none")))}><img src="img/collection/suspect.png" /> Suspect</button>
                        <button className="dropdown-item" onClick={() => (setStyle([2, "twitch", "Twitch", "twitch"]), (setHam("none")))}><img src="img/collection/twitch.png" /> Twitch</button>
                        <button className="dropdown-item" onClick={() => ((hqm[0] == "true" ? (setStyle([1, "xmas15", "Xmas2015", "xmas15", "hqm"]), (setHam("none"))) : (setStyle([1, "lxmas15", "Xmas2015", "xmas15", "hqm"])), (setHam("none"))))}><img src="img/collection/xmas15.png" /> Xmas2015</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "xmas17", "Xmas2017", "xmas17"]), (setHam("none")))}><img src="img/collection/xmas17.png" /> Xmas2017</button>
                    </div>
                </div>

                { /* Obsidian */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="Obs" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obsidian
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Obs" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([6, "culpritobsidian", "CulpritObsidian", "culpritobsidian"]), (setHam("none")))}><img src="img/collection/culpritobsidian.png" /> CulpritObsidian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([13, "founders", "Founders", "founders"]), (setHam("none")))}><img src="img/collection/founders.png" /> Founders</button>
                        <button className="dropdown-item" onClick={() => (setStyle([20, "nexon", "Nexon", "nexon"]), (setHam("none")))}><img src="img/collection/nexon.png" /> Nexon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([14, "outforblood", "OutforBlood", "outforblood"]), (setHam("none")))}><img src="img/collection/outforblood.png" /> OutforBlood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([21, "sd", "SplashDamage", "sd"]), (setHam("none")))}><img src="img/collection/sd.png" /> SplashDamage</button>
                        <button className="dropdown-item" onClick={() => (setStyle([15, "tacticalblack", "TacticalBlack", "obs50"]), (setHam("none")))}><img src="img/collection/obs50.png" /> TacticalBlack</button>
                        <button className="dropdown-item" onClick={() => (setStyle([16, "turtleneck", "Turtleneck", "obsold"]), (setHam("none")))}><img src="img/collection/obsold.png" /> Turtleneck</button>
                        <button className="dropdown-item" onClick={() => (setStyle([17, "woodlandphoenix", "WoodlandPhoenix", "obs50"]), (setHam("none")))}><img src="img/collection/obs50.png" /> WoodlandPhoenix</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapon Cards
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="wep" style={{maxHeight: '45vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "alice", "Alice", "alice", "wear"]), (setHam("none")))}><img src="img/collection/alice.png" /> Alice</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "aquila", "Aquila", "aquila", "wear"]), (setHam("none")))}><img src="img/collection/aquila.png" /> Aquila</button>
                        <button className="dropdown-item" onClick={() => (setStyle([305, "coresec", "CoreSec", "coresec", "wear"]), (setHam("none")))}><img src="img/collection/coresec.png" /> CoreSec</button>
                        <button className="dropdown-item" onClick={() => (setStyle([307, "kma", "KMA", "kma", "wear"]), (setHam("none")))}><img src="img/collection/kma.png" /> KMA</button>
                        <button className="dropdown-item" onClick={() => (setStyle([310, "royalforce", "RoyalForce", "royalforce", "wear"]), (setHam("none")))}><img src="img/collection/royalforce.png" /> RoyalForce</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? ((setStyle([303, "betav", "BetaVeteran", "betav", "hqm"])), (setHam("none"))) : ((setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"])), (setHam("none"))))}><img src="img/collection/betav.png" /> BetaVeteran</button>
                        <button className="dropdown-item" onClick={() => (setStyle([304, "contraband", "Contraband", "contraband"]), (setHam("none")))}><img src="img/collection/contraband.png" /> Contraband</button>
                        <button className="dropdown-item" onClick={() => (setStyle([306, "faceit", "FACEIT", "faceit"]), (setHam("none")))}><img src="img/collection/faceit.png" /> FACEIT</button>
                        <button className="dropdown-item" onClick={() => (setStyle([308, "nuclearwinter", "Nuclear Winter", "nw"]), (setHam("none")))}><img src="img/collection/nw.png" /> Nuclear Winter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([309, "rankedseason4", "Ranked Season 4", "rs4"]), (setHam("none")))}><img src="img/collection/rs4.png" /> Ranked Season 4</button>
                        <button className="dropdown-item" onClick={() => (setStyle([311, "tapir", "Tapir", "tapir"]), (setHam("none")))}><img src="img/collection/tapir.png" /> Tapir</button>
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

                { /* Weapon */ }

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapons
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="wep" style={{maxHeight: '45vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([101, "wepA", "AHNUHLD-12", "ahnuhld"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/ahnuhld.png`} /> AHNUHLD-12</button>
                        <button className="dropdown-item" onClick={() => (setStyle([102, "wep11", "AREVAROV 9", "arevarov"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/arevarov.png`} /> AREVAROV 9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([103, "wepBL", "BLISHLOK", "blishlok"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/blishlok.png`} /> BLISHLOK</button>
                        <button className="dropdown-item" onClick={() => (setStyle([104, "wepB", "BR-16", "br"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/br.png`} /> BR-16</button>
                        <button className="dropdown-item" onClick={() => (setStyle([105, "wep7", "CAULDEN", "caulden"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/caulden.png`} /> CAULDEN</button>
                        <button className="dropdown-item" onClick={() => (setStyle([106, "wepCR", "CROTZNI", "crotzni"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/crotzni.png`} /> CROTZNI</button>
                        <button className="dropdown-item" onClick={() => (setStyle([107, "wep5", "DE .50", "de"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/de.png`} /> DE .50</button>
                        <button className="dropdown-item" onClick={() => (setStyle([108, "wepD", "DREISS AR", "dreiss"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/dreiss.png`} /> DREISS AR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([109, "wep3", "EMPIRE-9", "empire"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/empire.png`} /> EMPIRE-9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([110, "wepF", "FEL-IX", "felix"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/felix.png`} /> FEL-IX</button>
                        <button className="dropdown-item" onClick={() => (setStyle([111, "wepG", "GRANDEUR SR", "grandeur"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/grandeur.png`} /> GRANDEUR SR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([112, "wepKE", "HOCHFIR SMG", "hochfir"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/hochfir.png`} /> HOCHFIR SMG</button>
                        <button className="dropdown-item" onClick={() => (setStyle([113, "wep10", "HOIGAT .224", "hoigat"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/hoigat.png`} /> HOIGAT .224</button>
                        <button className="dropdown-item" onClick={() => (setStyle([114, "wepH", "HOLLUNDS 880", "hollunds"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/hollunds.png`} /> HOLLUNDS 880</button>
                        <button className="dropdown-item" onClick={() => (setStyle([115, "wepHU", "HURTSALL 2K", "hurtsall"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/hurtsall.png`} /> HURTSALL 2K</button>
                        <button className="dropdown-item" onClick={() => (setStyle([116, "wepK", "K-121", "k121"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/k121.png`} /> K-121</button>
                        <button className="dropdown-item" onClick={() => (setStyle([117, "wepC", "KEK-10", "kek"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/kek.png`} /> KEK-10</button>
                        <button className="dropdown-item" onClick={() => (setStyle([118, "wepM", "M4A1", "m4a1"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/m4a1.png`} /> M4A1</button>
                        <button className="dropdown-item" onClick={() => (setStyle([119, "wep4", "M9", "m9"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/m9.png`} /> M9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([120, "wepMA", "MK46", "mk46"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/mk46.png`} /> MK46</button>
                        <button className="dropdown-item" onClick={() => (setStyle([121, "wepMO", "MOA SNPR-1", "moa"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/moa.png`} /> MOA SNPR-1</button>
                        <button className="dropdown-item" onClick={() => (setStyle([122, "wep1", "MP400", "mp400"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/mp400.png`} /> MP400</button>
                        <button className="dropdown-item" onClick={() => (setStyle([123, "wepP", "PDP-70", "pdp"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/pdp.png`} /> PDP-70</button>
                        <button className="dropdown-item" onClick={() => (setStyle([124, "wepR", "REMBURG-7", "remburg"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/remburg.png`} /> REMBURG-7</button>
                        <button className="dropdown-item" onClick={() => (setStyle([125, "wep4r", "RYBURN", "ryburn"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/ryburn.png`} /> RYBURN</button>
                        <button className="dropdown-item" onClick={() => (setStyle([126, "wep8", "SELBSTADT .40", "selbstadt"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/selbstadt.png`} /> SELBSTADT .40</button>
                        <button className="dropdown-item" onClick={() => (setStyle([127, "wepSH", "SHAR-C", "shar"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/shar.png`} /> SHAR-C</button>
                        <button className="dropdown-item" onClick={() => (setStyle([128, "wep6", "SIMEON .357", "simeon"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/simeon.png`} /> SIMEON .357</button>
                        <button className="dropdown-item" onClick={() => (setStyle([129, "wepSM", "SMG-9", "smg"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/smg.png`} /> SMG-9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([130, "wep9", "SMJÜTH & WHETSMAN .40", "sw"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/sw.png`} /> SMJÜTH & WHETSMAN .40</button>
                        <button className="dropdown-item" onClick={() => (setStyle([131, "wepS", "STARK AR", "stark"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/stark.png`} /> STARK AR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([132, "wepT", "TIMIK-47", "timik"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/timik.png`} /> TIMIK-47</button>
                        <button className="dropdown-item" onClick={() => (setStyle([133, "wep2", "TØLEN MP", "tolen"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/tolen.png`} /> TØLEN MP</button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={() => (setStyle([134, "melee1", "BECKHILL COMBAT KNIFE", "beckhill"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/beckhill.png`} /> BECKHILL COMBAT KNIFE</button>
                        <button className="dropdown-item" onClick={() => (setStyle([135, "melee2", "STILNOTTO STILETTO", "stiletto"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/stiletto.png`} /> STILNOTTO STILETTO</button>
                        <button className="dropdown-item" onClick={() => (setStyle([136, "melee3", "CRICKET BAT", "bat"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/bat.png`} /> CRICKET BAT</button>
                        <button className="dropdown-item" onClick={() => (setStyle([137, "melee4", "KATANA", "katana"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/katana.png`} /> KATANA</button>
                        <button className="dropdown-item" onClick={() => (setStyle([138, "melee5", "KUKRI", "kukri"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/kukri.png`} /> KUKRI</button>
                        <button className="dropdown-item" onClick={() => (setStyle([139, "melee6a", "TACTICAL BATTLE AXE", "tomahawk"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/tomahawk.png`} /> TACTICAL BATTLE AXE</button>
                        <button className="dropdown-item" onClick={() => (setStyle([140, "melee6b", "BATONS", "batons"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/batons.png`} /> BATONS</button>
                        <button className="dropdown-item" onClick={() => (setStyle([141, "melee7", "ULU", "ulu"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/ulu.png`} /> ULU</button>
                    </div>
                </div>

                { /* HQM */ }

                <div className={`mt-2 d-${style[4] == "hqm" ? "block" : "none"}`}>
                    <b>HQM: </b><br />
                    <div className="btn-group">
                        <button className={`rounded-start btn btn${hqm[0] == "true" ? hqm[1] : hqm[2]}-success border-2`} onClick={() => (setHqm(["true", "", "-outline"]), (setHam("none")), style[1] == "lfragment" ? setStyle([4, "fragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "lpirin" ? setStyle([8, "pirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "lxmas15" ? setStyle([1, "xmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "lbetav" ? setStyle([303, "betav", "BetaVeteran", "betav", "hqm"]) : "")}>ON</button>
                        <button className={`rounded-end btn btn${hqm[0] == "true" ? hqm[2] : hqm[1]}-danger border-2`} onClick={() => (setHqm(["false", "", "-outline"]), (setHam("none")), style[1] == "fragment" ? setStyle([4, "lfragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "pirin" ? setStyle([8, "lpirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "xmas15" ? setStyle([1, "lxmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "betav" ? setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"]) : "")}>OFF</button>
                    </div>
                </div>

                { /* WEAR */ }

                <div className={`mt-2 d-${style[4] == "wear" ? "block" : "none"} d-${exp}`}>
                    <b className={`text-${color[1]}`}>WEAR: </b>
                    <div className="btn-group">
                        <button className={`rounded-start btn btn${wearBut[0]}-${color[1]} border-2`} onClick={() => (setWear(""), setWearBut(["", "-outline", "-outline", "-outline", "-outline"]), (setHam("none")))}>PRISTINE</button>
                        <button className={`btn btn${wearBut[1]}-${color[1]} border-2`} onClick={() => (setWear("refined/"), setWearBut(["-outline", "", "-outline", "-outline", "-outline"]), (setHam("none")))}>REFINED</button>
                        <button className={`btn btn${wearBut[2]}-${color[1]} border-2`} onClick={() => (setWear("standard/"), setWearBut(["-outline", "-outline", "", "-outline", "-outline"]), (setHam("none")))}>STANDARD</button>
                        <button className={`btn btn${wearBut[3]}-${color[1]} border-2`} onClick={() => (setWear("worn/"), setWearBut(["-outline", "-outline", "-outline", "", "-outline"]), (setHam("none")))}>WORN</button>
                        <button className={`rounded-end btn btn${wearBut[4]}-${color[1]} border-2`} onClick={() => (setWear("scarred/"), setWearBut(["-outline", "-outline", "-outline", "-outline", ""]), (setHam("none")))}>SCARRED</button>
                    </div>
                </div>

                { /* About */}

                <Link to="/GAbout">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} mt-4`}>
                        <i className="bi bi-info-circle" /> About
                    </button>
                </Link>

                </div>
            </div>

            <div className={`bg-${color[0]} rounded shadow mt-4 justify-content-center text-center text-${color[1]}`}>
                <h2 className="text-center pt-4"><img src={style[0] >= 200 && style[0] <= 223 ? `img/merc/${style[3]}.png` : style[0] >= 100 && style[0] <= 141 ? `img/weapon/${color[1]}/${style[3]}.png` : `img/collection/${style[3]}.png`} className="mb-2" /> { style[2] }</h2>
                <div className={`p-5`}>
                    {renderWepImgs(style[0], style[1], style[2])}
                </div>
                <button onClick={() => exp == "none" ? setExp("block") : setExp("none")} className={exp == "none" ? `border-0 bg-${color[0]} text-start` : `border-2 bg-${color[0]} border-${color[1]} text-${color[1]}`}>{exp == "none" ? "" : "EXP ON"}</button>
            </div>
            
            <button className={`btn border-2 border-${color[1]} btn-${color[0]} position-fixed bottom-0 end-0 m-3`} onClick={() => window.scrollTo(0, 0)}><i className="bi bi-arrow-bar-up" /></button>

            <Footer />


        </div>
    );
}

export default MOBGallery;