import { useUser } from "./UseContexts";

function RoutesNav() {

    const { User } = useUser();

    const Paths = [
        { Direction: "/", Icon: "H" },
        { Direction: "/map", Icon: "M" },
        { Direction: "/publish", Icon: "PU" },
        { Direction: "/reels", Icon: "R" },
        { Direction: "/profile", Icon: User.ProfileImg ? User.ProfileImg : "P" },
    ];

    return Paths;
}

export default RoutesNav;
