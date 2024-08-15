import { Outlet } from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            <div>OK</div>

            <Outlet />
        </div>
    );
};

export default Page1;
