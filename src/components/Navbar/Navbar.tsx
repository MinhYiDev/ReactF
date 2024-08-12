import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://54.169.142.60/net").then((data) => {
            console.log(data.data);
        });
    }, []);

    return <div className="text-3xl">Navbar</div>;
}

export default Navbar;
