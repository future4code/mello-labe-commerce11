import React from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";

const CarrinhoLateral = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

function Carrinho(props) {

  const { meuCarrinho, funcaoRemover } = props;

  let soma = 0;
  const comprar = meuCarrinho.map((produto) => {
    return soma += produto.valor
  });

  

  return <CarrinhoLateral>
      <h2>Carrinho</h2>
      {meuCarrinho.map((produto) => 
        <div>
          <span>{produto.nome} </span>
          <button onClick={() => funcaoRemover(produto.id)}>X</button>
          <hr />
        </div>
      )}
      <div>{`R$ ${soma.toFixed(2)}`}</div>
  </CarrinhoLateral>;
}

export default Carrinho;
