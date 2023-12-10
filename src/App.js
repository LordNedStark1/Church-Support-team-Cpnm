
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Tract from './pages/Tract/Tract';
import YearStory from './pages/yearStory/YearStory';
import BibleStory from './pages/bibleStories/BibleStory';
import AboutJesus from './pages/about-Jesus/AboutJesus';


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/tract' element={<Tract/>}/>
            <Route path='/year-story' element={<YearStory/>}/>
            <Route path='/bible-story' element={<BibleStory/>}/>
                  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
