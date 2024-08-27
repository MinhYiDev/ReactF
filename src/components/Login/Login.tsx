import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
import CONST_GLOBAL from "../types";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import {
    getInfoFailue,
    getInfoStart,
    getInfoSucess,
} from "../../redux/auth.redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IconEyeClose, IconEyeOpen } from "../Icon";
import { useKeySubmit } from "../customHooks";

function Login(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: { email: string; password: string } = {
            email,
            password,
        };

        const res = await axios.post(`${CONST_GLOBAL.url_shop}/login`, data, {
            headers: {
                "x-api-key": CONST_GLOBAL.x_api_key,
                "x-pre-key": CONST_GLOBAL.x_pre_key,
            },
        });

        dispatch(getInfoStart());
        try {
            dispatch(getInfoSucess(res.data.metaData.data));
            navigate("/");
        } catch (err) {
            console.log(err);
            dispatch(getInfoFailue());
        }
    };

    useKeySubmit();

    return (
        <div className="login__wrapper container mt-4">
            <section className="border-2 mx-auto p-4  border-solid  bg-[#ffffff] w-[80%] h-[500px]">
                <h1 className="text-5xl text-center mt-4 login__abx">
                    Đăng Nhập
                </h1>
                <form autoComplete="false" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mt-12">
                        <label
                            className="text-3xl md:text-5xl font-bold uppercase"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4  h-20 border-2"
                            id="email"
                            type="email"
                            placeholder="Vui lòng nhập email ..."
                        />
                    </div>

                    <div className="mt-10">
                        <label
                            className="text-3xl md:text-5xl font-medium uppercase ml-auto"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative max-w-lg w-[100%]">
                            <input
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-2 px-4"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="*******"
                            />
                            {!showPassword ? (
                                <IconEyeClose
                                    onClick={() => setShowPassword(true)}
                                    className="absolute translate-y-[20%] translate-x-[-24.3px]"
                                />
                            ) : (
                                <IconEyeOpen
                                    onClick={() => setShowPassword(false)}
                                    className="absolute translate-y-[50%] translate-x-[-24.3px]"
                                />
                            )}
                        </div>
                    </div>

                    <button className="p-4 bg-slate-500 border-1 rounded-md mt-4">
                        Đăng Nhập
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Login;
