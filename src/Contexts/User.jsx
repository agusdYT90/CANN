import { UserContext } from "./Contexts";
import { useState, useEffect, useCallback, useMemo } from "react";

export const UserProvider = ({ children }) => {
    const ResetUser = useMemo(() => ({
        User: "",
        Email: "",
        ProfileImg: null,
        Province: null,
    }), []);

    const [User, setUser] = useState(() => {
        const stored = localStorage.getItem("User");
        return stored ? JSON.parse(stored) : ResetUser;
    });

    useEffect(() => {
        if (User.Email) {
            localStorage.setItem("User", JSON.stringify(User));
        } else {
            localStorage.removeItem("User");
        }
    }, [User]);

    const AuthenticateUser = setUser;

    const LogOut = useCallback(() => {
        setUser(ResetUser);
    }, [ResetUser]);

    const DeleteAccount = useCallback(() => {
        if (!User.Email?.trim()) return;
        const Users = JSON.parse(localStorage.getItem("Users") || "[]");
        const DeleteUser = Users.filter(x => x.Email !== User.Email);
        localStorage.setItem("Users", JSON.stringify(DeleteUser));
        LogOut();
    }, [User.Email, LogOut]);


    return (
        <UserContext.Provider value={{ User, AuthenticateUser, LogOut, DeleteAccount }}>
            {children}
        </UserContext.Provider>
    );
};
