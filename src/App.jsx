
import './App.css'
import Homepage from "./pages/Homepage/homepage.jsx";
import {Route, Routes} from "react-router-dom";
import HikingTrips from "./pages/HikingTrips/HikingTrips.jsx";
import About from "./pages/About/About.jsx";
import Iceland from "./pages/Iceland/Iceland.jsx";
import Upload from "./pages/Upload/Upload.jsx";
import Albania from "./pages/Albania/Albania.jsx";


function App() {


  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/HikingTrips" element={<HikingTrips/>}/>
        <Route path="/Iceland" element={<Iceland/>}/>
        <Route path="/Albania" element={<Albania/>}/>
        <Route path="/Upload" element={<Upload/>}/>

    </Routes>


  )
}

export default App
