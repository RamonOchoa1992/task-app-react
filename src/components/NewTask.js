import React, { useState } from "react";
import LargeTask from "./LargeTask";
import SmallTask from "./SmallTask";

const NewTask = ({ createTask, el, deleteTask, updateTask }) => {
  const [smallState, setSmallState] = useState(true);
  return (
    <article>
      {smallState ? (
        <SmallTask setSmallState={setSmallState} el={el} deleteTask={deleteTask} />
      ) : (
        <LargeTask createTask={createTask} setSmallState={setSmallState} el={el} updateTask={updateTask} />
      )}
    </article>
  );
};

export default NewTask;
