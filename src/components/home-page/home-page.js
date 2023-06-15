import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./home-page.css";
import ColorPicker from "../choose-color/choose-color";
import AddTaskForm from "../add-task/add-task";
import UpdateTaskForm from "../update-task/update-task";
import Notes from "../notes/notes";

function HomePage() {
  const [notes, setNotes] = useState([]);

  const [newTask, setNewTask] = useState("");

  const [updateData, setUpdateData] = useState("");

  const [textColor, setTextColor] = useState("#000000");

  const addTask = () => {
    if (newTask) {
      let num = notes.length + 1;
      // let newEntry = {
      //   id: num,
      //   title: newTask,
      //   status: false,
      //   color: textColor,
      // };
      // setNotes([...notes, newEntry]);
      setNotes([
        ...notes,
        { id: num, title: newTask, status: false, color: textColor },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    // let newTasks = notes.filter((task) => task.id !== id);
    // setNotes(newTasks);

    setNotes(notes.filter((task) => task.id !== id));
  };

  const markDone = (id) => {
    // let newTask = notes.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    // setNotes(newTask);

    setNotes(
      notes.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false,
    //   color: textColor,
    // };
    // setUpdateData(newEntry);

    setUpdateData({
      ...updateData,
      title: e.target.value,
      color: textColor,
    });
  };

  const updateTask = () => {
    // let filterRecords = [...notes].filter((task) => task.id !== updateData.id);
    // let updateObject = [...filterRecords, updateData];
    // setNotes(updateObject);
    // setUpdateData("");

    // let removeOldRecord = [...notes].filter(
    //   (task) => task.id !== updateData.id
    // );
    // setNotes([...removeOldRecord, updateData]);
    // setUpdateData("");

    let updatedData = { ...updateData, color: textColor };
    let updatedNotes = notes.map((task) =>
      task.id === updateData.id ? updatedData : task
    );
    setNotes(updatedNotes);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <h1 className="NotesHeader">Notes App</h1>

      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      <ColorPicker textColor={textColor} setTextColor={setTextColor} />

      {/* display notes */}

      {notes && notes.length ? "" : "No Tasks..."}

      <Notes
        notes={notes}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default HomePage;
