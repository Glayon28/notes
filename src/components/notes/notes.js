import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./notes.css";

const Notes = ({
  notes,
  markDone,
  setUpdateData,
  deleteTask,
  selectedLabels,
}) => {
  return (
    <>
      {notes &&
        notes
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText" style={{ color: task.color }}>
                      {task.title}
                    </span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {task.status ? null : (
                      <span title="Edit" onClick={() => setUpdateData(task)}>
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default Notes;
