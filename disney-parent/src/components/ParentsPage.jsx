import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";

import ParentList from "./ParentList";

const ParentsPage = props => {
  const [parentList, setParentList] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") &&
      axiosWithAuth()
        .get("/api/parents")
        .then(res => {
          console.log("ParentsPage Data: ", res);
          setParentList(res.data);
        })
        .catch(err => {
          console.error("ParentsPage Error: ", err);
        });
  }, []);

  return (
    <>
      <h2>hello</h2>
      <ParentList
        props={props}
        parents={parentList}
        updateParent={setParentList}
      />
    </>
  );
};

export default ParentsPage;
