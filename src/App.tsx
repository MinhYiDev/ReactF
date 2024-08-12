import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/net" element={"Net"} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
