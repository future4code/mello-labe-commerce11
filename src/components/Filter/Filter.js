import React from "react";
import styled from "styled-components";

const BarraLateral = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid orange;
`


function Filter(props) {
  const { funcaoMax, funcaoMin, funcaoRegex } = props;
  return <BarraLateral>
    <h1>Pesquisar Produtos:</h1>
    <label>Valor Máximo:</label>
    <input placeholder="Maximo" type="number" onChange={funcaoMax} />
    <label>Valor Mínimo':</label>
    <input placeholder="Minimo" type="number" onChange={funcaoMin} />
    <label>Buscar Produto:</label>
    <input placeholder="Pesquisar" onChange={funcaoRegex} />
  </BarraLateral>;
}

export default Filter;
