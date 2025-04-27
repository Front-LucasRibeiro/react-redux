import {
  Cartao,
  CartaoCabecalho,
  CartaoCorpo,
  Descricao,
} from "@components/Cartao";
import { PigIcon } from "@components/Icones";
import BarraProgresso from "@components/MetaFinanceira/BarraProgresso/BarraProgresso";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TituloMetaFinanceira = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  font-size: var(--fonte-l);
  color: var(--cor-secundaria-receita);
  margin: 0;
`;

const MetaFinanceira = () => {
  const objetivoFinanceiro = useSelector(
    (state) => state.usuario.objetivoFinanceiro
  );
  
  const objetivosTipos = useSelector((state) => state.objetivos.objetivo);
  console.log(objetivosTipos)
  const objetivos = objetivosTipos[objetivoFinanceiro] || "";

  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>
          <TituloMetaFinanceira>
            <PigIcon />
            {objetivos}
          </TituloMetaFinanceira>
          <BarraProgresso />
        </Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default MetaFinanceira;
