import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Net />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
