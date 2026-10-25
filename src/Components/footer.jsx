import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
        <div className={`${ isMobileDevice ? "" : "m-auto w-100"} mt-4 p-3 bg-${isDarkTheme ? "dark" : "light"} text-${isDarkTheme ? "light" : "dark"} rounded shadow`}>
            <p>Dirty Bomb Stuff (DBStuff) - A fan-made project that's not affiliated with Dirty Bomb nor it's creators.</p>
            {/*<p>You can find me on:
                <ul>
                    <li><a href="https://discord.gg/dirtybomb" target="_blank" className={`text-${isDarkTheme ? "light" : "dark"}`}>Official Dirty Bomb Discrod Server</a></li>
                    <li><a href="https://discord.gg/vrRwNRzytM" target="_blank" className={`text-${isDarkTheme ? "light" : "dark"}`}>DBS Project Discord Server</a></li>
                </ul>
            </p>*/}
        </div>
    )
}
export default Footer;