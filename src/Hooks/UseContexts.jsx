import { useContext } from "react";
import { UserContext } from "../Contexts/Contexts";

export const useUser = () => useContext(UserContext);