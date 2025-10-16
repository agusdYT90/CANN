import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../Hooks/UseScroll.jsx";
import useRoutes from "../Hooks/UseRoutes.jsx";
import LayoutMain from "../Layouts/LayoutMain.jsx"

function RoutesMain() {
    const Paths = useRoutes();

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<LayoutMain />}>
                    {Paths.map(({ Direction, Content }) => (
                        <Route key={Direction} path={Direction} element={Content} />
                    ))}
                </Route>
            </Routes>
        </Router>
    )
}

export default RoutesMain;
