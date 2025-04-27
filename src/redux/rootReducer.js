import { combineReducers } from "@reduxjs/toolkit";
import objetivosTipoSlice from './slices/objetivosTiposSlice';
import usuarioSlice from './slices/usuarioSlice';
import transacoesSlice from './slices/transacoesSlice';
import contasSlice from "./slices/contasSlice";


const rootReducer = combineReducers({
  usuario: usuarioSlice,
  objetivos: objetivosTipoSlice,
  transacoes: transacoesSlice,
  contas: contasSlice,
})

export default rootReducer;