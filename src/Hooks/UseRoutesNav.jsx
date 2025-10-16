import { useUser } from "./UseContexts";

function RoutesNav() {

    const { User } = useUser();

    const Paths = [
        { Direction: "/", Icon: "Home" },
        /*{ Direction: "/map", Icon: "Map" },
        { Direction: "/publish", Icon: "Publish" },
        { Direction: "/reels", Icon: "Reels" },*/
        { Direction: "/profile", Icon: User.ProfileImg ? <img src={User.ProfileImg} alt="Porfile" width={"75px"}/> : "Profile" },
    ];

    return Paths;
}

export default RoutesNav;
