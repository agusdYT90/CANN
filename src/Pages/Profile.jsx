import { useUser } from "../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { User, LogOut, DeleteAccount } = useUser();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>User: {User.User}</p>
            <p>Email: {User.Email}</p>
            <p>Profile Image: {User.ProfileImg && <img src={User.ProfileImg} alt="Profile" width={"75px"} />}</p>
            <p>Province: {User.Province}</p>

            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={LogOut}>Log Out</button>
            <button onClick={DeleteAccount}>Delete Account</button>
        </div>
    );
}

export default Profile;
