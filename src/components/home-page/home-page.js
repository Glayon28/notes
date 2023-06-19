import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ColorPicker from "../choose-color/choose-color";
import AddTaskForm from "../add-task/add-task";
import UpdateTaskForm from "../update-task/update-task";
import Notes from "../notes/notes";
// import LabelList from "../label-list/label-list";

import "./home-page.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  return list && list !== "undefined" && list !== "null"
    ? JSON.parse(list)
    : [];
};

function HomePage() {
  const [notes, setNotes] = useState(getLocalItems());
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // const [textCategorie, setTextCategorie] = useState([]);
  // const [selectedLabels, setSelectedLabels] = useState([]);
  const [textColor, setTextColor] = useState("#fff");
  // const [newLabel, setNewLabel] = useState("");
  // const [labels, setLabels] = useState(["Label 1", "Label 2", "Label 3"]);
  // const [newCategorie, setNewCategorie] = useState("");
  // const [categoriesList, setCategoriesList] = useState([
  //   "Category 1",
  //   "Category 2",
  //   "Category 3",
  // ]);

  const addTask = () => {
    if (newTask) {
      let num = notes.length + 1;
      setNotes([
        ...notes,
        {
          id: num,
          title: newTask,
          status: false,
          color: textColor,
          // label: labels,
          // categorie: textCategorie,
        },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setNotes(notes.filter((task) => task.id !== id));
  };

  const markDone = (id) => {
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
    setUpdateData({
      ...updateData,
      title: e.target.value,
      color: textColor,
    });
  };

  const updateTask = () => {
    let updatedData = { ...updateData, color: textColor };
    let updatedNotes = notes.map((task) =>
      task.id === updateData.id ? updatedData : task
    );
    setNotes(updatedNotes);
    setUpdateData("");
  };

  // const addNewLabel = () => {
  //   if (newLabel) {
  //     setLabels([...labels, newLabel]);
  //     setNewLabel("");
  //   }
  // };

  // const handleLabelClick = (label) => {
  //   if (selectedLabels.includes(label)) {
  //     setSelectedLabels(
  //       selectedLabels.filter((selectedLabel) => selectedLabel !== label)
  //     );
  //   } else {
  //     setSelectedLabels([...selectedLabels, label]);
  //   }
  // };

  // const addNewCategorie = () => {
  //   if (newCategorie) {
  //     setCategoriesList([...categoriesList, newCategorie]);
  //     setNewCategorie("");
  //   }
  // };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(notes));
  }, [notes]);

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

      {/* <LabelList
        newLabel={newLabel}
        setNewLabel={setNewLabel}
        addNewLabel={addNewLabel}
        labels={labels}
        selectedLabels={selectedLabels}
        handleLabelClick={handleLabelClick}
      /> */}

      {newTask && (
        <ColorPicker textColor={textColor} setTextColor={setTextColor} />
      )}
      {updateData && (
        <ColorPicker textColor={textColor} setTextColor={setTextColor} />
      )}

      {notes && notes.length ? "" : "No Tasks..."}
      <Notes
        notes={notes}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        // selectedLabels={selectedLabels}
      />
    </div>
  );
}

export default HomePage;
