import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  color: white;
  background: #58afdb;
  border: none;
  border-radius: 3px;
  width: 80%;
  margin-bottom: 0.5em;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;

export const Button = styled.button`
  padding: 0.5em;
  color: white;
  background: #58afdb;
  border: none;
  border-radius: 3px;
  width: 30%;
  margin-bottom: 0.5em;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;
