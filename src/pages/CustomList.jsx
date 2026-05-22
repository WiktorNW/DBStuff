import { Link } from 'react-router-dom';
import Footer from './../Components/footer';
import { useState } from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function CustomList() {
    let isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var noImg = "img/noimg.png";
    var [grid, setGrid] = useState([3, 6]);

    return (
        <div className="pt-4">

            <h1 className={`m-auto w-75 p-4 bg-light rounded shadow text-center`}>Custom List</h1>

            <div className="mt-4 p-3 navbar sticky-top bg-light m-auto w-75 rounded p-2 shadow m-auto justify-content-center">

                <h2>Add image</h2>

                <div className="input-group justify-content-center align-items-center">

                    {/* Weapon */}

                    Weapon:
                    <select className="me-4 rounded border-2 border-dark">
                        <option>AHNUHLD-12</option>
                        <option>AREVAROV 9</option>
                        <option>BLISHLOK</option>
                        <option>BR-16</option>
                        <option>CAULDEN</option>
                        <option>CROTZNI</option>
                        <option>DE .50</option>
                        <option>DREISS AR</option>
                        <option> EMPIRE-9</option>
                        <option>FEL-IX</option>
                        <option>GRANDEUR SR</option>
                        <option>HOCHFIR SMG</option>
                        <option>HOIGAT .224</option>
                        <option>HOLLUNDS 880</option>
                        <option>HURTSALL 2K</option>
                        <option>K-121</option>
                        <option>KEK-10</option>
                        <option>M4A1</option>
                        <option>M9</option>
                        <option>MK46</option>
                        <option>MOA SNPR-1</option>
                        <option>MP400</option>
                        <option>PDP-70</option>
                        <option>REMBURG-7</option>
                        <option>RYBURN</option>
                        <option>SELBSTADT .40</option>
                        <option>SHAR-C</option>
                        <option>SIMEON .357</option>
                        <option>SMG-9</option>
                        <option>SMJÜTH & WHETSMAN .40</option>
                        <option>STARK AR</option>
                        <option>TIMIK-47</option>
                        <option>TØLEN MP</option>
                        <option>BECKHILL COMBAT KNIFE</option>
                        <option>STILNOTTO STILETTO</option>
                        <option>CRICKET BAT</option>
                        <option>KATANA</option>
                        <option>KUKRI</option>
                        <option>TACTICAL BATTLE AXE</option>
                        <option>BATONS</option>
                        <option>ULU</option>
                    </select>

                    {/* Collection */}

                    Collection:
                    <select className="me-4">

                    </select>

                    {/* Submit */}

                    <button className="rounded btn border-2 border-dark btn-light">
                        Add image
                    </button>

                </div>

            </div>

            <div>IMG</div>

            <Footer />

        </div>
    );
}

export default CustomList;