import styled from "styled-components";
import Photo from "./assets/vir.png";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  background-color: #f7f7f7;
  width: 100%;
  min-height: 100vh;
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
  `}
`;

export const ImageWrapper = styled.div`
  width: 32%;
  height: 100vh;
  background: url(${Photo}) 0% 0% no-repeat padding-box;
  background-size: cover;

  ${media.lessThan("medium")`
    width: 100vw;
    height: 55vh;

  `}
`;
