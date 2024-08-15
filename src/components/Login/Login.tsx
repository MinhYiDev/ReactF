import { NavLink, Outlet } from "react-router-dom";

function Login() {
    return (
        <div>
            Login
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
                Messages
            </NavLink>
            <Outlet />
        </div>
    );
}

export default Login;
