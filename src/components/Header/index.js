import React from "react";
import * as S from "./styles";
import Logo from "../../Assets/logo.png";

function Header() {
  return (
    <>
      <S.Wrapper>
        <S.ImageWrapper>
          <S.Image src={Logo} />
          <S.Text variant="h6" gutterBottom>
            Calcule o valor de suas ligaçoes com o plano FaleMais da Telzir
          </S.Text>
        </S.ImageWrapper>
      </S.Wrapper>
    </>
  );
}

export default Header;
