import { useState } from "react";
import Select from 'react-select';
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";
import { Provinces, Profiles } from "../../Utils/Data"
import RegisterImage from "../../Utils/RegisterImage";
import CaretDown from "../../assets/Svgs/CaretDown.svg";
import Eye from "../../assets/Svgs/Eye.svg";
import EyeCrossed from "../../assets/Svgs/EyeCrossed.svg";
import "../../Styles/Session/Register.css";

function Register() {
    const { AuthenticateUser } = useUser();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Province: null,
        ProfileImg: null,
    });

    const [ViewPassword, setViewPassword] = useState(false);
    const [ViewSelect, setViewSelect] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const Users = JSON.parse(localStorage.getItem("Users") || "[]");

        if (Users.find(x => x.Email === formData.Email)) {
            alert("An account with that email already exists.");
            return;
        }

        setStep(2);
    };

    const handleImageSelect = (img) => {
        const Users = JSON.parse(localStorage.getItem("Users") || "[]");

        const NewUser = {
            User: formData.Name,
            Email: formData.Email,
            ProfileImg: img,
            Province: formData.Province.value,
            Password: formData.Password,
        };

        Users.push(NewUser);
        localStorage.setItem("Users", JSON.stringify(Users));
        const { Password: _, ...UserPassword } = NewUser;
        AuthenticateUser({ ...UserPassword });
        navigate("/");
    };

    return (
        <div className="register-container">
            {step === 1 && (
                <form className="register-form" onSubmit={handleFormSubmit}>
                    <h2>Register</h2>

                    <div className="register-label">
                        <input
                            id="NameR"
                            type="text"
                            placeholder=" "
                            value={formData.Name}
                            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                            required
                        />
                        <label htmlFor="NameR">Name</label>
                    </div>

                    <div className="register-label">
                        <input
                            id="EmailR"
                            type="email"
                            placeholder=" "
                            value={formData.Email}
                            onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                            required
                        />
                        <label htmlFor="EmailR">Email</label>
                    </div>

                    <div className="register-label">
                        <input
                            id="PasswordR"
                            type={ViewPassword ? 'text' : 'password'}
                            placeholder=" "
                            value={formData.Password}
                            onChange={(e) => setFormData({ ...formData, Password: e.target.value })}
                            required
                        />
                        <label htmlFor="PasswordR">Password</label>
                        <button
                            className="register-viewbtn"
                            type="button"
                            onClick={() => setViewPassword(!ViewPassword)}
                        >
                            {ViewPassword ?
                                <img src={EyeCrossed} alt="Hide" style={{
                                    width: 16,
                                    height: 16,
                                }} />
                                :
                                <img src={ Eye} alt="View" style={{
                                    width: 16,
                                    height: 16,
                                }} />}
                        </button>
                    </div>

                    <div className={`register-select-wrapper ${(formData.Province || ViewSelect) ? 'has-value' : ''}`}>
                        <label htmlFor="ProvinceR" className="register-select-label">Location</label>
                        <div translate="no" className="register-select">
                            <Select
                                options={Provinces}
                                value={formData.Province}
                                onChange={(val) => setFormData({ ...formData, Province: val })}
                                placeholder=" "
                                isSearchable={false}
                                closeMenuOnSelect={true}
                                inputId="ProvinceR"
                                onMenuOpen={() => setViewSelect(true)}
                                onMenuClose={() => setViewSelect(false)}
                                components={{
                                    DropdownIndicator: () => (
                                        <img
                                            src={CaretDown}
                                            alt="DropDown"
                                            style={{
                                                width: 16,
                                                height: 16,
                                                marginRight: 8,
                                                transform: ViewSelect ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                        />
                                    ),
                                    IndicatorSeparator: () => null,
                                }}
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: '#f0f4f8',
                                        boxShadow: 'none',
                                        border: 'none',
                                        margin: 0,
                                        padding: 0,
                                        position: 'relative',
                                    }),
                                    menuList: (base) => ({
                                        ...base,
                                        maxHeight: '160px',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                        '&::-webkit-scrollbar': {
                                            display: 'none',
                                        },
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
                                    placeholder: (base) => ({
                                        ...base,
                                        color: 'transparent',
                                    }),
                                }}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit">Continue</button>
                </form>
            )}

            {step === 2 && (
                <RegisterImage
                    Images={Profiles}
                    selected={(img) => handleImageSelect(img)}
                />
            )}
        </div>
    );
}


export default Register;
