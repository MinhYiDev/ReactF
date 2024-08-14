import clsx from "clsx";
import styles from "./updateNet.module.css";
import { FormEvent, useState } from "react";
import axios from "axios";

function UpdateNet() {
    const [id, setId] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.put(`https://api.psang.click/v1/api/net/net/${id}`, {
            content: content,
        });
        setId("");
        setContent("");
    };

    return (
        <div className={clsx("container", styles.container__update)}>
            <h1 className="text-5xl text-center mt-4 font-bold">UPDATE NET</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <section className={clsx(styles.wrapper__net)}>
                    <div>
                        <label className="text-5xl" htmlFor="id">
                            ID:
                        </label>
                        <input
                            onChange={(e) => setId(e.target.value)}
                            id="id"
                            value={id}
                            className="bg-gray-500 text-white ml-3"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="content">Content :</label>
                        <textarea
                            onChange={(e) => setContent(e.target.value)}
                            id="content"
                            rows={20}
                            cols={100}
                            value={content as string}
                            className="bg-slate-500 text-white"
                            placeholder="Nội dung là : \\\\"
                        ></textarea>
                    </div>
                </section>

                <button className="bg-gray-400 text-5xl mt-4">UPDATE</button>
            </form>
        </div>
    );
}

export default UpdateNet;
