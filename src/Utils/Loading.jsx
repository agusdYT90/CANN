import { useEffect, useState } from "react";
import "../Styles/App/Loading.css";

const Loading = ({ children, Condicion, Completo, Texto, Duracion = 500 }) => {
    const [mostrarContenido, setMostrarContenido] = useState(false);

    useEffect(() => {
        let timer;

        if (Condicion) {
            setMostrarContenido(false);
        } else {
            timer = setTimeout(() => {
                setMostrarContenido(true);
            }, Duracion);
        }

        return () => clearTimeout(timer);
    }, [Condicion, Duracion]);

    if (!mostrarContenido) {
        return (
            <div className={`loading-container ${Completo ? "Complet" : "Line"}`}>
                <div className="loading-spinner" />
                {Texto && <span className="loading-Texto">{Texto}</span>}
            </div>
        );
    }

    return children;
};

export default Loading;
