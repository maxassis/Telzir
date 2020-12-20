import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  height: 70vh;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const Inputs = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 18.75rem;
    height: 3.125rem;
    margin-top: 0.938rem;
    padding-left: 0.625rem;
  }

  input {
    width: 18.75rem;
    margin-top: 0.938rem;
    height: 3.125rem;
    padding-left: 0.625rem;
  }

  button {
    width: 18.75rem;
    height: 3.125rem;
    margin-top: 0.938rem;
  }
`;

export const Text = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
