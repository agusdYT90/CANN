import { useState } from "react";
import Select from 'react-select';
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";
import { Provinces, Profiles } from "../../Utils/Data"
import RegisterImage from "../../Utils/RegisterImage";

function Register() {
    const { AuthenticateUser } = useUser();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Province, setProvince] = useState(null);
    const [ProfileImg, setProfileImg] = useState(" ");
    const [ViewPassword, setViewPassword] = useState(false);
    const [ViewImg, setViewImg] = useState(false);

    const handleSubmit = (x) => {
        x.preventDefault();

        const Users = JSON.parse(localStorage.getItem("Users") || "[]");

        if (Users.find(x => x.Email === Email)) {
            alert("An account with that email already exists.");
            return;
        }

        const NewUser = {
            User: Name,
            Email: Email,
            ProfileImg: ProfileImg,
            Province: Province.value,
            Password: Password
        };

        Users.push(NewUser);
        localStorage.setItem("Users", JSON.stringify(Users));
        const { Password: _, ...UserPassword } = NewUser;
        AuthenticateUser({ ...UserPassword });
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Register</h2>

                    <label htmlFor="NameR">Name:</label>
                    <div translate='no'>
                        <input
                            id="NameR"
                            type="text"
                            placeholder="Name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <label htmlFor="EmailR">Email:</label>
                    <div translate='no'>
                        <input
                            id="EmailR"
                            type="email"
                            placeholder="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <label htmlFor="PasswordR">Password:</label>
                    <div translate='no'>
                        <input
                            id="PasswordR"
                            type={ViewPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setViewPassword(!ViewPassword)}
                        >
                            {ViewPassword ? '🙈' : '👁️'}
                        </button>
                    </div>

                    <label htmlFor="ProvinceR">Province:</label>
                    <div translate='no'>
                        <Select
                            options={Provinces}
                            value={Province}
                            onChange={setProvince}
                            placeholder="Province"
                            closeMenuOnSelect
                            inputId="ProvinceR"
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    backgroundColor: '#f0f4f8',
                                    borderColor: state.isFocused ? '#0077ff' : '#ccc',
                                    boxShadow: state.isFocused ? '0 0 0 3px rgba(0, 119, 255, 0.2)' : 'none',
                                    borderRadius: 8,
                                    padding: 4,
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isFocused ? '#e0eaff' : '#fff',
                                    color: '#333',
                                    padding: 10,
                                }),
                                singleValue: (base) => ({
                                    ...base,
                                    color: '#333',
                                })
                            }}
                            required
                        />
                    </div>

                    <button type="button" onClick={() => setViewImg(!ViewImg)}>To continue</button>

                    {ViewImg && <RegisterImage Images={Profiles} selected={setProfileImg} />}

                    <div>
                        <img src={ProfileImg} alt="perfil" />
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Register;
