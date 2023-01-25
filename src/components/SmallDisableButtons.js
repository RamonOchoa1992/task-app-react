import React from "react";
import Button from "react-bootstrap/Button";
import maximize from "../img/maximize.svg";
import gift from "../img/gift.svg";
import message from "../img/message.svg";
import sun from "../img/sun.svg";
import alert from "../img/alert.svg";
import trash from "../img/trash.svg";

const SmallDisabledButttons = ({ setSmallState }) => {
    const handleClick = () => {
        setSmallState(true);
    };

    const buttonStyle = {
        margin: "0.2rem"
    };
    return (
        <div
            style={{
                border: "1px solid #bdbcaf",
                borderRadius: ".2rem",
                width: "100%",
                padding: ".5rem",
                marginLeft: "-1.6rem",
                backgroundColor: "#bbb6",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div className="disableBSmall">
                <img src={maximize} alt="maximize" />
                <img src={gift} alt="gift" />
                <img src={message} alt="message" />
                <img src={sun} alt="sun" />
                <img src={alert} alt="alert" />
                <img src={trash} alt="trash" />
            </div>
            <div>
                <Button style={buttonStyle} variant="primary" onClick={handleClick}>
                    X
                </Button>
            </div>
        </div>
    );
};

export default SmallDisabledButttons;