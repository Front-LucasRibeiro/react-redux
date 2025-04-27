import ilustracao from "@assets/images/ilustracao-cadastro.png";
import Botao from "@components/Botao";
import { RadioGroup, RadioInput } from "@components/BotaoRadio";
import CampoTexto from "@components/CampoTexto";
import Fieldset from "@components/Fieldset";
import Form from "@components/Form/Form";
import Label from "@components/Label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { defineOrcamentoDiario, defineUsuario } from "src/redux/slices/usuarioSlice.js";
import {
  Container,
  Description,
  Illustration,
  Section,
  SectionWrapper,
  Title,
} from "./style.js";

const Cadastro = () => {
  const dispatch = useDispatch(); // retorna uma funcão que retorna uma action função para atualizar o estado
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [renda, setRenda] = useState("");
  const [objetivoFinanceiro, setObjetivoFinanceiro] = useState("");

  // O componente Cadastro dispara a ação defineUsuario utilizando o hook useDispatch(),
  // e o reducer atualiza o estado do usuário após receber a ação. Além disso, a store notifica os componentes da UI para re-renderizar.
  const aoSubmeterFormulario = (evento) => {
    evento.preventDefault();
    dispatch(defineUsuario({ nome, renda, objetivoFinanceiro })); // enviando dados para os estados globais
    dispatch(defineOrcamentoDiario(renda))
    navigate("/home");
  };

  return (
    <Section>
      <SectionWrapper>
        <Container>
          <Title>Configuração financeira</Title>
          <Description>
            Boas-vindas à plataforma que protege seu bolso! Antes de começar,
            precisamos de algumas informações sobre sua rotina financeira. Vamos
            lá?
          </Description>
          <Form>
            <Fieldset>
              <Label htmlFor="nome">Nome</Label>
              <CampoTexto
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="renda">Renda mensal total</Label>
              <CampoTexto
                type="text"
                name="renda"
                value={renda}
                onChange={(e) => setRenda(e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Label>Selecione seu objetivo financeiro:</Label>
              <RadioGroup>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="economizar"
                    value="economizar"
                    checked={objetivoFinanceiro === "economizar"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="economizar">Economizar</Label>
                </RadioInput>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="investir"
                    value="investir"
                    checked={objetivoFinanceiro === "investir"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="investir">Investir</Label>
                </RadioInput>
                <RadioInput>
                  <input
                    type="radio"
                    name="objetivo"
                    id="controle-gastos"
                    value="controlar-gastos"
                    checked={objetivoFinanceiro === "controlar-gastos"}
                    onChange={(e) => setObjetivoFinanceiro(e.target.value)}
                  />
                  <Label htmlFor="controle-gastos">Controlar gastos</Label>
                </RadioInput>
              </RadioGroup>
            </Fieldset>
          </Form>
          <Botao $variante="primario" onClick={aoSubmeterFormulario}>
            Ir para o app
          </Botao>
        </Container>
        <Illustration
          src={ilustracao}
          alt="ilustração da tela de cadastro. Um avatar mexendo em alguns gráficos"
        />
      </SectionWrapper>
    </Section>
  );
};

export default Cadastro;
