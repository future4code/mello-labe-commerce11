import React from "react";
import styled from "styled-components";

const BarraLateral = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid orange;
`

function Filter() {
  return <BarraLateral>
      <h2>Filtros</h2>
  </BarraLateral>;
}

export default Filter;
