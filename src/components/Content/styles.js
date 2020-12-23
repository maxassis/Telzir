import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.125rem;
  height: 47rem;
  background-color: #ffffff;
  margin-top: 3rem;
  margin-left: 6.25rem;
  margin-right: 7.688rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 3px 16px #00000029;
  opacity: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 31.75rem;
  height: 6rem;
  margin-top: 1.688rem;
  margin-left: 2.5rem;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 49px;
  margin-right: 46px;
  margin-top: 33px;
  grid-gap: 29px;
`;

export const Label = styled.label`
  font: normal normal bold 17px/26px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const SelectDiv = styled.div`
  display: block;
`;

export const Select = styled.select`
  width: 14.75rem;
  height: 2.938rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a8b6ff;
  border-radius: 7px;
  opacity: 1;
`;

export const RadioWrapper = styled.div`
  margin-top: 33px;
  margin-left: 49px;
  margin-right: 46px;

  p {
    text-align: left;
    font: normal normal bold 17px/26px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }
`;

export const MinutesWrapper = styled.div`
  margin-top: 43px;
  margin-left: 49px;
  margin-right: 46px;

  p {
    text-align: left;
    font: normal normal bold 17px/26px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }
`;

export const DivMinutes = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  border: 1px solid #a8b6ff;
  border-radius: 100%;
  opacity: 1;
`;

export const Input = styled.input`
  width: 11.091rem;
  text-align: left;
  font: normal normal bold 32px/48px Poppins;
  letter-spacing: 0px;
  color: #a8b6ff;
  opacity: 1;
  border-top: none;
  border-right: none;
  border-left: none;
`;

export const DivButtons = styled.div`
  width: 482px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 24.35px;

  button {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #a8b6ff;
    border-radius: 5px;
    opacity: 1;
    width: 99px;
    height: 40px;
  }
`;
