import { useUser } from "../../Hooks/UseContexts";

const LogOut = () => {
    const { CerrarSesion } = useUser();

    return <button onClick={CerrarSesion}>Log Out</button>;
};

export default LogOut;