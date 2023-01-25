import React from "react";
import vector from "../img/Vector.png";

const SmallTask = ({ setSmallState }) => {
  const handleFocus = (e) => {
    setSmallState(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={vector} alt="vector" />
      <input
        style={{
          marginLeft: ".3rem",
          backgroundColor: "transparent",
          outline: "transparent",
          borderColor: "transparent",
          padding: ".2rem .2rem",
        }}
        type="text"
        name="description"
        id="description"
        placeholder="Type to add new task"
        onFocus={handleFocus}
      />
    </div>
  );
};

export default SmallTask;
