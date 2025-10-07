import { Link } from "react-router-dom";
import { UpScroll } from "../../Hooks/UseScroll";
import RutesNav from "../../Hooks/UseRutesNav";

function Nav() {

    const Rutas = RutesNav();

    return (
        <nav className="nav">
            <ul>
                {Rutas.map(({ Direccion, Icono }) => (
                    <li key={Direccion}>
                        <Link to={Direccion} onClick={UpScroll}>{Icono}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;