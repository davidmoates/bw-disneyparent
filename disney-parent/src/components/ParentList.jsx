import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const initialParent = {
  ride: "",
  time: ""
};

const ParentList = ({ parents, updateParent }) => {
  console.log(parents);
  const [editing, setEditing] = useState(false);
  const [parentToEdit, setParentToEdit] = useState(initialParent);

  const editParent = parent => {
    setEditing(true);
    setParentToEdit(parent);
  };
  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`api/parents/${parentToEdit.id}`, parentToEdit)
      .then(res => {
        console.log("get by id", res);
        axiosWithAuth()
          .get("api/parents")
          .then(res => {
            updateParent(res.data);
          })
          .catch(err => {
            console.error("ParentList Edit Update Error", err.message);
          });
        setEditing(false);
      })
      .catch(err => {
        console.error("ParentList Edit Error", err.message);
      });
  };

  const deleteParent = parent => {
    axiosWithAuth()
      .delete(`api/parents/${parent.id}`)
      .then(() => {
        axiosWithAuth()
          .get("api/parents")
          .then(res => {
            updateParent(res.data);
          })
          .catch(err => {
            console.error("ParentList Delete Update Error", err.message);
          });
        setEditing(false);
      })
      .catch(err => {
        console.error("ParentList Delete Error", err.message);
      });
  };

  return (
    <div className="colors-wrap">
      {console.log(parents)}
      <p>Parents</p>
      <ul>
        {parents.map(parent => (
          <li key={parent.id} onClick={() => editParent(parent)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteParent(parent);
                }}
              >
                x
              </span>{" "}
              {parent.ride}
            </span>
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit parent</legend>
          <label>
            ride name:
            <input
              onChange={e =>
                setParentToEdit({ ...parentToEdit, ride: e.target.value })
              }
              value={parentToEdit.ride}
            />
          </label>
          <label>
            time:
            <input
              onChange={e =>
                setParentToEdit({
                  ...parentToEdit,
                  time: e.target.value
                })
              }
              value={parentToEdit.time}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {}
    </div>
  );
}; //close for parentList

export default ParentList;
