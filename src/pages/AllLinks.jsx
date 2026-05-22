import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';

function AllLinks() {
    document.title = "DBS - All Links";
var color = [];
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDarkTheme ? color = ["dark", "light", "black"] : color = ["light", "dark", "white"];
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    return(
        <div className={`pt-4 bg-${color[2]} bg-gradient min-vh-100`}>

            <h1 className={`m-auto ${isMobileDevice ? "" : "w-75"} p-4 text-${color[1]} bg-${color[0]} rounded shadow text-center`}>DBStuff - All Links</h1>

            <div className={`m-auto ${isMobileDevice ? "" : "w-75"} mt-4 p-4 text-${color[1]} bg-${color[0]} rounded shadow`}>
                    <ul>
                        <li>
                            <p>
                                <Link to="/"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>Main Page <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/AllLinks"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>All Links <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/Gallery"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>Weapon Finish Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/GAbout"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>About Weapon Finish Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/Changelog"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>Weapon Finish Gallery Changelog <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/XGallery"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}><i>Illegal</i> Weapon Finish Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link to="/Suits"><button className={`btn border-2 border-${color[1]} text-${color[1]} btn-${color[0]}}`}>Mercs' Suits Gallery <i className="bi bi-arrow-right"></i></button></Link>
                            </p>
                        </li>
                    </ul>
            </div>

            <Footer />
        </div>
    );
}

export default AllLinks;