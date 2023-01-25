import React, { useState, useEffect } from "react";
import helpHttp from "../helpers/helpHttp";
import Loading from "./Loading";
import Mensaje from "./Mensaje";
import NewTask from "./NewTask";
import Task from "./Task";

const TaskList = () => {
  const url = "https://rest-api-tasks-production.up.railway.app/api/tasks";
  const [db, setDB] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDB(res);
          setError(null);
        } else {
          setDB(null);
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  const createTask = (data) => {
    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDB([...db, res]);
          setError(null);
        } else {
          setDB(null);
          setError(res);
        }
      });
  };

  const deleteTask = (id) => {
    const endpoint = `${url}/${id}`;
    helpHttp()
      .del(endpoint)
      .then((res) => {
        if (!res.err) {
          const newData = db.filter((el) => el.id !== id);
          setDB(newData);
          setError(null);
        } else {
          setDB(null);
          setError(res);
        }
      });
  };

  return (
    <section>
      {error && <Mensaje content={"El endpoint consumido no se encuentra"} />}
      {loading && <Loading />}
      {db && <NewTask createTask={createTask} />}
      {db &&
        !loading &&
        (db.length >= 0 ? (
          db.map((el) => <Task key={el.id} el={el} deleteTask={deleteTask} />)
        ) : (
          <Mensaje
            /*content={
              "Hola team. Deben conectarse a través de una VPN, ya que los datos están siendo consumidos mediante un hosting en Railway. Disculpas por las molestias. 😁"
            }*/
            content={"No existen tareas a mostrar"}
          />
        ))}
    </section>
  );
};

export default TaskList;
