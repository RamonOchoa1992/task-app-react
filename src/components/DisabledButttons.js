import React from "react";
import Button from "react-bootstrap/Button";
import estimationDis from "../img/estimationDis.png";
import highlightDis from "../img/highlightDis.png";
import openDis from "../img/openDis.png";
import publicDis from "../img/publicDis.png";
import todayDis from "../img/todayDis.png";

const DisabledButttons = ({ setSmallState }) => {
  const handleClick = () => {
    setSmallState(true);
  };

  const buttonStyle = {
    margin: "0.2rem",
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
      <div className="disableB">
        <img src={openDis} alt="open" />
        <img src={todayDis} alt="today" />
        <img src={publicDis} alt="public" />
        <img src={highlightDis} alt="highliht" />
        <img src={estimationDis} alt="estimation" />
      </div>
      <div>
        <Button style={buttonStyle} variant="light" onClick={handleClick}>
          Cancel
        </Button>
        <Button style={buttonStyle} variant="primary" onClick={handleClick}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default DisabledButttons;
