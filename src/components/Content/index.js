import React, { Fragment, useState, useEffect } from "react";
import * as S from "./styles";
import Conditional from "../Conditional";
import { useForm } from "react-hook-form";

function Content() {
  const { register, handleSubmit } = useForm();
  const [semPlano, setSemPlano] = useState("0.0");
  const [comPlano, setComPlano] = useState("0.0");
  const [planoSelecionado, setPlanoSelecionado] = useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [DDDSelecionado, setDDDSelecionado] = useState([]);

  function menos1() {
    const atual = document.getElementById("minutos").value;
    if (atual > 0) {
      const novo = atual - 1;
      document.getElementById("minutos").value = novo;
    }
  }

  function mais1() {
    const atual = document.getElementById("minutos").value;
    const novo = atual - -1;
    document.getElementById("minutos").value = novo;
  }

  function mais5() {
    const atual = document.getElementById("minutos").value;
    const novo1 = atual - -5;
    document.getElementById("minutos").value = novo1;
  }

  function mais10() {
    const atual = document.getElementById("minutos").value;
    const novo2 = atual - -10;
    document.getElementById("minutos").value = novo2;
  }

  function mais50() {
    const atual = document.getElementById("minutos").value;
    const novo3 = atual - -50;
    document.getElementById("minutos").value = novo3;
  }

  function mais100() {
    const atual = document.getElementById("minutos").value;
    const novo4 = atual - -100;
    document.getElementById("minutos").value = novo4;
  }

  function onSubmit(data) {
    console.log(data);

    const calcular = () => {
      const tarifa = parseFloat(data.origem) + parseFloat(data.destino);
      const minutos = parseFloat(data.minutos);
      const plano = parseFloat(data.plano);

      const soma = (minutos - plano) * tarifa;
      const porcentagem = soma * 0.1;
      const comFaleMais = porcentagem + soma;
      comFaleMais > 0
        ? setComPlano(comFaleMais.toFixed(2))
        : setComPlano("0.00");

      const semFaleMais = minutos * tarifa;
      setSemPlano(semFaleMais.toFixed(2));

      setPlanoSelecionado(plano);

      setShowPrice(true);
    };

    data.minutos > 0 && data.plano !== "" && calcular();
  }

  useEffect(() => {
    function DDDSelect() {
      const DDD = "0.00";

      DDD === "0.00" &&
        setDDDSelecionado([
          { id: "Destino16", value: "1.90", title: "016" },
          { id: "Destino17", value: "1.70", title: "017" },
          { id: "Destino18", value: "0.90", title: "018" },
        ]);
    }

    DDDSelect();
  }, []);

  function DDDSelect(event) {
    const DDD = event.target.value;

    switch (DDD) {
      case "0.00": {
        setDDDSelecionado([
          { id: "Destino16", value: "1.90", title: "016" },
          { id: "Destino17", value: "1.70", title: "017" },
          { id: "Destino18", value: "0.90", title: "018" },
        ]);
        break;
      }
      case "1.90": {
        setDDDSelecionado([{ id: "Destino11", value: "1.00", title: "011" }]);
        break;
      }
      case "1.70": {
        setDDDSelecionado([{ id: "Destino11", value: "1.00", title: "011" }]);
        break;
      }
      case "0.90": {
        setDDDSelecionado([{ id: "Destino11", value: "1.00", title: "011" }]);
        break;
      }
      default:
        break;
    }
  }

  return (
    <Fragment>
      <S.Wrapper>
        <S.Main>
          <S.TitleWrapper>
            <S.Title>
              Preencha os dados abaixo e descubra quanto custa uma ligação com o
              plano Fale Mais
            </S.Title>
          </S.TitleWrapper>

          <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
            <S.SelectWrapper>
              <S.SelectDiv>
                <S.Label for="origem">DDD de origem</S.Label>
                <br />
                <S.Select
                  required
                  ref={register({ required: true })}
                  name="origem"
                  id="CidadeOrigem"
                  onChange={DDDSelect}
                >
                  <option id="Origem11" value="0.00">
                    011
                  </option>
                  <option id="Origem16" value="1.90">
                    016
                  </option>
                  <option id="Origem17" value="1.70">
                    017
                  </option>
                  <option id="Origem18" value="0.90">
                    018
                  </option>
                </S.Select>
              </S.SelectDiv>
              <S.SelectDiv>
                <S.Label for="destino">DDD de destino</S.Label>
                <br />
                <S.Select
                  required
                  ref={register({ required: true })}
                  name="destino"
                  id="CidadeDestino"
                >
                  {DDDSelecionado.map(function (user, i) {
                    return (
                      <option id={user.id} value={user.value} key={i}>
                        {user.title}
                      </option>
                    );
                  })}
                </S.Select>
              </S.SelectDiv>
            </S.SelectWrapper>

            <S.RadioWrapper>
              <p>Escolha o plano</p>

              <S.DivRadio>
                <input
                  type="radio"
                  id="fale30"
                  name="plano"
                  requirede
                  ref={register}
                  value="30"
                />
                <label for="fale30">Fale mais 30</label>
                <input
                  type="radio"
                  id="fale60"
                  name="plano"
                  ref={register}
                  value="60"
                />
                <label for="fale60">Fale mais 60</label>
                <input
                  type="radio"
                  id="fale120"
                  name="plano"
                  ref={register}
                  value="120"
                />
                <label for="fale120">Fale mais 120</label>
              </S.DivRadio>
            </S.RadioWrapper>

            <S.MinutesWrapper>
              <p>Minutos</p>
              <S.DivMinutes>
                <S.Button onClick={menos1}>-</S.Button>
                <S.Input
                  placeholder="0min"
                  id="minutos"
                  required
                  name="minutos"
                  type="number"
                  ref={register()}
                ></S.Input>
                <S.Button onClick={mais1}>+</S.Button>
              </S.DivMinutes>
            </S.MinutesWrapper>

            <S.DivButtons>
              <button onClick={mais5}>+5 min</button>
              <button onClick={mais10}>+10 min</button>
              <button onClick={mais50}>+50 min</button>
              <button onClick={mais100}>+100 min</button>
            </S.DivButtons>
          </form>
          <Conditional when={showPrice}>
            <S.PriceWrapper>
              <div>
                <S.Text>Essa ligação vai custar</S.Text>
              </div>

              <S.DivPrecos>
                <S.Span1>
                  <span>R${semPlano}</span>&nbsp;sem plano
                </S.Span1>
                <S.Span2>R${comPlano}</S.Span2>
                <S.Span3>
                  no plano <span>FaleMais&nbsp;{planoSelecionado}</span>
                </S.Span3>
              </S.DivPrecos>
            </S.PriceWrapper>
          </Conditional>
        </S.Main>
      </S.Wrapper>
    </Fragment>
  );
}

export default Content;
