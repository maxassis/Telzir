import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  margin-top: 3rem;
  opacity: 1;
  display: flex;
  flex-direction: column;
  width: 68%;
  padding-top: 3rem;
  align-items: center;
  justify-content: flex-end;

  ${media.lessThan("medium")`
    margin-top: 0px;
    padding-top: 0rem;

  `}
`;

export const Main = styled.main`
  background: #ffffff;
  width: 80%;
  box-shadow: 0px 3px 16px #00000029;
  border-radius: 16px 16px 0px 0px;
  height: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  max-width: 720px;

  ${media.lessThan("medium")`
    width: 70vw;
    box-sizing: content-box;
    margin-top: -60px;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: 6rem;
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
  grid-gap: 29px;
`;

export const Label = styled.label`
  font: normal normal bold 17px/26px Poppins;
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
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
  outline: none;

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
    font: normal normal bold 18px/27px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;

    :active {
      color: red;
      border-color: #f87d4f;
    }

    :hover {
      color: red;
      border-color: #f87d4f;
    }

    :focus {
      color: red;
      border-color: #f87d4f;
    }
  }
`;

export const RadioWrapper = styled.div`
  margin-top: 32px;

  p {
    text-align: left;
    font: normal normal bold 17px/26px Poppins;
    letter-spacing: 0px;
    color: #3f51b5;
    opacity: 1;
  }
`;

export const MinutesWrapper = styled.div`
  margin-top: 32px;

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
  font: normal normal bold 32px/48px Poppins;
  letter-spacing: 0px;
  color: #a8b6ff;
  opacity: 1;
  border: none;
  border-bottom: 2px solid #a8b6ff;
  border-radius: 0;
  text-align: center;
  margin: 0 20px 0 20px;
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
  font: normal normal bold 17px/26px Poppins;
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
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #141414;
  opacity: 1;
`;

export const Span2 = styled.span`
  font: normal normal bold 42px/63px Poppins;
  letter-spacing: 0px;
  color: #3f51b5;
  opacity: 1;
`;

export const Span3 = styled.span`
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  font: normal normal normal 14px/20px Poppins;
`;
