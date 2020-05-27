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
  const novoCarrinho = []

  meuCarrinho.forEach(item => {
    const estaNoArray = novoCarrinho.findIndex(index => index.id === item.id);
    if(estaNoArray === -1){
      const produto = {
        id:item.id,
        nome: item.nome,
        qtd: 1,
      }
      novoCarrinho.push(produto)
    } else {
      const qt = novoCarrinho[estaNoArray].qtd;
      const produto = {
        id:item.id,
        nome: item.nome,
        qtd: qt + 1,
      }
    }
    });

  let soma = 0;

  const comprar = meuCarrinho.map((produto) => {
    return soma += produto.valor
  });

  const carrinhoLateral = novoCarrinho.map((produto) => 
    <div>
      <span>{produto.qtd}x-{produto.nome} </span>
      <button onClick={() => funcaoRemover(produto.id)}>X</button>
      <hr />
    </div>
  )

  return <CarrinhoLateral>
      <h2>Carrinho</h2>
      {carrinhoLateral}
      <div>{`R$ ${soma.toFixed(2)}`}</div>
  </CarrinhoLateral>;
}

export default Carrinho;
