import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../Hooks/UseScroll.jsx";
import RoutesPublic from "../Hooks/UseRutes.jsx";

function RoutesMain() {

    const Rutas = RoutesPublic();

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route>
                    {Rutas.map(({ Direccion, Elemento }) => (
                        <Route key={Direccion} path={Direccion} element={Elemento} />
                    ))}
                </Route>
            </Routes>
        </Router >
    );
}

export default RoutesMain;