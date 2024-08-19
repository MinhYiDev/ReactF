import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";
import UpdateNet from "./components/UpdateNet";
import ProtectRoutes from "./components/ProtectRoutes";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";
import OneDrive from "./components/OneDrive";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Net />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onedrive" element={<OneDrive />} />
            <Route
                path="/update/net"
                element={
                    <ProtectRoutes>
                        <UpdateNet />
                    </ProtectRoutes>
                }
            />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
