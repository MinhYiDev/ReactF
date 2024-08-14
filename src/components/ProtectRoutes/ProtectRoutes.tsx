import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectRoutesProps {
    isLogin: boolean;
    children: ReactNode;
}

function ProtectRoutes({ isLogin, children }: ProtectRoutesProps): JSX.Element {
    return isLogin ? <>{children}</> : <Navigate to="/login" />;
}

export default ProtectRoutes;
