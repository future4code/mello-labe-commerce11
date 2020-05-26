import React from "react";
import styled from "styled-components";

const CarrinhoLateral = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

function Carrinho() {
  return <CarrinhoLateral>
      <h2>Carrinho</h2>
  </CarrinhoLateral>;
}

export default Carrinho;
