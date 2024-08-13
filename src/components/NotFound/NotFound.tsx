"use strict";
import clsx from "clsx";
import "./index.scss";
import styles from "./NotFound.module.scss";
import { RefObject, useRef, useState } from "react";

function NotFound() {
    const copyEle: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState<boolean>(false);
    // const [copyText, setCopyText] = useState<string>();

    const handllerCoppy = async () => {
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(
                copyEle.current?.textContent as string
            );
            setCopied(true);
        }
    };

    setTimeout(() => {
        setCopied(false);
    }, 4000);

    return (
        <div className="flex sm: justify-center items-center flex-col h-[100vh]">
            <section className="wrap__break_mobile flex">
                <div ref={copyEle} className="bg-slate-500">
                    <button
                        onClick={handllerCoppy}
                        className="relative left-[100%] hover:bg-red-500"
                    >
                        {copied ? "✅ Copied" : "Copy"}
                    </button>
                    <div className={clsx(styles.div)}>404</div>
                    <div className="text-5xl font-bold">NotFound</div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
