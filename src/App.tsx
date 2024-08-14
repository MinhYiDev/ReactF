import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";
import UpdateNet from "./components/UpdateNet";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Net />} />
            <Route path="/update/net" element={<UpdateNet />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
