import styled from "styled-components";
import Photo from "./assets/vir.png";

export const Wrapper = styled.div`
  display: flex;
  background-color: #f7f7f7;
  width: 100%;
  height: 50rem;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 28.938rem;
  height: 50rem;
  background: url(${Photo}) 0% 0% no-repeat padding-box;
  background-size: cover;
`;
