import { useState } from "react";
import Select from "react-select";
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";

function Register() {
    const { AuthenticateUser } = useUser();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Province, setProvince] = useState(null);
    /*const [ProfileImg, setProfileImg] = useState(null);*/
    const [ViewPassword, setViewPassword] = useState(false);
    const navigate = useNavigate();

    const option = [
        { value: 'Amazonas', label: 'Amazonas' },
        { value: 'Áncash', label: 'Áncash' },
        { value: 'Apurímac', label: 'Apurímac' },
        { value: 'Arequipa', label: 'Arequipa' },
        { value: 'Ayacucho', label: 'Ayacucho' },
        { value: 'Cajamarca', label: 'Cajamarca' },
        { value: 'Callao', label: 'Callao' },
        { value: 'Cusco', label: 'Cusco' },
        { value: 'Huancavelica', label: 'Huancavelica' },
        { value: 'Huánuco', label: 'Huánuco' },
        { value: 'Ica', label: 'Ica' },
        { value: 'Junín', label: 'Junín' },
        { value: 'La Libertad', label: 'La Libertad' },
        { value: 'Lambayeque', label: 'Lambayeque' },
        { value: 'Lima', label: 'Lima' },
        { value: 'Loreto', label: 'Loreto' },
        { value: 'Madre de Dios', label: 'Madre de Dios' },
        { value: 'Moquegua', label: 'Moquegua' },
        { value: 'Piura', label: 'Piura' },
        { value: 'Puno', label: 'Puno' },
        { value: 'Pasco', label: 'Pasco' },
        { value: 'San Martín', label: 'San Martín' },
        { value: 'Tacna', label: 'Tacna' },
        { value: 'Tumbes', label: 'Tumbes' },
        { value: 'Ucayali', label: 'Ucayali' }
    ];

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
            /*ProfileImg: ProfileImg,*/
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
                <h2>Register</h2>

                <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div>
                    <input
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

                <div translate='no'>
                    <Select
                        options={option}
                        value={Province}
                        onChange={setProvince}
                        placeholder="Province"
                        closeMenuOnSelect
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
                            }),
                        }}
                    required
                    />
                </div>

                <button type="submit">To register</button>
            </form>
        </div>
    );
}

export default Register;
