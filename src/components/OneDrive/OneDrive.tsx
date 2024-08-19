import axios from "axios";
import { useState } from "react";

function OneDrive() {
    const [url, setUrl] = useState<string>();

    const [test, setTest] = useState<string>();

    const handllerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tranferUrl = url?.split(
            "https://eastus1-mediap.svc.ms/transform/videomanifest"
        ) as string[];

        if (tranferUrl) {
            console.log(tranferUrl[1]);
            const tranferUrl1 = tranferUrl[1];
            setTest(`http://localhost:3055/${tranferUrl1}`);
        }

        const res = await axios.get(test as string);

        console.log(res.data);
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
                                className="border-2 rounded-md outline-none "
                                type="text"
                            />
                        </div>
                        <button className="bg-slate-400 p-4 rounded-md text-white hover:bg-red-400 mt-10">
                            Nhận
                        </button>
                    </form>
                </div>

                <div className="data">
                    <p>{test}</p>
                </div>
            </section>
        </div>
    );
}

export default OneDrive;
