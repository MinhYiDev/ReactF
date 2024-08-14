import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";
import UpdateNet from "./components/UpdateNet";
import ProtectRoutes from "./components/ProtectRoutes";

function App() {
    const isLogin: boolean = false;

    return (
        <Routes>
            <Route path="/" element={<Net />} />
            <Route
                path="/update/net"
                element={
                    <ProtectRoutes isLogin={isLogin}>
                        <UpdateNet />
                    </ProtectRoutes>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
