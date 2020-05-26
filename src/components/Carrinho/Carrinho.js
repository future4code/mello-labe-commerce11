import React from "react";
import styled from "styled-components";

const CarrinhoLateral = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

function Carrinho(props) {
  let soma = 0;
  const comprar = props.meuCarrinho.map((produto) => {
    return soma += produto.valor
  });

  return <CarrinhoLateral>
      <h2>Carrinho</h2>
      {props.meuCarrinho.map((produto) => 
        <div>
          <span>{produto.nome} </span>
          <b> X</b>
          <hr />
        </div>
      )}
      <div>{`R$ ${soma}`}</div>
  </CarrinhoLateral>;
}

export default Carrinho;
