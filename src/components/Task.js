/*import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";

const Task = ({ el, deleteTask }) => {
  const { id, description } = el;
  const [checked, setChecked] = useState("");

  useEffect(() => {
    if (checked) {
      deleteTask(id);
    }
  }, [checked]);

  return (
    <article>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => setChecked(e.target.checked)}
      />
      {description}
    </article>
  );
};

export default Task;
*/