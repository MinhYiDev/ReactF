import { Button, DatePicker } from "antd";
import { useEffect, useState } from "react";

function CommingSoon() {
    const [online, setOnline] = useState<boolean>(true);

    useEffect(() => {
        const updateStatus = () => {
            if (navigator.onLine) {
                setOnline(true);
            } else {
                setOnline(false);
            }
        };

        window.addEventListener("online", updateStatus);
        window.addEventListener("offline", updateStatus);

        updateStatus();
    }, []);
    return (
        <div>
            <h1 id="status">{online ? "Online" : "Offline"}</h1>
            <h1>Hello</h1>
            <DatePicker />
            <Button type="primary" loading iconPosition="end">
                Loading
            </Button>
        </div>
    );
}

export default CommingSoon;
