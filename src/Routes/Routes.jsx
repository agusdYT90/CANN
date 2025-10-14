import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../Hooks/UseScroll.jsx";
import useRoutes from "../Hooks/UseRoutes.jsx";

function RoutesMain() {
    const Paths = useRoutes();

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {Paths.map(({ Direction, Content }) => (
                    <Route key={Direction} path={Direction} element={Content} />
                ))}
            </Routes>
        </Router>
    );
}

export default RoutesMain;
