import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";
import UpdateNet from "./components/UpdateNet";
import ProtectRoutes from "./components/ProtectRoutes";
import Login from "./components/Login/Login";
import Page1 from "./components/TestOutlet/Page1";
import Page2 from "./components/TestOutlet/Page2";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Net />} />
            <Route path="/login" element={<Login />}>
                <Route path="test1" element={<Page1 />} />
                <Route path="test2" element={<Page2 />} />
            </Route>
            <Route
                path="/update/net"
                element={
                    <ProtectRoutes>
                        <UpdateNet />
                    </ProtectRoutes>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
