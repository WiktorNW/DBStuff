import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Footer from './footer';
import List from '../xlists.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function XPCGallery({color}) {
    var noImg = "img/noimg.png";
    var [grid, setGrid] = useState([3, 6]);
    var [style, setStyle] = useState([19, "default", "Default", "default"]);
    var [exp, setExp] = useState(["none"]);
    var [hqm, setHqm] = useState(["true", "", "-outline"]);

    const renderWepImgs = (lType, colID, col) => {
        switch (lType) {
            case 1:
                return List.ListClassic.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
                // ListClassic.map(weapon) - Function that goes through all the records in array and for each one creates 1 image block
                // weapon - argument that allows me to get wirte data from array
                // ListClassic - array that has all the weapons up to Javelin Update
                // Block is made out of paragrapgh with weapon's name and it's image
                // className={`h${grid[1]}`} - with bootsrap this makes text smaller (3 images per row) or bigger (1 image per row)
                // weapon.wepName - name of weapon ; weapon.fileName - images' filename ; weapon.alt - alt name to display when images can't load
                // for image colID is name of collection (default, lead, cobalt etc.)
                // noImg - variable with path to image that displays when there's missing weapon's image
                // alt={`${col} ${weapon.alt}`} - alternate text that says something like Fragment Blishlok when any image can't load
                // onError - when there's missing image this changes image's source from not existing path to the noImg image
            case 2:
                return List.ListAddJav.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 3:
                return List.ListAddGrd.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 4:
                return List.ListAddHntr.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 5:
                return List.ListAlien.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 6:
                return List.ListProx.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 7:
                return List.ListAimee.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 8:
                return List.ListGrd.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 9:
                return List.ListHntr.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 10:
                return List.ListJav.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 11:
                return List.ListHumb.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 12:
                return List.ListLog.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 13:
                return List.ListFounders.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 14:
                return List.ListBlood.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 15:
                return List.ListTacticalB.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 16:
                return List.ListTurtle.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 17:
                return List.ListPhoenix.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 18:
                return List.ListFaction.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 19:
                return List.ListAll.map((weapon) => (
                    <div className="mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 20:
                return List.ListX17.map((weapon) => (
                    <div className="mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 101: {/* AHNUHLD-12 */ }
                return List.wepA.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ahnuhld.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 102: { /* AREVAROV 9 */ }
                return List.wep11.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/arevarov.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 103: { /* BLISHLOK */ }
                return List.wepBL.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/blishlok.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 104: { /* BR=16 */ }
                return List.wepB.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/br.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 105: { /* CAULDEN */ }
                return List.wep7.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/caulden.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 106: { /* CROTZNI */ }
                return List.wepCR.map((skin) => ( 
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/crotzni.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 107: { /* DE .50 */ }
                return List.wep5.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/de.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 108: { /* DREISS AR */ }
                return List.wepD.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/dreiss.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 109: { /* EMPIRE-9 */ }
                return List.wep3.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/empire.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 110: { /* FEL-IX */ }
                return List.wepF.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/felix.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 111: { /* GRANDEUR SR */ }
                return List.wepG.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/grandeur.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 112: { /* HOCHFIR SMG */ }
                return List.wepKE.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hochfir.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 113: { /* HOIGAT .224 */ }
                return List.wep10.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hoigat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 114: { /* HOLLUNDS 880 */ }
                return List.wepH.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hollunds.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 115: { /* HURTSALL 2K */ }
                return List.wepHU.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hurtsall.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 116: { /* K-121 */ }
                return List.wepK.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/k121.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 117: { /* KEK-10 */ }
                return List.wepC.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/kek.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 118: { /* M4A1 */ }
                return List.wepM.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m4a1.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 119: { /* M9 */ }
                return List.wep4.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m9.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 120: { /* MK46 */ }
                return List.wepMA.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mk46.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 121: { /* MOA SNPR-1 */ }
                return List.wepMO.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/moa.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 122: { /* MP400 */ }
                return List.wep1.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mp400.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 123: { /* PDP-70 */ }
                return List.wepP.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/pdp.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 124: { /* REMBURG-7 */ }
                return List.wepR.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/remburg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 125: { /* RYBURN */ }
                return List.wep4r.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ryburn.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 126: { /* SELBSTADT .40 */ }
                return List.wep8.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/selbstadt.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 127: { /* SHAR-C */ }
                return List.wepSH.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/shar.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 128: { /* SIMEON .357 */ }
                return List.wep6.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/simeon.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 129: { /* SMG-9 */ }
                return List.wepSM.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/smg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 130: { /* SMJÜTH & WHETSMAN .40 */ }
                return List.wep9.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/sw.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 131: { /* STARK AR */ }
                return List.wepS.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/stark.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 132: { /* TIMIK-47 */ }
                return List.wepT.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/timik.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 133: { /* TØLEN MP */ }
                return List.wep2.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/tolen.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 134: { /* BECKHILl COMBAT KNIFE */ }
                return List.melee1.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}beckhill.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 135: { /* STILNOTTO STILETTO */ }
                return List.melee2.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}stiletto.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 136: { /* CRICKET BAT */ }
                return List.melee3.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}bat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 137: { /* KATANA */ }
                return List.melee4.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}katana.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 138: { /* KUKRI */ }
                return List.melee5.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}kukri.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 139: { /* BATONS */ }
                return List.melee6a.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}tomahawk.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 140: { /* TACTICAL COMBAT AXE */ }
                return List.melee6b.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}batons.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 141: { /* UlU */ }
                return List.melee7.map((skin) => (
                    <div className=" mt-4">
                        {console.log(List.aimee)}
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}ulu.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 142: { /* SILENCED M9 */ }
                return List.wep4s.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m9s.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 143: { /* SILENCED MP400 */ }
                return List.wep1s.map((skin) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mp400s.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 201: { /* AIMEE */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aimee[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.aimee[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.aimee[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /*SplashDamage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aimee[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aimee[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 202: { /* ARTY */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.arty[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.arty[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.arty[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (                                    
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.arty[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.arty[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.arty[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 203: { /* AURA */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aura[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.aura[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.aura[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : skin.rar == "logitech" ? 8 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aura[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aura[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.aura[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 204: { /* BUSHWHACKER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.bushwhacker[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.bushwhacker[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.bushwhacker[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.bushwhacker[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.bushwhacker[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 205: { /* FLETCHER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fletcher[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.fletcher[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.fletcher[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fletcher[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fletcher[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 206: { /* FRAGGER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fragger[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.fragger[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.fragger[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fragger[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fragger[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.fragger[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 207: { /* GUARDIAN */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.guardian[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.guardian[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.guardian[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Additional for me */}
                    {List.guardian[3].map((skin) => (
                        <div className={`mt-4 d-${exp}`}>
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.guardian[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
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
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.hunter[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.hunter[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.hunter[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/arctic.png`} className="mb-2" /> HunterSpecial</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.hunter[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 209: { /* JAVELIN */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.javelin[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.javelin[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.javelin[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>)
            case 210: { /* KIRA */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.kira[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.kira[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.kira[skin.rar == "alienware" ? 4 : skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.kira[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 211: { /* NADER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.nader[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.nader[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.nader[skin.rar == "alienware" ? 5 : skin.rar == "humble" ? 6 : 0].map((weapon) => (                                    
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.nader[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.nader[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 212: { /* PHANTOM */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phantom[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.phantom[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.phantom[skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phantom[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phantom[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 213: { /* PHOENIX */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phoenix[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.phoenix[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.phoenix[skin.rar == "humble" ? 6 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phoenix[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phoenix[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* WoodlandPhoenix */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> WoodlandPhoenix</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.phoenix[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 214: { /* PROXY */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.proxy[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.proxy[skin.rar == "alienware" ? 8 : skin.rar == "humble" ? 9 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* CulpritObsidian */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/culpritobsidian.png`} className="mb-2" /> CulpritObsidian</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[6].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.proxy[7].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 215: { /* REDEYE */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.redeye[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.redeye[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.redeye[skin.rar == "humble" ? 4 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.redeye[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 216: { /* RHINO */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.rhino[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.rhino[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.rhino[skin.rar == "alienware" ? 4 : skin.rar == "humble" ? 5 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.rhino[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 217: { /* SAWBONEZ */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sawbonez[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.sawbonez[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.sawbonez[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sawbonez[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sawbonez[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sawbonez[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 218: { /* SKYHAMMER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.skyhammer[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.skyhammer[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.skyhammer[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : skin.rar == "logitech" ? 8 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.skyhammer[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.skyhammer[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsnew.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.skyhammer[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 219: { /* SPARKS */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sparks[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.sparks[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.sparks[skin.rar == "humble" ? 4 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.sparks[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 220: { /* STOKER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.stoker[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.stoker[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.stoker[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.stoker[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* TacticalBlack */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obs50.png`} className="mb-2" /> TacticalBlack</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.stoker[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Additional for me */}
                    {List.stoker[5].map((skin) => (
                        <div className={`mt-4 d-${exp}`}>
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.stoker[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>)
            case 221: { /* THUNDER */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.thunder[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.thunder[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.thunder[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.thunder[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 222: { /* TURTLE */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.turtle[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.turtle[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.turtle[0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Turtleneck */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/obsold.png`} className="mb-2" /> Turtleneck</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.turtle[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 223: { /* VASSILI */ }
                return (<div>
                    { /* Default */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/default.png`} className="mb-2" /> Default</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.vassili[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* Rest of the editions */ }
                    {List.vassili[1].map((skin) => (
                        <div className="mt-4">
                            <h2 className="text-center"><img src={`img/collection/${skin.rar}.png`} className="mb-2" /> { skin.colName }</h2>
                            <div className={`row row-cols-${grid[0]}`}>
                                {List.vassili[skin.rar == "alienware" ? 6 : skin.rar == "humble" ? 7 : 0].map((weapon) => (
                                    <div className="mb-4">
                                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                                        <img src={`img/${skin.fileName}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    { /* Founders */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/founders.png`} className="mb-2" /> Founders</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.vassili[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* OutforBlood */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/outforblood.png`} className="mb-2" /> OutforBlood</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.vassili[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    { /* SplashDmage */ }
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sd.png`} className="mb-2" /> SplashDamage</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.vassili[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/${def.colFileName}/${def.wepFileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 301:
                return List.alice.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 302:
                return List.aquila.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 303:
                return List.betav.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 304:
                return List.contraband.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 305:
                return List.coresec.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 306:
                return List.faceit.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 307:
                return List.kma.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 308:
                return List.nuclearwinter.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 309:
                return List.rankedseason4.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 310:
                return List.royalforce.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 311:
                return List.tapir.map((weapon) => (
                    <div className=" mt-4">
                        <p className={`h${grid[1]}`}>{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow w-100" />
                    </div>
                ))
            case 312: { /* Weapon Cards - Bronze */ }
                return (<div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/balice.png`} className="mb-2" /> Alice</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[0].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/alice/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/baquila.png`} className="mb-2" /> Aquila</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[1].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/aquila/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/bcoresec.png`} className="mb-2" /> CoreSec</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/coresec/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/bkma.png`} className="mb-2" /> KMA</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/kma/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/broyalforce.png`} className="mb-2" /> RoyalForce</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/royalforce/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/bbetav.png`} className="mb-2" /> BetaVeteran</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/betav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/bbetav.png`} className="mb-2" /> BetaVeteran (HQM OFF)</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsBronze[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/lbetav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 313: { /* Weapon Cards - Silver */ }
                return (<div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/salice.png`} className="mb-2" /> Alice</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[0].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/alice/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/saquila.png`} className="mb-2" /> Aquila</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[1].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/aquila/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/scoresec.png`} className="mb-2" /> CoreSec</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/coresec/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/skma.png`} className="mb-2" /> KMA</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/kma/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sroyalforce.png`} className="mb-2" /> RoyalForce</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/royalforce/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sbetav.png`} className="mb-2" /> BetaVeteran</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/betav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/sbetav.png`} className="mb-2" /> BetaVeteran (HQM OFF)</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsSilver[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/lbetav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 314: { /* Weapon Cards - Gold */ }
                return (<div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/galice.png`} className="mb-2" /> Alice</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[0].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/alice/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/gaquila.png`} className="mb-2" /> Aquila</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[1].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/aquila/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/gcoresec.png`} className="mb-2" /> CoreSec</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/coresec/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/gkma.png`} className="mb-2" /> KMA</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/kma/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/groyalforce.png`} className="mb-2" /> RoyalForce</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/royalforce/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/gbetav.png`} className="mb-2" /> BetaVeteran</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/betav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/gbetav.png`} className="mb-2" /> BetaVeteran (HQM OFF)</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsGold[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/lbetav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            case 315: { /* Weapon Cards - Cobalt */ }
                return (<div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/calice.png`} className="mb-2" /> Alice</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[0].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/alice/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/caquila.png`} className="mb-2" /> Aquila</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[1].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/aquila/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/ccoresec.png`} className="mb-2" /> CoreSec</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[2].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/coresec/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/ckma.png`} className="mb-2" /> KMA</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[3].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/kma/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/croyalforce.png`} className="mb-2" /> RoyalForce</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[4].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/royalforce/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/cbetav.png`} className="mb-2" /> BetaVeteran</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/betav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                    <div className="mt-4">
                        <h2 className="text-center"><img src={`img/collection/cbetav.png`} className="mb-2" /> BetaVeteran (HQM OFF)</h2>
                        <div className={`row row-cols-${grid[0]}`}>
                    {List.wepCardsCobalt[5].map((def) => (
                        <div className="mb-4">
                            <p className={`h${grid[1]}`}>{def.wepName}</p>
                            <img src={`img/lbetav/${def.fileName}` || noImg} alt={`${col} ${def.wepAlt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow mb-2 w-100" />
                        </div>
                    ))}
                    </div></div>
                </div>)
            }
    }

    return (
        <div className={`p-4 bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto w-75 p-4 bg-${color[0]} rounded shadow text-center text-${color[1]}`}><i>Illegal</i> Weapon Finish Gallery</h1>

            <p className={`m-auto w-75 p-1 mt-4 bg-${color[0]} rounded shadow text-center text-${color[1]} d-${exp}`}><i>Experimental mode, some new features may not work, yet</i></p>

            { /* Navbar */ }

            <div className={`mt-4 p-3 navbar sticky-top bg-${color[0]} m-auto w-75 rounded p-2 shadow m-auto justify-content-center text-${color[1]}`}>

                { /* Back to start */ }

                <Link to="/" className={`btn btn-${color[0]} border-2 border-${color[1]} me-3`}><i className="bi bi-arrow-return-left" /> Back to start</Link>

                { /* Regular Edition */ }

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="nonSE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Regular Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="nonSE" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([19, "default", "Default", "default"]))}><img src="img/collection/default.png" /> Default</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "lead", "Lead", "lead"]))}><img src="img/collection/lead.png" /> Lead</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "iron", "Iron", "iron"]))}><img src="img/collection/iron.png" /> Iron</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "bronze", "Bronze", "bronze"]))}><img src="img/collection/bronze.png"/> Bronze</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "carbon", "Silver Carbon", "silver"]))}><img src="img/collection/silver.png" /> Silver Carbon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "urban", "Silver Urban", "silver"]))}><img src="img/collection/silver.png" /> Silver Urban</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "bamboo", "Gold Bamboo", "gold"]))}><img src="img/collection/gold.png" /> Gold Bamboo</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "crown", "Gold Crown", "gold"]))}><img src="img/collection/gold.png" /> Gold Crown</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "swiss", "Gold Swiss", "gold"]))}><img src="img/collection/gold.png" /> Gold Swiss</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([4, "fragment", "Cobalt Fragment", "cobalt", "hqm"])) : (setStyle([4, "lfragment", "Cobalt Fragment", "cobalt", "hqm"])))}><img src="img/collection/cobalt.png" /> Cobalt Fragment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([4, "shard", "Cobalt Shard", "cobalt"]))}><img src="img/collection/cobalt.png" /> Cobalt Shard</button>
                    </div>
                </div>

                { /* Special Edition */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="SE" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Special Edition
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="SE" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "alienware", "Alienware", "alienware"]))}><img src="img/collection/alienware.png"/> Alienware</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "containment", "Containment", "containment"]))}><img src="img/collection/containment.png" /> Containment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "culprit", "Culprit", "culprit"]))}><img src="img/collection/culprit.png" /> Culprit</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "cybereye", "CyberEye", "cybereye"]))}><img src="img/collection/cybereye.png" /> CyberEye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "detective", "Detective", "detective"]))}><img src="img/collection/detective.png" /> Detective</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "faction", "Faction", "faction"]))}><img src="img/collection/faction.png" /> Faction</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ghostclip", "Ghostclip", "ghostclip"]))}><img src="img/collection/ghostclip.png" /> Ghostclip</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([3, "pirin", "GuardianSpecial", "pirin", "hqm"])) : (setStyle([3, "lpirin", "GuardianSpecial", "pirin", "hqm"])))}><img src="img/collection/pirin.png" /> GuardianSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "halloween17", "Halloween17", "halloween17"]))}><img src="img/collection/halloween17.png" /> Halloween17</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "hexagon", "Hexagon", "hexagon"]))}><img src="img/collection/hexagon.png" /> Hexagon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "humble", "Humble", "humble"]))}><img src="img/collection/humble.png" /> Humble</button>
                        <button className="dropdown-item" onClick={() => (setStyle([9, "arctic", "HunterSpecial", "arctic"]))}><img src="img/collection/arctic.png" /> HunterSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "javelin", "Javelin", "javelin"]))}><img src="img/collection/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "logitech", "Logitech", "logitech"]))}><img src="img/collection/logitech.png" /> Logitech</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked2", "RankedEagle", "ranked2"]))}><img src="img/collection/ranked2.png" /> RankedEeagle (Ranked 2)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked4", "ScorchedMetal", "ranked4"]))}><img src="img/collection/ranked4.png" /> ScorchedMetal (Ranked 4)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked3", "Shatter", "ranked3"]))}><img src="img/collection/ranked3.png" /> Shatter (Ranked 3)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "suspect", "Suspect", "suspect"]))}><img src="img/collection/suspect.png" /> Suspect</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "twitch", "Twitch", "twitch"]))}><img src="img/collection/twitch.png" /> Twitch</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([3, "xmas15", "Xmas2015", "xmas15", "hqm"])) : (setStyle([3, "lxmas15", "Xmas2015", "xmas15", "hqm"])))}><img src="img/collection/xmas15.png" /> Xmas2015</button>
                        <button className="dropdown-item" onClick={() => (setStyle([20, "xmas17", "Xmas2017", "xmas17"]))}><img src="img/collection/xmas17.png" /> Xmas2017</button>
                    </div>
                </div>

                { /* Obsidian */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="Obs" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obsidian
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Obs" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "culpritobsidian", "CulpritObsidian", "culpritobsidian"]))}><img src="img/collection/culpritobsidian.png" /> CulpritObsidian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "founders", "Founders", "founders"]))}><img src="img/collection/founders.png" /> Founders</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "nexon", "Nexon", "nexon"]))}><img src="img/collection/nexon.png" /> Nexon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "outforblood", "OutforBlood", "outforblood"]))}><img src="img/collection/outforblood.png" /> OutforBlood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "sd", "SplashDamage", "sd"]))}><img src="img/collection/sd.png" /> SplashDamage</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "tacticalblack", "TacticalBlack", "obs50"]))}><img src="img/collection/obs50.png" /> TacticalBlack</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "turtleneck", "Turtleneck", "obsold"]))}><img src="img/collection/obsold.png" /> Turtleneck</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "woodlandphoenix", "WoodlandPhoenix", "obs50"]))}><img src="img/collection/obs50.png" /> WoodlandPhoenix</button>
                    </div>
                </div>

                { /* Unreleased */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle`} type="button" id="Unrld" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Unreleased
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Unrld" style={{ maxHeight: '70vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "anodisedgreen", "Anodised_Green", "se"]))}><img src="img/collection/se.png" /> Anodised_Green</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "anodisedred", "Anodised_Red", "se"]))}><img src="img/collection/se.png" /> Anodised_Red</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "blunderbuss", "Blunderbuss", "se"]))}><img src="img/collection/se.png" /> Blunderbuss</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "combatarms", "CombatArms", "ca"]))}><img src="img/collection/ca.png" /> CombatArms</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "sefaceit", "FaceIt", "se"]))}><img src="img/collection/se.png" /> FaceIt</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "grid", "Grid", "se"]))}><img src="img/collection/se.png" /> Grid</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "hex", "Hex", "se"]))}><img src="img/collection/se.png" /> Hex</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "legaliseit", "LegaliseIt", "se"]))}><img src="img/collection/se.png" /> LegaliseIt</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matbleachedwood", "Mat_BleachedWood", "se"]))}><img src="img/collection/se.png" /> Mat_BleachedWood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matdiamonds", "Mat_Diamonds", "se"]))}><img src="img/collection/se.png" /> Mat_Diamonds</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matgold", "Mat_Gold", "se"]))}><img src="img/collection/se.png" /> Mat_Gold</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matoldwood", "Mat_OldWood", "se"]))}><img src="img/collection/se.png" /> Mat_OldWood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "mattoygun", "Mat_Toygun", "se"]))}><img src="img/collection/se.png" /> Mat_Toygun</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matwoodstock", "Mat_WoodStock", "se"]))}><img src="img/collection/se.png" /> Mat_WoodStock</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "mudflood", "Mudflood", "se"]))}><img src="img/collection/se.png" /> Mudflood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "redtiger", "RedTiger", "se"]))}><img src="img/collection/se.png" /> RedTiger</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "resistance", "Resistance", "se"]))}><img src="img/collection/se.png" /> Resistance</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rfbg", "RoyalForce_Bronze/Gold", "se"]))}><img src="img/collection/se.png" /> RoyalForce_Bronze/Gold</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rfs", "RoyalForce_Silver", "se"]))}><img src="img/collection/se.png" /> RoyalForce_Silver</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rf12", "RoyalForce_T1/T2", "se"]))}><img src="img/collection/se.png" /> RoyalForce_T1/T2</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rf34", "RoyalForce_T3/T4", "se"]))}><img src="img/collection/se.png" /> RoyalForce_T3/T4</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "snakescale", "SnakeScale", "se"]))}><img src="img/collection/se.png" /> SnakeScale</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "spraypaint", "SprayPaint", "se"]))}><img src="img/collection/se.png" /> SprayPaint</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "starter", "Starter", "se"]))}><img src="img/collection/se.png" /> Starter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "urbandigital", "UrbanDigital", "se"]))}><img src="img/collection/se.png" /> UrbanDigital</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "web", "Web", "se"]))}><img src="img/collection/se.png" /> Web</button>
                    </div>
                </div>

                {/* Weapon Cards */}

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle me-1`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapon Cards
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="wep" style={{maxHeight: '70vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "alice", "Alice", "alice"]))}><img src="img/collection/alice.png" /> Alice</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "aquila", "Aquila", "aquila"]))}><img src="img/collection/aquila.png" /> Aquila</button>
                        <button className="dropdown-item" onClick={() => (setStyle([305, "coresec", "CoreSec", "coresec"]))}><img src="img/collection/coresec.png" /> CoreSec</button>
                        <button className="dropdown-item" onClick={() => (setStyle([307, "kma", "KMA", "kma"]))}><img src="img/collection/kma.png" /> KMA</button>
                        <button className="dropdown-item" onClick={() => (setStyle([310, "royalforce", "RoyalForce", "royalforce"]))}><img src="img/collection/royalforce.png" /> RoyalForce</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? (setStyle([303, "betav", "BetaVeteran", "betav", "hqm"])) : (setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"])))}><img src="img/collection/betav.png" /> BetaVeteran</button>
                        {/*<button className="dropdown-item" onClick={() => (setStyle([303, "lbetav", "BetaVeteran (HQM OFF)", "betav"]))}><img src="img/collection/betav.png" /> BetaVeteran (HQM OFF)</button>*/}
                        <button className="dropdown-item" onClick={() => (setStyle([304, "contraband", "Contraband", "contraband"]))}><img src="img/collection/contraband.png" /> Contraband</button>
                        <button className="dropdown-item" onClick={() => (setStyle([306, "faceit", "FACEIT", "faceit"]))}><img src="img/collection/faceit.png" /> FACEIT</button>
                        <button className="dropdown-item" onClick={() => (setStyle([308, "nuclearwinter", "Nuclear Winter", "nw"]))}><img src="img/collection/nw.png" /> Nuclear Winter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([309, "rankedseason4", "Ranked Season 4", "rs4"]))}><img src="img/collection/rs4.png" /> Ranked Season 4</button>
                        <button className="dropdown-item" onClick={() => (setStyle([311, "tapir", "Tapir", "tapir"]))}><img src="img/collection/tapir.png" /> Tapir</button>

                        <div className={`d-${exp}`}>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={() => (setStyle([312, "wepCardsBronze", "Weapon Cards - Bronze", "bronze"]))}><img src="img/collection/bronze.png" /> Weapon Cards - Bronze</button>
                            <button className="dropdown-item" onClick={() => (setStyle([313, "wepCardsSilver", "Weapon Cards - Silver", "silver"]))}><img src="img/collection/silver.png" /> Weapon Cards - Silver</button>
                            <button className="dropdown-item" onClick={() => (setStyle([314, "wepCardsGold", "Weapon Cards - Gold", "gold"]))}><img src="img/collection/gold.png" /> Weapon Cards - Gold</button>
                            <button className="dropdown-item" onClick={() => (setStyle([315, "wepCardsCobalt", "Weapon Cards - Cobalt", "cobalt"]))}><img src="img/collection/cobalt.png" /> Weapon Cards - Cobalt</button>
                        </div>

                    </div>
                </div>

                { /* Weapon */ }

                <div className="dropdown me-2">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle me-2`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapons
                    </button>

                    <div className={`dropdown-menu overflow-auto dropdown-menu-${color[0]}`} aria-labelledby="wep" style={{maxHeight: '70vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([101, "wepA", "AHNUHLD-12", "ahnuhld"]))}><img src={`img/weapon/${color[1]}/ahnuhld.png`} /> AHNUHLD-12</button>
                        <button className="dropdown-item" onClick={() => (setStyle([102, "wep11", "AREVAROV 9", "arevarov"]))}><img src={`img/weapon/${color[1]}/arevarov.png`} /> AREVAROV 9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([103, "wepBL", "BLISHLOK", "blishlok"]))}><img src={`img/weapon/${color[1]}/blishlok.png`} /> BLISHLOK</button>
                        <button className="dropdown-item" onClick={() => (setStyle([104, "wepB", "BR-16", "br"]))}><img src={`img/weapon/${color[1]}/br.png`} /> BR-16</button>
                        <button className="dropdown-item" onClick={() => (setStyle([105, "wep7", "CAULDEN", "caulden"]))}><img src={`img/weapon/${color[1]}/caulden.png`} /> CAULDEN</button>
                        <button className="dropdown-item" onClick={() => (setStyle([106, "wepCR", "CROTZNI", "crotzni"]))}><img src={`img/weapon/${color[1]}/crotzni.png`} /> CROTZNI</button>
                        <button className="dropdown-item" onClick={() => (setStyle([107, "wep5", "DE .50", "de"]))}><img src={`img/weapon/${color[1]}/de.png`} /> DE .50</button>
                        <button className="dropdown-item" onClick={() => (setStyle([108, "wepD", "DREISS AR", "dreiss"]))}><img src={`img/weapon/${color[1]}/dreiss.png`} /> DREISS AR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([109, "wep3", "EMPIRE-9", "empire"]))}><img src={`img/weapon/${color[1]}/empire.png`} /> EMPIRE-9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([110, "wepF", "FEL-IX", "felix"]))}><img src={`img/weapon/${color[1]}/felix.png`} /> FEL-IX</button>
                        <button className="dropdown-item" onClick={() => (setStyle([111, "wepG", "GRANDEUR SR", "grandeur"]))}><img src={`img/weapon/${color[1]}/grandeur.png`} /> GRANDEUR SR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([112, "wepKE", "HOCHFIR SMG", "hochfir"]))}><img src={`img/weapon/${color[1]}/hochfir.png`} /> HOCHFIR SMG</button>
                        <button className="dropdown-item" onClick={() => (setStyle([113, "wep10", "HOIGAT .224", "hoigat"]))}><img src={`img/weapon/${color[1]}/hoigat.png`} /> HOIGAT .224</button>
                        <button className="dropdown-item" onClick={() => (setStyle([114, "wepH", "HOLLUNDS 880", "hollunds"]))}><img src={`img/weapon/${color[1]}/hollunds.png`} /> HOLLUNDS 880</button>
                        <button className="dropdown-item" onClick={() => (setStyle([115, "wepHU", "HURTSALL 2K", "hurtsall"]))}><img src={`img/weapon/${color[1]}/hurtsall.png`} /> HURTSALL 2K</button>
                        <button className="dropdown-item" onClick={() => (setStyle([116, "wepK", "K-121", "k121"]))}><img src={`img/weapon/${color[1]}/k121.png`} /> K-121</button>
                        <button className="dropdown-item" onClick={() => (setStyle([117, "wepC", "KEK-10", "kek"]))}><img src={`img/weapon/${color[1]}/kek.png`} /> KEK-10</button>
                        <button className="dropdown-item" onClick={() => (setStyle([118, "wepM", "M4A1", "m4a1"]))}><img src={`img/weapon/${color[1]}/m4a1.png`} /> M4A1</button>
                        <button className="dropdown-item" onClick={() => (setStyle([119, "wep4", "M9", "m9"]))}><img src={`img/weapon/${color[1]}/m9.png`} /> M9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([120, "wepMA", "MK46", "mk46"]))}><img src={`img/weapon/${color[1]}/mk46.png`} /> MK46</button>
                        <button className="dropdown-item" onClick={() => (setStyle([121, "wepMO", "MOA SNPR-1", "moa"]))}><img src={`img/weapon/${color[1]}/moa.png`} /> MOA SNPR-1</button>
                        <button className="dropdown-item" onClick={() => (setStyle([122, "wep1", "MP400", "mp400"]))}><img src={`img/weapon/${color[1]}/mp400.png`} /> MP400</button>
                        <button className="dropdown-item" onClick={() => (setStyle([123, "wepP", "PDP-70", "pdp"]))}><img src={`img/weapon/${color[1]}/pdp.png`} /> PDP-70</button>
                        <button className="dropdown-item" onClick={() => (setStyle([124, "wepR", "REMBURG-7", "remburg"]))}><img src={`img/weapon/${color[1]}/remburg.png`} /> REMBURG-7</button>
                        <button className="dropdown-item" onClick={() => (setStyle([125, "wep4r", "RYBURN", "ryburn"]))}><img src={`img/weapon/${color[1]}/ryburn.png`} /> RYBURN</button>
                        <button className="dropdown-item" onClick={() => (setStyle([126, "wep8", "SELBSTADT .40", "selbstadt"]))}><img src={`img/weapon/${color[1]}/selbstadt.png`} /> SELBSTADT .40</button>
                        <button className="dropdown-item" onClick={() => (setStyle([127, "wepSH", "SHAR-C", "shar"]))}><img src={`img/weapon/${color[1]}/shar.png`} /> SHAR-C</button>
                        <button className="dropdown-item" onClick={() => (setStyle([128, "wep6", "SIMEON .357", "simeon"]))}><img src={`img/weapon/${color[1]}/simeon.png`} /> SIMEON .357</button>
                        <button className="dropdown-item" onClick={() => (setStyle([129, "wepSM", "SMG-9", "smg"]))}><img src={`img/weapon/${color[1]}/smg.png`} /> SMG-9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([130, "wep9", "SMJÜTH & WHETSMAN .40", "sw"]))}><img src={`img/weapon/${color[1]}/sw.png`} /> SMJÜTH & WHETSMAN .40</button>
                        <button className="dropdown-item" onClick={() => (setStyle([131, "wepS", "STARK AR", "stark"]))}><img src={`img/weapon/${color[1]}/stark.png`} /> STARK AR</button>
                        <button className="dropdown-item" onClick={() => (setStyle([132, "wepT", "TIMIK-47", "timik"]))}><img src={`img/weapon/${color[1]}/timik.png`} /> TIMIK-47</button>
                        <button className="dropdown-item" onClick={() => (setStyle([133, "wep2", "TØLEN MP", "tolen"]))}><img src={`img/weapon/${color[1]}/tolen.png`} /> TØLEN MP</button>
                        <button className="dropdown-item" onClick={() => (setStyle([142, "wep4s", "SILENCED M9", "m9s"]))}><img src={`img/weapon/${color[1]}/m9s.png`} /> SILENCED M9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([143, "wep1s", "SILENCED MP400", "mp400s"]))}><img src={`img/weapon/${color[1]}/mp400s.png`} /> SILENCED MP400</button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={() => (setStyle([134, "melee1", "BECKHILL COMBAT KNIFE", "beckhill"]))}><img src={`img/weapon/${color[1]}/beckhill.png`} /> BECKHILL COMBAT KNIFE</button>
                        <button className="dropdown-item" onClick={() => (setStyle([135, "melee2", "STILNOTTO STILETTO", "stiletto"]))}><img src={`img/weapon/${color[1]}/stiletto.png`} /> STILNOTTO STILETTO</button>
                        <button className="dropdown-item" onClick={() => (setStyle([136, "melee3", "CRICKET BAT", "bat"]))}><img src={`img/weapon/${color[1]}/bat.png`} /> CRICKET BAT</button>
                        <button className="dropdown-item" onClick={() => (setStyle([137, "melee4", "KATANA", "katana"]))}><img src={`img/weapon/${color[1]}/katana.png`} /> KATANA</button>
                        <button className="dropdown-item" onClick={() => (setStyle([138, "melee5", "KUKRI", "kukri"]))}><img src={`img/weapon/${color[1]}/kukri.png`} /> KUKRI</button>
                        <button className="dropdown-item" onClick={() => (setStyle([139, "melee6a", "TACTICAL BATTLE AXE", "tomahawk"]))}><img src={`img/weapon/${color[1]}/tomahawk.png`} /> TACTICAL BATTLE AXE</button>
                        <button className="dropdown-item" onClick={() => (setStyle([140, "melee6b", "BATONS", "batons"]))}><img src={`img/weapon/${color[1]}/batons.png`} /> BATONS</button>
                        <button className="dropdown-item" onClick={() => (setStyle([141, "melee7", "ULU", "ulu"]))}><img src={`img/weapon/${color[1]}/ulu.png`} /> ULU</button>
                    </div>
                </div>

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

            <div className={`m-auto w-75 bg-${color[0]} text-${color[1]} rounded, shadow mt-4 justify-content-center`}>
                <h2 className="text-center pt-4"><img src={style[0] >= 200 && style[0] <= 223 ? `img/merc/${style[3]}.png` : style[0] >= 100 && style[0] <= 143 ? `img/weapon/${color[1]}/${style[3]}.png` : `img/collection/${style[3]}.png`} className="mb-2" /> { style[2] }</h2>
                <div className={`ms-5 d-${style[4] == "hqm" ? "block" : "none"}`}>
                    <b>HQM: </b>
                    <div className="btn-group">
                        <button className={`rounded-start btn btn${hqm[0] == "true" ? hqm[1] : hqm[2]}-success border-2`} onClick={() => (setHqm(["true", "", "-outline"]), style[1] == "lfragment" ? setStyle([4, "fragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "lpirin" ? setStyle([3, "pirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "lxmas15" ? setStyle([3, "xmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "lbetav" ? setStyle([303, "betav", "BetaVeteran", "betav", "hqm"]) : "")}>ON</button>
                        <button className={`rounded-end btn btn${hqm[0] == "true" ? hqm[2] : hqm[1]}-danger border-2`} onClick={() => (setHqm(["false", "", "-outline"]), style[1] == "fragment" ? setStyle([4, "lfragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "pirin" ? setStyle([3, "lpirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "xmas15" ? setStyle([3, "lxmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "betav" ? setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"]) : "")}>OFF</button>
                    </div>
                </div>

                <div className={style[0] >= 200 && style[0] <= 223 || style[0] > 311 ? `p-5 w-100` : `p-5 row row-cols-${grid[0]}`}>
                    {renderWepImgs(style[0], style[1], style[2])}
                </div>
                <button onClick={() => exp == "none" ? setExp("block") : setExp("none")} className={exp == "none" ? `border-0 bg-${color[0]}` : `border-2 bg-${color[0]} border-${color[1]} text-${color[1]}`}>{exp == "none" ? "" : "EXP ON"}</button>
            </div>
            
            <button className={`btn border-2 border-${color[1]} btn-${color[0]} position-fixed bottom-0 end-0 m-3`} onClick={() => window.scrollTo(0, 0)}><i className="bi bi-arrow-bar-up" /></button>

            <Footer />


        </div>
    );
}

export default XPCGallery;