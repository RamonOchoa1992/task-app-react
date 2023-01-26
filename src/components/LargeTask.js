import React, { useState, useEffect } from "react";
import vector from "../img/Vector.png";
import DisabledButttons from "./DisabledButttons";
import EnableButtons from "./EnableButtons";
import avatarDis from "../img/avatarDis.png";
import SmallEnableButtons from "./SmallEnableButton";
import SmallDisabledButttons from "./SmallDisableButtons";

const initialData = {
  description: "",
};

const LargeTask = ({ setSmallState, createTask, el, updateTask }) => {
  const { id, description } = el;
  const [data, setData] = useState(initialData);
  const [add, setAdd] = useState(false);
  const [valueText, setValueText] = useState(description);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1318);

  /* Inicialmente el ancho límite de la ventana para cambiar la UI era de 1230. Hice un ligero cambio a 1318. Saludos. */

  useEffect(() => {
    if (data.description.length === 0) {
      setAdd(false);
    } else {
      setAdd(true);
    }
  }, [data]);
  const handleResize = () => {
    if (window.innerWidth < 1318) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setValueText(e.target.value);
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
          {description ? (
            <input type="checkbox" disabled />
          ) : (
            <img src={vector} alt="vector" />
          )}
          <input
            style={{
              marginLeft: ".3rem",
              backgroundColor: "transparent",
              outline: "transparent",
              borderColor: "transparent",
              padding: ".2rem .2rem",
              width: "95%",
            }}
            type="text"
            name="description"
            id="description"
            value={valueText}
            placeholder="Type to add new task"
            autoFocus
            onChange={handleChange}
          />
          <img
            style={
              add
                ? { opacity: "100%", marginRight: ".3rem" }
                : { opacity: "70%", marginRight: ".3rem" }
            }
            src={avatarDis}
            alt="avatar"
          />
        </div>
      </div>
      {add && !isSmall ? (
        <EnableButtons
          data={data}
          createTask={createTask}
          setSmallState={setSmallState}
          id={id}
          updateTask={updateTask}
        />
      ) : add && isSmall ? (
        <SmallEnableButtons
          data={data}
          createTask={createTask}
          setSmallState={setSmallState}
          id={id}
          updateTask={updateTask}
        />
      ) : !add && isSmall ? (
        <SmallDisabledButttons setSmallState={setSmallState} />
      ) : (
        <DisabledButttons setSmallState={setSmallState} />
      )}
    </>
  );
};

export default LargeTask;
