import Session from "../Pages/Session.jsx";
import Home from "../Pages/Home.jsx";
import Map from "../Pages/Map.jsx";
import Profile from "../Pages/Profile.jsx";
import Publish from "../Pages/Publish.jsx";
import Reels from "../Pages/Reels.jsx";
import Config from "../Pages/Config.jsx";
import { useUser } from "./UseContexts.jsx";
import { Navigate } from "react-router-dom";

export default function Routes() {

    const { Usuario } = useUser();
    const Rutas = [];

    Rutas.push({ Direccion: "*", Elemento: <Navigate to="/" /> });
    Rutas.push({ Direccion: "/session", Elemento: <Session/> });

    if (Usuario.Estado === false) {
        Rutas.push({ Direccion: "/", Elemento: <Navigate to="/session" /> });
        Rutas.push({ Direccion: "/map", Elemento: <Navigate to="/session" /> });
        Rutas.push({ Direccion: "/profile", Elemento: <Navigate to="/session" /> });
        Rutas.push({ Direccion: "/publish", Elemento: <Navigate to="/session" /> });
        Rutas.push({ Direccion: "/reels", Elemento: <Navigate to="/session" /> });
        Rutas.push({ Direccion: "/config", Elemento: <Navigate to="/session" /> });
    } 
    
    else {
        Rutas.push({ Direccion: "/", Elemento: <Home/> });
        Rutas.push({ Direccion: "/map", Elemento: <Map/> });
        Rutas.push({ Direccion: "/profile", Elemento: <Profile/> });
        Rutas.push({ Direccion: "/publish", Elemento: <Publish/> });
        Rutas.push({ Direccion: "/reels", Elemento: <Reels/> });
        Rutas.push({ Direccion: "/config", Elemento: <Config/> });
    }

    return Rutas;
}
