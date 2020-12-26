import styled from "styled-components";
import Photo from "./assets/vir.png";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  background-color: #f7f7f7;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
  `}
`;

export const ImageWrapper = styled.div`
  width: 32%;
  background: url(${Photo}) 0% 0% no-repeat padding-box;
  background-size: cover;
  background-position-x: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 72px;
    font-family: "poppins";
    font-weight: 800;
    color: #fff;

    ${media.lessThan("small")`
    font-size: 45px;

  `}
  }

  ${media.lessThan("large")`
    width: 100vw;
    height: 35vh;


  `}
`;
