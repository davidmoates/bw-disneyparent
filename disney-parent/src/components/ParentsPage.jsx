import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";

import ParentList from "./ParentList";
import ParentCard from "./ParentCard";

import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

const ParentsPage = props => {
  const [parentList, setParentList] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") &&
      axiosWithAuth()
        .get("api/parents")
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
      <DivFlex>
        {parentList.map((parent, id) => (
          <ParentCard key={id} parent={parent} />
        ))}
      </DivFlex>
    </>
  );
};

export default ParentsPage;
