import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./index.scss";
import moment from "moment-timezone";
import axios from "axios";
import Skeleton from "../Skeleton";
import CONST_GLOBAL from "../types";
import Online from "../Online/Online";
import Offline from "../Offline/Offline";

interface IDataNet {
    _id: string;
    netId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
}

function Net() {
    const [result, setResult] = useState<IDataNet[]>([]);
    const [time, setTime] = useState<string>();
    const [copy, setCopy] = useState<boolean>(false);
    const [online, setOnline] = useState<boolean>(true);
    const contentCoppy: MutableRefObject<HTMLDivElement | null> =
        useRef<HTMLDivElement>(null);

    const handllerCopy = async () => {
        if ("clipboard" in navigator) {
            navigator.clipboard.writeText(
                result
                    .map((item) => {
                        return `${item.content}\n\n`;
                    })
                    .join("")
            );
            setCopy(true);
        }

        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };

    const changeStatus = () => {
        if (navigator.onLine) {
            setOnline(true);
        } else {
            setOnline(false);
        }
    };

    useEffect(() => {
        window.addEventListener("online", changeStatus);
        window.addEventListener("offline", changeStatus);
    }, []);

    useEffect(() => {
        document.title = "Trang Chủ";
    }, []);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(CONST_GLOBAL.url_net);
            setResult(res.data?.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (result[0]) {
            const updatedAt = result[0].updatedAt;
            const formattedTime = moment
                .tz(updatedAt, "Asia/Ho_Chi_Minh")
                .format("DD/MM/YYYY HH:mm:ss");
            setTime(formattedTime);
        }
    }, [result]);

    return result.length > 0 ? (
        <div className="container container__net">
            <div className="title__net_lb">
                {online ? <Online /> : <Offline />}
                <div className="wrap__title">
                    <div className="text-5xl pt-4">🤗Cập Nhật: {time}</div>
                    {/* <div className="text-4xl">By P_SANG😊</div> */}
                </div>
            </div>

            <div className="box__paragraph flex justify-center items-center flex-col w-[100%]">
                <div className="mt-4 flex justify-end items-center mr-[6rem]">
                    <div
                        onClick={() => handllerCopy()}
                        className="box_left flex flex-1 justify-end items-center cursor-pointer relative"
                    >
                        <button className="bg-slate-500 flex justify-end items-center rounded-lg p-2 text-[#fff]">
                            {copy ? `✅Copied` : "Copy"}
                        </button>
                        {copy == false && (
                            <div className="ml-1 w-8 h-10">
                                <svg
                                    aria-hidden="false"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="copy"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    color="red"
                                >
                                    <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                <div ref={contentCoppy} className="wrap__box_paragraph p-10 ">
                    {result.map((item, id) => (
                        <p key={id}>{item.content}</p>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <Skeleton />
    );
}

export default Net;
