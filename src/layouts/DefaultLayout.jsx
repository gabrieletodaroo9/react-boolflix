import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>
                Sono l'header
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                Sono il footer
            </footer>
        </>
    )
}