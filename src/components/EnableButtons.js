import React from "react";
import Button from "react-bootstrap/Button";
import estimationEnab from "../img/estimationEnab.png";
import highlightEnab from "../img/highlightEnab.png";
import openEnab from "../img/openEnab.png";
import publicEnab from "../img/publicEnab.png";
import todayEnab from "../img/todayEnab.png";

const EnableButtons = ({ setSmallState, data, createTask, id, updateTask }) => {
  const handleClick = () => {
    setSmallState(true);
  };

  const handleAddClick = () => {
    if (!id) {
      createTask(data);
    } else {
      updateTask({ ...data, id })
    }
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
      <div className="enabableB">
        <img src={openEnab} alt="open" />
        <img src={todayEnab} alt="today" />
        <img src={publicEnab} alt="public" />
        <img src={highlightEnab} alt="highliht" />
        <img src={estimationEnab} alt="estimation" />
      </div>
      <div>
        <Button style={buttonStyle} variant="light" onClick={handleClick}>
          Cancel
        </Button>
        <Button style={buttonStyle} variant="primary" onClick={handleAddClick}>
          {id ? "Update" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default EnableButtons;
