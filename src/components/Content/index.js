import React from "react";
import * as S from "./styles";

function Content() {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>
            Preencha os dados abaixo e descubra quanto custa uma ligação com o
            plano FaleMais
          </S.Title>
        </S.TitleWrapper>
        <form>
          <S.SelectWrapper>
            <S.SelectDiv>
              <S.Label for="origin">DDD de origem</S.Label>
              <S.Select id="origin"></S.Select>
            </S.SelectDiv>
            <S.SelectDiv>
              <S.Label for="origin">DDD de destino</S.Label>
              <S.Select id="origin"></S.Select>
            </S.SelectDiv>
          </S.SelectWrapper>

          <S.RadioWrapper>
            <p>Escolha o plano</p>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </S.RadioWrapper>

          <S.MinutesWrapper>
            <p>Minutos</p>
            <S.DivMinutes>
              <S.Button>-</S.Button>
              <S.Input placehoder="0min"></S.Input>
              <S.Button>+</S.Button>
            </S.DivMinutes>

            <S.DivButtons>
              <button>+5</button>
              <button>+10</button>
              <button>+50</button>
              <button>+100</button>
            </S.DivButtons>
          </S.MinutesWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}

export default Content;
