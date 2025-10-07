import { UserContext } from "./Contexts";
import { useState, useEffect } from "react";

export const UserProvider = ({ children }) => {
    const resetUsuario = {
        Estado: false,
        Id: undefined,
        Rol: "User",
        Usuario: undefined,
        Email: undefined,
        Foto: undefined,
        Ubicacion: undefined
    };

    const [Usuario, setUsuario] = useState(resetUsuario);

    useEffect(() => {
        const StorageUser = localStorage.getItem("Usuario");
        if (StorageUser) {
            setUsuario(JSON.parse(StorageUser));
        }
    }, []);

    useEffect(() => {
        if (Usuario.Estado) {
            localStorage.setItem("Usuario", JSON.stringify(Usuario));
        } else {
            localStorage.removeItem("Usuario");
        }
    }, [Usuario]);

    function registrarUsuario(nuevoUsuario) {
        setUsuario(nuevoUsuario);
    }
    
    function IniciarSesion(user) {
        setUsuario(user);
    }

    function CerrarSesion() {
        setUsuario(resetUsuario);
    }

    function EliminarUsuario() {
        setUsuario(resetUsuario);
    }

    return (
        <UserContext.Provider value={{ Usuario, registrarUsuario, IniciarSesion, CerrarSesion, EliminarUsuario }}>
            {children}
        </UserContext.Provider>
    );
};
