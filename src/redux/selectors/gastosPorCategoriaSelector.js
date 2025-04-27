import { createSelector } from "@reduxjs/toolkit";

const getTransacoes = (state) => state.transacoes.transacoes;

export const gastosPorCategoria = createSelector(
  [getTransacoes],
  (transacoes) => {
    return transacoes
      .filter((transacao) => transacao.tipo === "despesa")
      .reduce((valorAcumulado, transacao) => {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
        return valorAcumulado;
      }, {});
  }
);