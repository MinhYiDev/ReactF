import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

    const handleKeyDown = (e: KeyboardEvent) => {
        const formElement: HTMLFormElement | null =
            document.querySelector("form");

        if (e.ctrlKey && e.key === "Enter") {
            if (formElement) {
                const submitEvent: Event = new Event("submit", {
                    bubbles: true,
                    cancelable: true,
                });
                formElement.dispatchEvent(submitEvent);
            }
            // handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <h1 className="text-5xl text-center mt-4 font-bold">
                    UPDATE NET
                </h1>
                <Link className="hover:underline hover:font-bold" to={"/"}>
                    return HOME
                </Link>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <section>
                    <div>
                        <label className="text-5xl" htmlFor="id">
                            ID:
                        </label>
                        <input
                            onChange={(e) => setId(e.target.value)}
                            id="id"
                            value={id}
                            className="bg-gray-500 text-white ml-3"
                            type="number"
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
