import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import MyProjects from "./routes/MyProjects";
import NavBar from "./components/NavBar";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import MatrixBackground from "./components/MatrixBackground";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <NavBar/>
            <MatrixBackground/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/myProjects" element={<MyProjects/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
