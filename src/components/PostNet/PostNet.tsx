import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

function PostNet(): JSX.Element {
    const isLogin: boolean = useSelector(
        (state: RootState) => state.auth.isSuccess
    );
    const [id, setId] = useState<string>();
    const [content, setContent] = useState<string>();
    const [showAlert, setShowAlert] = useState<string>();

    const data: { netId: string | number; content: string } = {
        netId: id as string,
        content: content as string,
    };

    const handlleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLogin) {
            const res = await axios.post(
                "https://api.psang.click/v1/api/net/net",
                data
            );

            console.log(res);

            setId("");
            setContent("");
        } else {
            setShowAlert("Bạn Vui Lòng Đăng Nhập Để Thêm Mới!!!!");
        }
    };

    useEffect(() => {
        document.title = "Thêm Net";
    }, []);
    return (
        <div className="container">
            <h1 className="text-5xl font-bold">Thêm Net</h1>
            <div className="border-2 p-10 mt-12 rounded-sm">
                <form className="" onSubmit={(e) => handlleSubmit(e)}>
                    <div className="">
                        <label htmlFor="id">ID</label>
                        <input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="border ml-4 border-red-300"
                            type="number"
                        />
                    </div>
                    <div className="mt-10 text-3xl flex flex-col gap-x-3">
                        <label htmlFor="content" className="mb-5">
                            Nội Dung
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            id="content"
                            className="border border-red-400"
                        />
                    </div>

                    <button className="bg-red-400 mt-10 p-5 border rounded-lg text-white hover:text-blue-800">
                        Thêm
                    </button>
                </form>

                {showAlert ? (
                    <div>
                        <span>{showAlert} </span>
                        <Link
                            to={"/login"}
                            className="flex text-blue-800 font-bold underline text-4xl"
                        >
                            Login
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default PostNet;
