import React, { useState } from "react";
import * as S from "./styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

function Content() {
  const { register, handleSubmit } = useForm();
  const [semPlano, setSemPlano] = useState("0.0");
  const [comPlano, setComPlano] = useState("0.0");

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
    };

    calcular();
  }

  return (
    <>
      <S.Wrapper>
        <S.Inputs>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <select required ref={register({ required: true })} name="origem">
              <option value="" disabled selected>
                Escolha a origem
              </option>
              <option value="0.00">011</option>
              <option value="1.90">016</option>
              <option value="1.70">017</option>
              <option value="0.90">018</option>
            </select>
            <select required ref={register({ required: true })} name="destino">
              <option value="" disabled selected>
                Escolha o destino
              </option>
              <option value="1.00">011</option>
              <option value="1.90">016</option>
              <option value="1.70">017</option>
              <option value="0.90">018</option>
            </select>
            <select required ref={register({ required: true })} name="plano">
              <option value="" disabled selected>
                Escolha o Plano
              </option>
              <option value="30">FaleMais 30</option>
              <option value="60">FaleMais 60</option>
              <option value="120">FaleMais 120</option>
              <option value="0">Sem Plano</option>
            </select>
            <input
              required
              name="minutos"
              placeholder="Quantidade de minutos"
              ref={register({ required: true })}
            ></input>
            <Button type="submit" variant="contained" color="primary">
              Calcular
            </Button>
          </S.Form>
        </S.Inputs>
        <div>
          <S.Text>Com FaleMais: R$ {comPlano} </S.Text>
          <S.Text>Sem Plano: R$ {semPlano}</S.Text>
        </div>
      </S.Wrapper>
    </>
  );
}

export default Content;
