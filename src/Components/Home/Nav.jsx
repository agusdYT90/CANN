import { Link } from "react-router-dom";
import { UpScroll } from "../../Hooks/UseScroll";
import RutesNav from "../../Hooks/UseRoutesNav";

function Nav() {

    const Paths = RutesNav();

    return (
        <nav>
            <ul>
                {Paths.map(({ Direction, Icon }) => (
                    <li key={Direction}>
                        <Link to={Direction} onClick={UpScroll}>{Icon}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;