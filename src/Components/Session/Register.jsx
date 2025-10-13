import { useState } from "react";
import Select from "react-select";
import "../../Styles/App/asd.css";

function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [pais, setPais] = useState(null);

    const opciones = [
        { value: 'argentina', label: '🇦🇷 Argentina' },
        { value: 'mexico', label: '🇲🇽 México' },
        { value: 'colombia', label: '🇨🇴 Colombia' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pais || !pais.value) {
            alert('Por favor seleccioná un país válido.');
            return;
        }
        console.log({ nombre, correo, password, pais });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Registro</h2>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />

                <div className="password-group">
                    <input
                        type={mostrarPassword ? 'text' : 'password'}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                        {mostrarPassword ? '🙈' : '👁️'}
                    </button>
                </div>

                <div style={{ maxWidth: 400, margin: '0 auto' }}>
                    <label style={{ marginBottom: 8, display: 'block' }}>Selecciona tu país:</label>
                    <Select
                        options={opciones}
                        value={pais}
                        onChange={setPais}
                        closeMenuOnSelect
                        placeholder="Elegí una opción..."
                        menuPortalTarget={document.body}
                        inputProps={{ translate: 'no' }}
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
                    />
                    {pais?.label && (
                        <p style={{ marginTop: 12 }}>
                            País seleccionado: <strong>{pais.label}</strong>
                        </p>
                    )}
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;
