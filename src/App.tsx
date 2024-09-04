import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Net from "./components/Net";
import UpdateNet from "./components/UpdateNet";
import ProtectRoutes from "./components/ProtectRoutes";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";
import OneDrive from "./components/OneDrive";
import Navigation from "./components/Navigation";
import PostNet from "./components/PostNet";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import { useConsoleLog } from "./components/customHooks";

function App() {
    useConsoleLog();
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
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

                <Route path="/post/net" element={<PostNet />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/comming" element={<CommingSoon />} />
            <Route path="/comming/download/office" element={<CommingSoon />} />
            <Route
                path="/comming/download/phothong"
                element={<CommingSoon />}
            />
        </Routes>
    );
}

export default App;
