import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavbarFixed from './components/NavbarFixed'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <>
    <NavbarFixed/>

        <div className="App-intro">
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>


                    </Routes>
                </div>
     </>
  );
}

export default App;
