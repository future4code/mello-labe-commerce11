import React from "react";
import styled from "styled-components";

const BarraLateral = styled.div`
  display:flex;
  flex-direction: column;
  padding: 5px;
  font-family: Roboto;
  border: 1px solid black;
  margin: 30px 20px 0px 20px;

`
const SeçãoFiltro = styled.div`
  margin: 10px 5px;
`

const Title = styled.h3`
margin: 10px 5px;
`


function Filter(props) {
  const { funcaoMax, funcaoMin, funcaoRegex } = props;
  return <BarraLateral>
    <Title>FILTROS</Title>
    <SeçãoFiltro>
     <label>Valor Máximo</label> <br />
     <input type="number" onChange={funcaoMax} />
    </SeçãoFiltro>
    <SeçãoFiltro>
     <label>Valor Mínimo</label> <br />
     <input type="number" onChange={funcaoMin} />
    </SeçãoFiltro>
    <SeçãoFiltro>
     <label>Buscar Produtos</label> <br />
     <input onChange={funcaoRegex} />
    </SeçãoFiltro>
  </BarraLateral>;
}

export default Filter;
