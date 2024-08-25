import { NavLink, Outlet } from "react-router-dom";
import "./index.scss";

interface IContent {
    content: string;
    path: string;
}

function Navigation(): JSX.Element {
    const navC: IContent[] = [
        { content: "Trang Chủ", path: "/" },
        { content: "Thêm Net", path: "/post/net" },
        { content: "Cập Nhật", path: "/update/net" },
        { content: "Login", path: "/login" },
    ];
    return (
        <>
            <div className="container mx-auto flex justify-center text-4xl">
                {navC.map((item, index) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "underline text-red-500" : ""
                        }
                        key={index}
                        to={item.path}
                    >
                        <span className="mt-5 mr-4 break_nav">
                            {item.content}
                        </span>
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
