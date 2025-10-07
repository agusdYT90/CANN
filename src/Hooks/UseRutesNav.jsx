import { useUser } from "./UseContexts";

export default function RoutesNav() {

    const { Usuario } = useUser();

    const Rutas = [
        { Direccion: "/", Icono: "H" },
        { Direccion: "/map", Icono: "M" },
        { Direccion: "/publish", Icono: "PU" },
        { Direccion: "/reels", Icono: "R" },
        { Direccion: "/profile", Icono: Usuario.Foto ? Usuario.Foto : "P" },
    ];

    return Rutas;
}
