import React, { useState } from "react";
import LargeTask from "./LargeTask";
import SmallTask from "./SmallTask";

const NewTask = ({ createTask }) => {
  const [smallState, setSmallState] = useState(true);
  return (
    <>
      {smallState ? (
        <SmallTask setSmallState={setSmallState} />
      ) : (
        <LargeTask createTask={createTask} setSmallState={setSmallState} />
      )}
    </>
  );
};

export default NewTask;
