import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import MyProjects from "./routes/MyProjects";
import NavBar from "./componets/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/myProjects" element={<MyProjects/>}/>
            </Routes>
        </div>
    );
}

export default App;
