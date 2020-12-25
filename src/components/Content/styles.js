import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 68%;
  margin-top: 3rem;
  opacity: 1;

  ${media.lessThan("large")`
    margin-top: 0px;
    padding-top: 0rem;
  `}
`;

export const Main = styled.main`
  background: #ffffff;
  height: 100%;
  width: 80%;
  max-width: 720px;
  box-shadow: 0px 3px 16px #00000029;
  border-radius: 16px 16px 0px 0px;
  padding: 2.5rem;
  box-sizing: border-box;

  ${media.lessThan("large")`
    width: 70vw;
    box-sizing: content-box;
    margin-top: -60px;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: auto;
  margin: 16px 16px 32px;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font: normal normal normal 18px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 29px;
`;

export const Label = styled.label`
  font: normal normal bold 17px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
`;

export const SelectDiv = styled.div`
  display: block;
`;

export const Select = styled.select`
  width: 100%;
  height: 2.938rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a8b6ff;
  border-radius: 7px;
  opacity: 1;
  text-align: left;
  font: normal normal bold 18px Poppins;
  color: #3f51b5;
  opacity: 1;
  outline: none;
  margin-top: 8px;
  padding: 10px;
  box-sizing: border-box;

  :active {
    color: #f87d4f;
    border-color: #f87d4f;
  }

  :hover {
    color: #f87d4f;
    border-color: #f87d4f;
  }

  :focus {
    color: #f87d4f;
    border-color: #f87d4f;
  }

  option {
    text-align: left;
    font: normal normal bold 18px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }

  ${media.lessThan("medium")`
    font-size: 0.9rem;
    
  `}
`;

export const RadioWrapper = styled.div`
  margin-top: 32px;

  p {
    text-align: left;
    font: normal normal bold 17px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }
`;

export const DivRadio = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    border: 1px solid #a8b6ff;
    padding: 12px 26px;
    font-size: 1rem;
    font-family: "poppins";
    border-radius: 4px;
    color: #3f51b5;
    box-sizing: border-box;
    cursor: pointer;

    ${media.lessThan("medium")`
    font-size: 0.8rem;
    width: 91px;
    padding: 5px 20px;
  `}
  }

  input[type="radio"]:checked + label {
    border-color: #f87d4f;
    color: #f87d4f;
  }
`;

export const MinutesWrapper = styled.div`
  margin-top: 32px;

  p {
    text-align: left;
    font: normal normal bold 17px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }
`;

export const DivMinutes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid #a8b6ff;
  border-radius: 100%;
  opacity: 1;
  width: 30px;
  height: 30px;
  background: none;
  font-size: 20px;
  font-weight: bold;
  color: #3f51b5;
  :first-child {
    padding-bottom: 3px;
  }
  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 11.091rem;
  text-align: left;
  font: normal normal bold 32px Poppins;
  letter-spacing: 0px;
  color: #a8b6ff;
  opacity: 1;
  border: none;
  border-bottom: 2px solid #a8b6ff;
  border-radius: 0;
  text-align: center;
  margin: 0 20px 0 20px;

  -moz-appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
  }
`;

export const DivButtons = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  button {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #a8b6ff;
    border-radius: 5px;
    opacity: 1;
    width: 22%;
    height: 40px;
    color: #3f51b5;
    font-weight: bold;
    font-family: "Poppins";
    font-size: 1rem;
    outline: none;

    ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
  }
`;

export const PriceWrapper = styled.div`
  width: 100%;
  height: 8.625rem;
  background-color: #f4f4f4;
  margin-top: 40px;
  border-radius: 11px;
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
`;

export const Text = styled.span`
  text-align: left;
  font: normal normal bold 17px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const DivPrecos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span1 = styled.span`
  text-align: left;
  font: normal normal normal 14px Poppins;
  letter-spacing: 0px;
  color: #141414;
  opacity: 1;

  span {
    text-decoration: line-through;
  }
`;

export const Span2 = styled.span`
  font: normal normal bold 42px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const Span3 = styled.span`
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  font: normal normal normal 16px Poppins;

  span {
    font-weight: bold;
    text-decoration: underline;
  }
`;
