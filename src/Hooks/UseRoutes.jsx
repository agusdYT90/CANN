import Session from "../Pages/Session.jsx";
import Home from "../Pages/Home.jsx";
import Map from "../Pages/Map.jsx";
import Profile from "../Pages/Profile.jsx";
import Publish from "../Pages/Publish.jsx";
import Reels from "../Pages/Reels.jsx";
import Config from "../Pages/Config.jsx";
import { useUser } from "./UseContexts.jsx";
import { Navigate } from "react-router-dom";

function Routes() {

    const { User } = useUser();
    const Paths = [];

    Paths.push({ Direction: "*", Content: <Navigate to="/" /> });
    Paths.push({ Direction: "/session", Content: <Session /> });

    if (User.Email === "") {
        Paths.push({ Direction: "/", Content: <Navigate to="/session" /> });
        Paths.push({ Direction: "/map", Content: <Navigate to="/session" /> });
        Paths.push({ Direction: "/profile", Content: <Navigate to="/session" /> });
        Paths.push({ Direction: "/publish", Content: <Navigate to="/session" /> });
        Paths.push({ Direction: "/reels", Content: <Navigate to="/session" /> });
        Paths.push({ Direction: "/config", Content: <Navigate to="/session" /> });
    }

    else {
        Paths.push({ Direction: "/", Content: <Home /> });
        Paths.push({ Direction: "/map", Content: <Map /> });
        Paths.push({ Direction: "/profile", Content: <Profile /> });
        Paths.push({ Direction: "/publish", Content: <Publish /> });
        Paths.push({ Direction: "/reels", Content: <Reels /> });
        Paths.push({ Direction: "/config", Content: <Config /> });
    }

    return Paths;
}

export default Routes;
