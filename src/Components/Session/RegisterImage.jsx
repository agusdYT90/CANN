import "../../Styles/Session/RegisterImage.css";

function RegisterImage({ Images, Selected, Back }) {

    return (
        <>
            <div className="register-image-container">
                <ul className="register-image-list">
                    {Images.map((x) => (
                        <li key={x.id} className="register-image-item">
                                <img
                                    src={x.value}
                                    alt={x.text}
                                    onClick={() => Selected(x.value)}
                                />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="register-image-back">
                <button type="button" onClick={Back}>Back</button>
            </div>
        </>
    );
}

export default RegisterImage;
