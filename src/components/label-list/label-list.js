// import React from "react";
// import "./label-list.css";

// const LabelList = ({
//   labels,
//   newLabel,
//   setNewLabel,
//   addNewLabel,
//   selectedLabels,
//   handleLabelClick,
// }) => {
//   return (
//     <div className="row">
//       <div className="col">
//         <input
//           type="text"
//           className="form-control form-control-lg"
//           placeholder="Enter a new label"
//           value={newLabel}
//           onChange={(e) => setNewLabel(e.target.value)}
//         />
//       </div>
//       <div className="col-auto">
//         <button className="btn btn-lg btn-success" onClick={addNewLabel}>
//           Add Label
//         </button>
//       </div>
//       <div className="label-list">
//         <h3 className="labels">Labels:</h3>
//         {labels.map((label, index) => (
//           <button
//             key={index}
//             className={`label ${
//               selectedLabels.includes(label) ? "active" : ""
//             }`}
//             onClick={() => handleLabelClick(label)}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LabelList;
