function RegisterImage({ Images, selected }) {

    return (
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
    );
}

export default RegisterImage;
