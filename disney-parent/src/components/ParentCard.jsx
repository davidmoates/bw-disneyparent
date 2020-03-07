import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
  background: rgba(50, 205, 50, 0.8);
  width: 30%;
  height: auto;
  margin: 10px;
  text-align: center;
`;

const H2 = styled.h2`
  color: white;
  text-height: 15px;
  text-align: center;
`;

const Li = styled.li`
  color: white;
  text-height: 15px;
`;

const ParentCard = props => {
  
  return (
    <DivCard>
      <H2>{props.parent.email}</H2>
      <ul>
        <Li>Family Name: {props.parent.name}</Li>
        <Li>Number of Kids: {props.parent.number_of_kids}</Li>
        <Li>Ride: {props.parent.ride}</Li>
        <Li>Time: {props.parent.time}</Li>
      </ul>
    </DivCard>
  );
};

export default ParentCard;
