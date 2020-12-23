import React from "react";
import * as S from "./styles";
import Conditional from "../Conditional";
import { useForm } from "react-hook-form";

function Content() {
  const { register, handleSubmit } = useForm();
  // const [semPlano, setSemPlano] = useState("0.0");
  // const [comPlano, setComPlano] = useState("0.0");

  return (
    <>
      <S.Wrapper>
        <S.Main>
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
                <br />
                <S.Select
                  required
                  ref={register({ required: true })}
                  name="origem"
                >
                  <option value="0.00">011</option>
                  <option value="1.90">016</option>
                  <option value="1.70">017</option>
                  <option value="0.90">018</option>
                </S.Select>
              </S.SelectDiv>
              <S.SelectDiv>
                <S.Label for="origin">DDD de destino</S.Label>
                <br />
                <S.Select
                  required
                  ref={register({ required: true })}
                  name="destino"
                >
                  <option value="1.00">011</option>
                  <option value="1.90">016</option>
                  <option value="1.70">017</option>
                  <option value="0.90">018</option>
                </S.Select>
              </S.SelectDiv>
            </S.SelectWrapper>

            <S.RadioWrapper>
              <p>Escolha o plano</p>
              <input type="radio" required name="plano" ref={register()} />
              <input type="radio" required name="plano" ref={register()} />
              <input type="radio" required name="plano" ref={register()} />
            </S.RadioWrapper>

            <S.MinutesWrapper>
              <p>Minutos</p>
              <S.DivMinutes>
                <S.Button>-</S.Button>
                <S.Input
                  placeholder="0min"
                  required
                  name="minutos"
                  ref={register()}
                ></S.Input>
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

          <Conditional when={true}>
            <S.PriceWrapper>
              <div>
                <S.Text>Essa ligação vai custar</S.Text>
              </div>

              <S.DivPrecos>
                <S.Span1>sem plano</S.Span1>
                <S.Span2>R$ 200,00</S.Span2>
                <S.Span3>
                  No plano <b>FaleMais 60</b>
                </S.Span3>
              </S.DivPrecos>
            </S.PriceWrapper>
          </Conditional>
        </S.Main>
      </S.Wrapper>
    </>
  );
}

export default Content;
