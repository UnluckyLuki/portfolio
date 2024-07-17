import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import MyProjects from "./routes/MyProjects";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myProjects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}

export default App;
