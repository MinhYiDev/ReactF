import { useEffect } from "react";

function CommingSoon() {
    useEffect(() => {
        document.title = "CommingSoon";
    }, []);
    return <div></div>;
}

export default CommingSoon;
