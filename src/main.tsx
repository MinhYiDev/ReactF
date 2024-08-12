import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css";

createBrowserRouter([
    {
        path: "/",
        element: "Test",
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
