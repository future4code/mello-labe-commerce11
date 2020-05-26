import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px dotted orange;
  height: 400px;
`;
const Imagem = styled.img``;

const BotaoAdicionar = styled.button``;

function CardProduto(props) {
  const { produto, funcao } = props;

  return (
    <CardContainer>
      <Imagem src={produto.imgUrl} />
      <p>{produto.nome}</p>
      <p>{produto.valor}</p>
      <BotaoAdicionar onClick={funcao}>Adicionar ao Carrinho</BotaoAdicionar>
    </CardContainer>
  );
}

export default CardProduto;
