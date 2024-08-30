import { NavLink, Outlet } from "react-router-dom";
import "./index.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IContent {
    content: string;
    path: string;
}

function Navigation(): JSX.Element {
    const { isSuccess: isLogin }: { isSuccess: boolean; name: string } =
        useSelector((state: RootState) => state.auth);

    const navC: IContent[] = [
        { content: "Trang Chủ", path: "/" },
        { content: "Thêm Net", path: "/post/net" },
        { content: "Cập Nhật", path: "/update/net" },
        { content: "Comming Soon", path: "/comming" },
    ];

    const baseNav: IContent[] = isLogin
        ? navC
        : [...navC, { content: "Login", path: "/login" }];

    return (
        <div className="container">
            <div className="flex justify-center text-4xl flex-wrap">
                {baseNav.map((item, index) => (
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
        </div>
    );
}

export default Navigation;
