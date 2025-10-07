import { UserProvider } from "./User.jsx";

export const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};
