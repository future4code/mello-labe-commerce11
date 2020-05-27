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
    <input placeholder="Maximo" type="number" onChange={funcaoMax} />
    <input placeholder="Minimo" type="number" onChange={funcaoMin} />
    <input placeholder="Pesquisar" onChange={funcaoRegex} />
  </BarraLateral>;
}

export default Filter;
