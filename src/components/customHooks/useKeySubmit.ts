import { useEffect } from "react";

function useKeySubmit(): void {
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

            console.log("OK");
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
}

export default useKeySubmit;
