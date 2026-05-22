import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Footer from '../Components/footer';
import List from '../xlists.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function XMOBGallery({color}) {
    console.log(navigator.userAgent);
    var noImg = "img/noimg.png";
    var [ham, setHam] = useState(["none"]);
    var [style, setStyle] = useState([19, "default", "Default", "default"]);
    var [exp, setExp] = useState(["none"]);
    var [hqm, setHqm] = useState(["true", "", "-outline"]);

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
                return List.ListX17.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6">{weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 101:
                return List.wepA.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ahnuhld.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 102:
                return List.wep11.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/arevarov.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 103:
                return List.wepBL.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/blishlok.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 104:
                return List.wepB.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/br.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 105:
                return List.wep7.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/caulden.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 106:
                return List.wepCR.map((skin) => ( 
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/crotzni.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 107:
                return List.wep5.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/de.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 108:
                return List.wepD.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/dreiss.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 109:
                return List.wep3.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/empire.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 110:
                return List.wepF.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/felix.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 111:
                return List.wepG.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/grandeur.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 112:
                return List.wepKE.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hochfir.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 113:
                return List.wep10.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hoigat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 114:
                return List.wepH.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hollunds.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 115:
                return List.wepHU.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/hurtsall.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 116:
                return List.wepK.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/k121.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 117:
                return List.wepC.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/kek.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 118:
                return List.wepM.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m4a1.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 119:
                return List.wep4.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m9.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 120:
                return List.wepMA.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mk46.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 121:
                return List.wepMO.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/moa.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 122:
                return List.wep1.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mp400.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 123:
                return List.wepP.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/pdp.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 124:
                return List.wepR.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/remburg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 125:
                return List.wep4r.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/ryburn.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 126:
                return List.wep8.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/selbstadt.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 127:
                return List.wepSH.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/shar.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 128:
                return List.wep6.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/simeon.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 129:
                return List.wepSM.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/smg.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 130:
                return List.wep9.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/sw.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 131:
                return List.wepS.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/stark.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 132:
                return List.wepT.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/timik.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 133:
                return List.wep2.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/tolen.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 134:
                return List.melee1.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}beckhill.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 135:
                return List.melee2.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}stiletto.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 136:
                return List.melee3.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}bat.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 137:
                return List.melee4.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}katana.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 138:
                return List.melee5.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}kukri.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 139:
                return List.melee6a.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}tomahawk.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 140:
                return List.melee6b.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}batons.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 141:
                return List.melee7.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}ulu.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 142:
                return List.wep4s.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/m9s.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 143:
                return List.wep1s.map((skin) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${skin.rar}.png`} /> {skin.colName}</p>
                        <img src={`img/${skin.fileName}/mp400s.jpg` || noImg} alt={`${skin.alt} ${col}`} onError={(e) => (e.target.src = noImg)} className="img-fluid rounded shadow" />
                    </div>
                ))
            case 301:
                return List.alice.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
                    </div>
                ))
            case 302:
                return List.aquila.map((weapon) => (
                    <div className=" mt-4">
                        <p className="h6"><img src={`img/collection/${weapon.rar}.png`} /> {weapon.wepName}</p>
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
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
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
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
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
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
                        <img src={`img/${colID}/${weapon.fileName}` || noImg} alt={`${col} ${weapon.alt}`} onError={ (e) => (e.target.src = noImg) } className="img-fluid rounded shadow" />
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
        <div className={`p-4 min-vh-100 bg-${color[2]} bg-gradient`}>

            <h1 className={`p-4 bg-${color[0]} text-${color[1]} rounded shadow text-center`}><i>Illegal</i> Weapon Finish Gallery</h1>

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
                        <button className="dropdown-item" onClick={() => (setStyle([3, "alienware", "Alienware", "alienware"]), (setHam("none")))}><img src="img/collection/alienware.png"/> Alienware</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "containment", "Containment", "containment"]), (setHam("none")))}><img src="img/collection/containment.png" /> Containment</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "culprit", "Culprit", "culprit"]), (setHam("none")))}><img src="img/collection/culprit.png" /> Culprit</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "cybereye", "CyberEye", "cybereye"]), (setHam("none")))}><img src="img/collection/cybereye.png" /> CyberEye</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "detective", "Detective", "detective"]), (setHam("none")))}><img src="img/collection/detective.png" /> Detective</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "faction", "Faction", "faction"]), (setHam("none")))}><img src="img/collection/faction.png" /> Faction</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ghostclip", "Ghostclip", "ghostclip"]), (setHam("none")))}><img src="img/collection/ghostclip.png" /> Ghostclip</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? ((setStyle([3, "pirin", "GuardianSpecial", "pirin", "hqm"])), (setHam("none"))) : ((setStyle([3, "lpirin", "GuardianSpecial", "pirin", "hqm"])), (setHam("none"))))}><img src="img/collection/pirin.png" /> GuardianSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "halloween17", "Halloween17", "halloween17"]), (setHam("none")))}><img src="img/collection/halloween17.png" /> Halloween17</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "hexagon", "Hexagon", "hexagon"]), (setHam("none")))}><img src="img/collection/hexagon.png" /> Hexagon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "humble", "Humble", "humble"]), (setHam("none")))}><img src="img/collection/humble.png" /> Humble</button>
                        <button className="dropdown-item" onClick={() => (setStyle([9, "arctic", "HunterSpecial", "arctic"]), (setHam("none")))}><img src="img/collection/arctic.png" /> HunterSpecial</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "javelin", "Javelin", "javelin"]), (setHam("none")))}><img src="img/collection/javelin.png" /> Javelin</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "logitech", "Logitech", "logitech"]), (setHam("none")))}><img src="img/collection/logitech.png" /> Logitech</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked2", "RankedEagle", "ranked2"]), (setHam("none")))}><img src="img/collection/ranked2.png" /> RankedEeagle (Ranked 2)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked4", "ScorchedMetal", "ranked4"]), (setHam("none")))}><img src="img/collection/ranked4.png" /> ScorchedMetal (Ranked 4)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "ranked3", "Shatter", "ranked3"]), (setHam("none")))}><img src="img/collection/ranked3.png" /> Shatter (Ranked 3)</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "suspect", "Suspect", "suspect"]), (setHam("none")))}><img src="img/collection/suspect.png" /> Suspect</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "twitch", "Twitch", "twitch"]), (setHam("none")))}><img src="img/collection/twitch.png" /> Twitch</button>
                        <button className="dropdown-item" onClick={() => ((hqm[0] == "true" ? (setStyle([3, "xmas15", "Xmas2015", "xmas15", "hqm"]), (setHam("none"))) : (setStyle([3, "lxmas15", "Xmas2015", "xmas15", "hqm"])), (setHam("none"))))}><img src="img/collection/xmas15.png" /> Xmas2015</button>
                        <button className="dropdown-item" onClick={() => (setStyle([20, "xmas17", "Xmas2017", "xmas17"]), (setHam("none")))}><img src="img/collection/xmas17.png" /> Xmas2017</button>
                    </div>
                </div>

                { /* Obsidian */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="Obs" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Obsidian
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Obs" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "culpritobsidian", "CulpritObsidian", "culpritobsidian"]), (setHam("none")))}><img src="img/collection/culpritobsidian.png" /> CulpritObsidian</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "founders", "Founders", "founders"]), (setHam("none")))}><img src="img/collection/founders.png" /> Founders</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "nexon", "Nexon", "nexon"]), (setHam("none")))}><img src="img/collection/nexon.png" /> Nexon</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "outforblood", "OutforBlood", "outforblood"]), (setHam("none")))}><img src="img/collection/outforblood.png" /> OutforBlood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "sd", "SplashDamage", "sd"]), (setHam("none")))}><img src="img/collection/sd.png" /> SplashDamage</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "tacticalblack", "TacticalBlack", "obs50"]), (setHam("none")))}><img src="img/collection/obs50.png" /> TacticalBlack</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "turtleneck", "Turtleneck", "obsold"]), (setHam("none")))}><img src="img/collection/obsold.png" /> Turtleneck</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "woodlandphoenix", "WoodlandPhoenix", "obs50"]), (setHam("none")))}><img src="img/collection/obs50.png" /> WoodlandPhoenix</button>
                    </div>
                </div>

                { /* Unreleased */}

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="Unrld" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Unreleased
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="Unrld" style={{ maxHeight: '45vh' }}>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "anodisedgreen", "Anodised_Green", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Anodised_Green</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "anodisedred", "Anodised_Red", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Anodised_Red</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "blunderbuss", "Blunderbuss", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Blunderbuss</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "combatarms", "CombatArms", "ca"]), (setHam("none")))}><img src="img/collection/ca.png" /> CombatArms</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "sefaceit", "FaceIt", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> FaceIt</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "grid", "Grid", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Grid</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "hex", "Hex", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Hex</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "legaliseit", "LegaliseIt", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> LegaliseIt</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matbleachedwood", "Mat_BleachedWood", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_BleachedWood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matdiamonds", "Mat_Diamonds", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_Diamonds</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matgold", "Mat_Gold", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_Gold</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matoldwood", "Mat_OldWood", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_OldWood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "mattoygun", "Mat_Toygun", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_Toygun</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "matwoodstock", "Mat_WoodStock", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mat_WoodStock</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "mudflood", "Mudflood", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Mudflood</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "redtiger", "RedTiger", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> RedTiger</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "resistance", "Resistance", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Resistance</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rfbg", "RoyalForce_Bronze/Gold", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> RoyalForce_Bronze/Gold</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rfs", "RoyalForce_Silver", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> RoyalForce_Silver</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rf12", "RoyalForce_T1/T2", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> RoyalForce_T1/T2</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "rf34", "RoyalForce_T3/T4", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> RoyalForce_T3/T4</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "snakescale", "SnakeScale", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> SnakeScale</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "spraypaint", "SprayPaint", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> SprayPaint</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "starter", "Starter", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Starter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "urbandigital", "UrbanDigital", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> UrbanDigital</button>
                        <button className="dropdown-item" onClick={() => (setStyle([3, "web", "Web", "se"]), (setHam("none")))}><img src="img/collection/se.png" /> Web</button>
                    </div>
                </div>

                { /* Weapon Cards */ }

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-2`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapon Cards
                    </button>

                    <div className={`dropdown-menu dropdown-menu-${color[0]} overflow-auto`} aria-labelledby="wep" style={{maxHeight: '45vh'} }>
                        <button className="dropdown-item" onClick={() => (setStyle([301, "alice", "Alice", "alice"]), (setHam("none")))}><img src="img/collection/alice.png" /> Alice</button>
                        <button className="dropdown-item" onClick={() => (setStyle([302, "aquila", "Aquila", "aquila"]), (setHam("none")))}><img src="img/collection/aquila.png" /> Aquila</button>
                        <button className="dropdown-item" onClick={() => (setStyle([305, "coresec", "CoreSec", "coresec"]), (setHam("none")))}><img src="img/collection/coresec.png" /> CoreSec</button>
                        <button className="dropdown-item" onClick={() => (setStyle([307, "kma", "KMA", "kma"]), (setHam("none")))}><img src="img/collection/kma.png" /> KMA</button>
                        <button className="dropdown-item" onClick={() => (setStyle([310, "royalforce", "RoyalForce", "royalforce"]), (setHam("none")))}><img src="img/collection/royalforce.png" /> RoyalForce</button>
                        <button className="dropdown-item" onClick={() => (hqm[0] == "true" ? ((setStyle([303, "betav", "BetaVeteran", "betav", "hqm"])), (setHam("none"))) : ((setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"])), (setHam("none"))))}><img src="img/collection/betav.png" /> BetaVeteran</button>
                        <button className="dropdown-item" onClick={() => (setStyle([304, "contraband", "Contraband", "contraband"]), (setHam("none")))}><img src="img/collection/contraband.png" /> Contraband</button>
                        <button className="dropdown-item" onClick={() => (setStyle([306, "faceit", "FACEIT", "faceit"]), (setHam("none")))}><img src="img/collection/faceit.png" /> FACEIT</button>
                        <button className="dropdown-item" onClick={() => (setStyle([308, "nuclearwinter", "Nuclear Winter", "nw"]), (setHam("none")))}><img src="img/collection/nw.png" /> Nuclear Winter</button>
                        <button className="dropdown-item" onClick={() => (setStyle([309, "rankedseason4", "Ranked Season 4", "rs4"]), (setHam("none")))}><img src="img/collection/rs4.png" /> Ranked Season 4</button>
                        <button className="dropdown-item" onClick={() => (setStyle([311, "tapir", "Tapir", "tapir"]), (setHam("none")))}><img src="img/collection/tapir.png" /> Tapir</button>
                    </div>
                </div>

                { /* Weapon */ }

                <div className="dropdown">
                    <button className={`btn border-2 border-${color[1]} btn-${color[0]} dropdown-toggle mt-3`} type="button" id="wep" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <button className="dropdown-item" onClick={() => (setStyle([142, "wep4s", "SILENCED M9", "m9s"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/m9s.png`} /> SILENCED M9</button>
                        <button className="dropdown-item" onClick={() => (setStyle([143, "wep1s", "SILENCED MP400", "mp400s"]), (setHam("none")))}><img src={`img/weapon/${color[1]}/mp400s.png`} /> SILENCED MP400</button>
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

                <div className={`mt-2 d-${style[4] == "hqm" ? "block" : "none"}`}>
                    <b>HQM: </b><br />
                    <div className="btn-group">
                        <button className={`rounded-start btn btn${hqm[0] == "true" ? hqm[1] : hqm[2]}-success border-2`} onClick={() => (setHqm(["true", "", "-outline"]), (setHam("none")), style[1] == "lfragment" ? setStyle([4, "fragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "lpirin" ? setStyle([3, "pirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "lxmas15" ? setStyle([3, "xmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "lbetav" ? setStyle([303, "betav", "BetaVeteran", "betav", "hqm"]) : "")}>ON</button>
                        <button className={`rounded-end btn btn${hqm[0] == "true" ? hqm[2] : hqm[1]}-danger border-2`} onClick={() => (setHqm(["false", "", "-outline"]), (setHam("none")), style[1] == "fragment" ? setStyle([4, "lfragment", "Cobalt Fragment", "cobalt", "hqm"]) : style[1] == "pirin" ? setStyle([3, "lpirin", "GuardianSpecial", "pirin", "hqm"]) : style[1] == "xmas15" ? setStyle([3, "lxmas15", "Xmas2015", "xmas15", "hqm"]) : style[1] == "betav" ? setStyle([303, "lbetav", "BetaVeteran", "betav", "hqm"]) : "")}>OFF</button>
                    </div>
                </div>

                </div>
            </div>

            <div className={`bg-${color[0]} rounded shadow mt-4 justify-content-center text-center text-${color[1]}`}>
                <h2 className="text-center pt-4"><img src={style[0] >= 200 && style[0] <= 223 ? `img/merc/${style[3]}.png` : style[0] >= 100 && style[0] <= 143 ? `img/weapon/${color[1]}/${style[3]}.png` : `img/collection/${style[3]}.png`} className="mb-2" /> { style[2] }</h2>
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

export default XMOBGallery;