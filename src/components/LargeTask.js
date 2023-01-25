import React, { useState, useEffect } from "react";
import vector from "../img/Vector.png";
import DisabledButttons from "./DisabledButttons";
import EnableButtons from "./EnableButtons";

const initialData = {
  description: "",
};

const LargeTask = ({ setSmallState, createTask }) => {
  const [data, setData] = useState(initialData);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (data.description.length === 0) {
      setAdd(false);
    } else {
      setAdd(true);
    }
  }, [data]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #bdbcaf",
          borderRadius: ".2rem",
          width: "100%",
          padding: "0 0 1.2rem 1.55rem",
          marginLeft: "-1.6rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={vector} alt="vector" />
          <input
            style={{
              marginLeft: ".3rem",
              backgroundColor: "transparent",
              outline: "transparent",
              borderColor: "transparent",
              padding: ".2rem .2rem",
              width: "100%",
            }}
            type="text"
            name="description"
            id="description"
            value={data.description}
            placeholder="Type to add new task"
            autoFocus
            onChange={handleChange}
          />
        </div>
      </div>
      {add ? (
        <EnableButtons
          data={data}
          createTask={createTask}
          setSmallState={setSmallState}
        />
      ) : (
        <DisabledButttons setSmallState={setSmallState} />
      )}
    </>
  );
};

export default LargeTask;
