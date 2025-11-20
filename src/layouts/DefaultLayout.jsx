import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <main className="bg-first">
                <Outlet />
            </main>
            <footer>
                Sono il footer
            </footer>
        </>
    )
}