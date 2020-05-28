import React from "react";
import styled from "styled-components";

const CarrinhoLateral = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  border: 1px solid black;
  margin: 30px 20px 0px 20px;
  padding: 5px;
`
const Title = styled.h3`
  margin: 10px 5px;
`
const Produtos = styled.div`
  font-size: 20px;
`

function Carrinho(props) {

  const { meuCarrinho, funcaoRemover } = props;
  const novoCarrinho = []
  let total = 0

  meuCarrinho.forEach(item => {
    
    total += item.valor;

    const estaNoArray = novoCarrinho.findIndex(index => index.id === item.id);
    if (estaNoArray === -1) {
      const produto = {
        id: item.id,
        nome: item.nome,
        qtd: 1,
      }
      novoCarrinho.push(produto)
    } else {
      const qt = novoCarrinho[estaNoArray].qtd;
      novoCarrinho[estaNoArray] = {
        ...novoCarrinho[estaNoArray],
        qtd: qt + 1,
      }
      console.log(novoCarrinho)
    }
  });

  const carrinhoLateral = novoCarrinho.map((produto) =>
    <div>
      <span>{produto.qtd}x - {produto.nome} </span>
      <button onClick={() => funcaoRemover(produto.id)}>X</button>
      <hr />
    </div>
  )

  return <CarrinhoLateral>
    <Title>CARRINHO</Title>
    <Produtos>
      <hr />
      {carrinhoLateral}
      <b>Total:</b> {`R$ ${total.toFixed(2)}`}
    </Produtos>
  </CarrinhoLateral>;
}

export default Carrinho;
