// slices - estados da aplicação 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nome: "",
  renda: "",
  objetivoFinanceiro: "",
  orcamentoDiario: 0,
};


// reducers - responsaveis por executar as actions, objeto que contém funções que manipulam o estado.
const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    // cria uma action
    defineUsuario: (state, action) => {
      const { nome, renda, objetivoFinanceiro } = action.payload;
      state.nome = nome;
      state.renda = renda;
      state.objetivoFinanceiro = objetivoFinanceiro;
    },
    defineOrcamentoDiario: (state, action) => {
      const renda = action.payload
      state.renda = parseFloat(renda)
      state.orcamentoDiario = Math.floor(renda / 30)
    },
    atualizaOrcamento: (state, action) => {
      let valor = Math.abs(action.payload.valor)

      if (action.payload.tipo !== 'receita') {
        valor = -(valor)
      }

      state.orcamentoDiario += parseFloat(valor)
    },
    atualizaSaldoOrcamento: (state, action) => {
      const saldo = action.payload;
      state.orcamentoDiario += parseFloat(saldo);
    },
  },
});

export const { defineUsuario, defineOrcamentoDiario, atualizaOrcamento, atualizaSaldoOrcamento, } = usuarioSlice.actions; // .actions objeto retornado pelo createSlice

export default usuarioSlice.reducer;
