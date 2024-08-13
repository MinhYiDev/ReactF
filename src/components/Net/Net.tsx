import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./index.scss";
import axios from "axios";

interface IDataNet {
    _id: string;
    netId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
}

function Net() {
    const [result, setResult] = useState<IDataNet[]>([]);
    const [copy, setCopy] = useState<boolean>(false);
    const contentCoppy: MutableRefObject<HTMLDivElement | null> =
        useRef<HTMLDivElement>(null);

    const handllerCopy = async () => {
        if ("clipboard" in navigator) {
            navigator.clipboard.writeText(
                result
                    .map((item) => {
                        return `${item.content} \n`;
                    })
                    .join(" ")
            );
            setCopy(true);
        }

        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://api.psang.click/v1/api/net");
            setResult(res.data?.data);
        }
        fetchData();
    }, []);

    return (
        <div className="container mt-4 container__net">
            <div className="title__net_lb">
                <div className="wrap__title">
                    <div className="text-5xl">Thời Gian Cập Nhật</div>
                    <div className="text-4xl">By P_SANG 😁</div>
                </div>
            </div>

            <div className="box__paragraph">
                <div className="mt-4 flex justify-end mr-[6rem] p-4">
                    <div
                        onClick={() => handllerCopy()}
                        className="flex cursor-pointer"
                    >
                        <button className="bg-slate-500 rounded-lg p-2 text-[#fff]">
                            {copy ? "✅ Copied" : "Copy"}
                        </button>
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
                    </div>
                </div>
                <div ref={contentCoppy} className="wrap__box_paragraph mt-4">
                    {result.map((item, id) => (
                        <p key={id}>{item.content}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Net;
