import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectRoutesProps {
    isLogin?: boolean;
    children: ReactNode;
}

function ProtectRoutes({ children }: ProtectRoutesProps): JSX.Element {
    const isLogin = false;
    return isLogin === false ? <>{children}</> : <Navigate to="/login" />;
}

export default ProtectRoutes;
