import { useUser } from "../Hooks/UseContexts";

function Profile() {
    const { User, LogOut, DeleteAccount } = useUser();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>User: {User.User}</p>
            <p>Email: {User.Email}</p>
            <p>Password: {String(User.Password)}</p>
            <p>Profile Image: {User.ProfileImg && <img src={User.ProfileImg} alt="Profile" width={100} />}</p>
            <p>Province: {User.Province}</p>

            <button onClick={LogOut}>Log Out</button>
            <button onClick={DeleteAccount}>Delete Account</button>
        </div>
    );
}

export default Profile;
