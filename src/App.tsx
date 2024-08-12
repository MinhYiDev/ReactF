import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    document.title = "Hello world";

    return (
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/net" element={"Net"} />
            <Route path="*" element={"Not Found"} />
        </Routes>
    );
}

export default App;
