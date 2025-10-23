import "../Styles/Utils/RegisterImage.css"

function RegisterImage({ Images, Selected, Back }) {

    return (
        <>
            <div>
                <ul>
                    {Images.map((x) => (
                        <li key={x.id}>
                            <div>
                                <img
                                    src={x.value}
                                    alt={x.text}
                                    onClick={() => Selected(x.value)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button type="button" onClick={Back}>Back</button>
            </div>
        </>
    );
}

export default RegisterImage;
