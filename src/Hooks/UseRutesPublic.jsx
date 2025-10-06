import Home from "../Pages/Home.jsx";
import Session from "../Pages/Session.jsx";

export default function RoutesPublic() {

    const Rutas = [];

    Rutas.push({ Direccion: "/", Elemento: <Home/> });
    Rutas.push({ Direccion: "/session", Elemento: <Session/> });

    return Rutas;
}