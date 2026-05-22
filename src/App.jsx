import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './pages/Gallery';
import XGallery from './pages/XGallery';
import Main from './pages/Main';
import GAbout from './pages/GAbout';
import Changelog from './pages/Changelog';
import CustomList from './pages/CustomList';
import Suits from './pages/Suits';
import AllLinks from './pages/AllLinks';

function App() {
    return (
                    <Router>
                        <Routes>
                            <Route path="/" element={ <Main/> } />
                            <Route path="/Gallery" element={<Gallery />} />
                            <Route path="/XGallery" element={<XGallery />} />
                            <Route path="/GAbout" element={<GAbout />} />
                            <Route path="/Changelog" element={<Changelog />} />
                            <Route path='/CustomList' element={<CustomList />} />
                            <Route path='/Suits' element={<Suits />} />
                            <Route path='/AllLinks' element={<AllLinks />} />
                        </Routes>
                    </Router>
  );
}

export default App;
