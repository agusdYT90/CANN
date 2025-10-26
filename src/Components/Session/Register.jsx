import { useState } from "react";
import Select from 'react-select';
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";
import { Provinces, Profiles } from "../../Utils/Data"
import RegisterImage from "../Session/RegisterImage";
import CaretDown from "../../assets/Svgs/CaretDown.svg";
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

    const GoBackToForm = () => {
        setStep(1);
    };


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
        <>
            {step === 1 && (
                <form className="register-form" onSubmit={handleFormSubmit}>
                    <div className="register-title">
                        <h2>Register</h2>
                        <p>Register here</p>
                    </div>

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

                        {ViewPassword ?
                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512.19 512.19" width="20" height="20" onClick={() => setViewPassword(!ViewPassword)} className="register-viewbtn">
                                <circle cx="256.095" cy="256.095" r="85.333" />
                                <path d="M496.543,201.034C463.455,147.146,388.191,56.735,256.095,56.735S48.735,147.146,15.647,201.034   c-20.862,33.743-20.862,76.379,0,110.123c33.088,53.888,108.352,144.299,240.448,144.299s207.36-90.411,240.448-144.299   C517.405,277.413,517.405,234.777,496.543,201.034z M256.095,384.095c-70.692,0-128-57.308-128-128s57.308-128,128-128   s128,57.308,128,128C384.024,326.758,326.758,384.024,256.095,384.095z" />
                            </svg>
                            :
                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512.19 512.19" width="20" height="20" onClick={() => setViewPassword(!ViewPassword)} className="register-viewbtn">
                                <path d="M496.543,200.771c-19.259-31.537-43.552-59.707-71.915-83.392l59.733-59.733c8.185-8.475,7.95-21.98-0.525-30.165   c-8.267-7.985-21.374-7.985-29.641,0l-64.96,65.045c-40.269-23.918-86.306-36.385-133.141-36.053   c-132.075,0-207.339,90.411-240.448,144.299c-20.862,33.743-20.862,76.379,0,110.123c19.259,31.537,43.552,59.707,71.915,83.392   l-59.733,59.733c-8.475,8.185-8.71,21.691-0.525,30.165c8.185,8.475,21.691,8.71,30.165,0.525c0.178-0.172,0.353-0.347,0.525-0.525   l65.109-65.109c40.219,23.915,86.201,36.402,132.992,36.117c132.075,0,207.339-90.411,240.448-144.299   C517.405,277.151,517.405,234.515,496.543,200.771z M128.095,255.833c-0.121-70.575,56.992-127.885,127.567-128.006   c26.703-0.046,52.75,8.275,74.481,23.793l-30.976,30.976c-13.004-7.842-27.887-12.022-43.072-12.096   c-47.128,0-85.333,38.205-85.333,85.333c0.074,15.185,4.254,30.068,12.096,43.072l-30.976,30.976   C136.414,308.288,128.096,282.394,128.095,255.833z M256.095,383.833c-26.561-0.001-52.455-8.319-74.048-23.787l30.976-30.976   c13.004,7.842,27.887,12.022,43.072,12.096c47.128,0,85.333-38.205,85.333-85.333c-0.074-15.185-4.254-30.068-12.096-43.072   l30.976-30.976c41.013,57.434,27.702,137.242-29.732,178.255C308.845,375.558,282.798,383.879,256.095,383.833z" />
                            </svg>
                        }
                    </div>

                    <div className={`register-label ${(formData.Province || ViewSelect) ? 'has-value' : ''}`}>

                        <label htmlFor="ProvinceR" className="floating-label">Location</label>
                        <div translate="no" className="custom-select-wrapper">
                            <Select
                                inputId="ProvinceR"
                                value={formData.Province}
                                onChange={(val) => setFormData({ ...formData, Province: val })}
                                options={Provinces}
                                placeholder=" "
                                isSearchable={false}
                                closeMenuOnSelect={true}
                                onMenuOpen={() => setViewSelect(true)}
                                onMenuClose={() => setViewSelect(false)}
                                components={{
                                    DropdownIndicator: () => (
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="25"
                                            height="25"
                                            style={{
                                                transform: ViewSelect ? "rotate(180deg)" : "rotate(0deg)",
                                                fill: 'rgb(200, 100, 60)',
                                            }}
                                        >
                                            <path d="M6.414,9H17.586a1,1,0,0,1,.707,1.707l-5.586,5.586a1,1,0,0,1-1.414,0L5.707,10.707A1,1,0,0,1,6.414,9Z" />
                                        </svg>
                                    ),
                                    IndicatorSeparator: () => null,
                                }}
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: 'rgb(200, 200, 200)',
                                        borderRadius: '15px',
                                        width: '242px',
                                        height: '47px',
                                        padding: '0px 10px 0px 10px',
                                        fontSize: '14px',
                                        border: 'none',
                                        boxShadow: 'none',
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: '#333',
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: 'transparent',
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        backgroundColor: state.isFocused ? 'rgb(200, 160, 100)' : 'rgb(200, 200, 200)',
                                        color: '#333',
                                        padding: 10,
                                        cursor: 'pointer',
                                    }),
                                    menuList: (base) => ({
                                        ...base,
                                        textAlign: 'center',
                                        maxHeight: '155px',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                        '&::-webkit-scrollbar': {
                                            display: 'none',
                                        },
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="register-form-btn">Continue</button>
                </form>
            )}

            {step === 2 && (
                <RegisterImage
                    Images={Profiles}
                    Selected={(img) => handleImageSelect(img)}
                    Back={GoBackToForm}
                />
            )}
        </>
    );
}


export default Register;
