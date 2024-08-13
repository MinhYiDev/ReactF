import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import moment from "moment-timezone";

interface IDataNet {
    _id: string;
    netId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
}

function Net() {
    const [result, setResult] = useState<IDataNet[]>([]);
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://api.psang.click/v1/api/net");
            setResult(res.data?.data);
            const _time = moment(result[0]?.updatedAt).format(
                "DD/MM/YYYY HH:mm:ss"
            );
            setTime(_time);
        }
        fetchData();
    }, []);

    return (
        <div className="container__net">
            <div className="title__net_lb">
                <div>
                    <div>
                        Thời Gian Cập Nhật:😊
                        {time}
                    </div>
                    <div>By P_SANG 😁</div>
                </div>
            </div>

            <div className="box_parap">
                {result.map((item, id) => (
                    <p key={id}>{item.content}</p>
                ))}
            </div>
        </div>
    );
}

export default Net;
