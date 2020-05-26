import React from "react";
import styled from "styled-components";

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid red;
`

function GridProdutos() {
  return <ContainerProdutos>
      <h2>Produtos</h2>
  </ContainerProdutos>;
}

export default GridProdutos;
