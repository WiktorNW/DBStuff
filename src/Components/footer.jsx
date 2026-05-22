import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    var isMobileDevice = /android|iphone|kindle|ipad/i.test(navigator.userAgent);
    var isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
        <div className={`${ isMobileDevice ? "" : "m-auto w-75"} mt-4 bg-${isDarkTheme ? "dark" : "light"} text-${isDarkTheme ? "light" : "dark"} rounded shadow`}>
            <p className="p-3">Dirty Bomb Stuff (DBStuff) - A fan-made project and it's not affiliated with Dirty Bomb and it's creators.</p>
        </div>
    )
}
export default Footer;