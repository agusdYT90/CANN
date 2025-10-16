import "../Styles/Utils/RegisterImage.css"
import Porfile from "../assets/Imgs/Profile.png"

function RegisterImage({ Images, selected }) {

    return (
        <div>
            <ul>
                {Images.map((x) => (
                    <li key={x.id}>
                        <div>
                            <img
                                src={x.value}
                                alt={x.text}
                                onClick={() => selected(x.value)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RegisterImage;
