import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  height: 70vh;
`;

export const Inputs = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }

  input {
    width: 300px;
    margin-top: 15px;
    height: 50px;
  }

  button {
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }
`;
