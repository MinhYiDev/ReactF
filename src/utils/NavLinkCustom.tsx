import { NavLink } from "react-router-dom";

// interface IProps {
//     content: string;
//     path: string;
// }

function NavLinkCustom(): JSX.Element {
    return (
        <>
            <NavLink
                to={"/"}
                className={({ isActive }) => {
                    return isActive ? "text-5xl" : "";
                }}
            ></NavLink>
        </>
    );
}

export default NavLinkCustom;
