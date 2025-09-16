import { Route, Routes } from "react-router-dom";
import { PATH } from "../paths.ts";
import { StartPage } from "./pages/StartPage.tsx";
import { FormPage } from "./pages/FormPage.tsx";

export default function App() {
    return (
        <Routes>
            <Route path={PATH.start} element={<StartPage />} />
            <Route path={PATH.form} element={<FormPage />} />
        </Routes>
    )
}
