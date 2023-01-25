import React, { useState, useEffect } from "react";
import vector from "../img/Vector.png";
import CheckBox from "./CheckBox";

const SmallTask = ({ setSmallState, el, deleteTask }) => {
  const { id, description } = el;
  const [checked, setChecked] = useState("");

  useEffect(() => {
    if (checked) {
      deleteTask(id);
    }
  }, [checked]);

  const handleFocus = (e) => {
    setSmallState(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {description ? <CheckBox setChecked={setChecked} /> : (<img src={vector} alt="vector" />)}
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
        value={description || ""}
      />
    </div>
  );
};

export default SmallTask;
