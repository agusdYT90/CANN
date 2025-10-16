import { Outlet } from "react-router-dom";
import "../Styles/Layouts/LayoutMain.css";

function LayoutMain() {

    return (
        <div className="phone-container">
            <div className="phone-btn1"></div>
            <div className="phone-btn2"></div>
            <div className="phone-btn3"></div>
            <div className="phone-btn4"></div>
            <div className="phone-camera"></div>
            <div className="phone-edge"></div>
            <div className="phone-display">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutMain;
