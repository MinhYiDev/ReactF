import "./index.scss";

function Navbar() {
    return (
        <div className="nav_bar text-3xl flex ">
            <ul>
                <li>HOME</li>
                <li>LOGIN</li>
            </ul>

            <div className="text__box_p flex columns-1"></div>
        </div>
    );
}

export default Navbar;
