
export default function RoutesPublic() {

    const Rutas = [];

    Rutas.push({ Direccion: "/", Elemento: <Main /> });
    Rutas.push({ Direccion: "/session", Elemento: <session/> });

    return Rutas;
}