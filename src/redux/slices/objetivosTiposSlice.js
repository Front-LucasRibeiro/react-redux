import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objetivo: {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  },
};

const objetivosTiposSlice = createSlice({
  name: "objetivos",
  initialState,
});

export default objetivosTiposSlice.reducer;