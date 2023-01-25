import React, { useState, useEffect } from "react";
import helpHttp from "../helpers/helpHttp";
import Loading from "./Loading";
import LoadingAdd from "./LoadingAdd";
import Mensaje from "./Mensaje";
import Modal from "./Modal";
import NewTask from "./NewTask";

const TaskList = () => {
  const url = "https://rest-api-tasks-production.up.railway.app/api/tasks";
  const [db, setDB] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);
  const [loadingUpd, setLoadingUpd] = useState(false);

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
    setLoadingAdd(true);
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
        setLoadingAdd(false);
      });
  };

  const deleteTask = (id) => {
    const endpoint = `${url}/${id}`;
    setLoadingDel(true);
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
        setLoadingDel(false);
      });
  };

  const updateTask = (data) => {
    const { id, description } = data
    const endpoint = `${url}/${id}`;
    const options = {
      body: { description },
      headers: { "content-type": "application/json" },
    };
    setLoadingUpd(true);
    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          const newData = db.map((el) => el.id === id ? data : el);
          setDB(newData);
          setError(null);
        } else {
          setDB(null);
          setError(res);
        }
        setLoadingUpd(false);
      });
  }

  return (
    <section>
      {error && <Mensaje content={"El endpoint consumido no se encuentra"} />}
      {loading && <Loading />}
      {loadingAdd && <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h3>Adding Task!</h3>
          <div style={{ marginLeft: "6rem" }}><LoadingAdd /></div>
        </div>
      </Modal>}
      {loadingDel && <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h3>Well Done!</h3>
          <div style={{ marginLeft: "6rem" }}><LoadingAdd /></div>
        </div>
      </Modal>}
      {loadingUpd && <Modal backColor={"rgba(0, 0, 0, 0.75)"}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h3>Updating Task!</h3>
          <div style={{ marginLeft: "6rem" }}><LoadingAdd /></div>
        </div>
      </Modal>}
      {db && <NewTask createTask={createTask} el={[]} deleteTask={deleteTask} updateTask={updateTask} />}
      {db &&
        !loading &&
        (db.length >= 0 ? (
          db.map((el) => <NewTask key={el.id} el={el} deleteTask={deleteTask} updateTask={updateTask} />)
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
