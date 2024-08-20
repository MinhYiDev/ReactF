import axios from "axios";
import { useRef, useState } from "react";

function OneDrive() {
    const [url, setUrl] = useState<string>();
    const [test, setTest] = useState<string>();
    const cpRef = useRef<null>(null);

    const handllerCopy = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(test as string);
        }
    };

    const handllerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tranferUrl = url?.split(
            "https://eastus1-mediap.svc.ms/transform/videomanifest"
        ) as string[];

        let tranferUrl1;

        if (tranferUrl) {
            console.log(tranferUrl[1]);
            tranferUrl1 = tranferUrl[1];
            console.log(tranferUrl1);
        }

        const res = await axios.get(
            `http://localhost:3055/onedrive/${tranferUrl1}`
        );

        setTest(res?.data);
    };

    return (
        <div className="mt-4">
            <section className="container">
                <div>
                    <form onSubmit={(e) => handllerSubmit(e)}>
                        <div>
                            <label htmlFor="url">Nhập URL: </label>
                            <input
                                onChange={(e) => setUrl(e.target.value)}
                                className="border-2 rounded-md outline-none focus-within:border-red-500 caret-red-700 pl-2 pr-2 pt-2 pb-1 w-[100%] text-red-300"
                                type="text"
                            />
                        </div>
                        <button className="bg-slate-400 p-4 rounded-md text-white hover:bg-red-400 mt-10 ">
                            Nhận
                        </button>
                    </form>
                </div>

                <div className="coppy ml-auto w-100% flex justify-end ">
                    {test && (
                        <button
                            onClick={(e) => handllerCopy(e)}
                            className="inline-block bg-slate-500 uppercase text-white p-4 rounded-lg hover:bg-red-400 hover:text-[#ccc]"
                        >
                            coppy
                        </button>
                    )}
                </div>

                <div ref={cpRef} className="data mt-10 break-words">
                    <p>{test}</p>
                </div>
            </section>
        </div>
    );
}

export default OneDrive;
