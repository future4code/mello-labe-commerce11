import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px dotted orange;
  margin-top: 5px;
`;
const Imagem = styled.img``;

const BotaoAdicionar = styled.button`
  margin: 5px;
`;

const Descricao = styled.p`
  margin: 5px;
`

function CardProduto(props) {
  const { produto, funcao } = props;

  return (
    <CardContainer>
      <Imagem src={produto.imgUrl} />
      <Descricao>{produto.nome}</Descricao>
      <Descricao>R$: {produto.valor.toFixed(2)}</Descricao>
      <BotaoAdicionar onClick={funcao}>Adicionar ao Carrinho</BotaoAdicionar>
    </CardContainer>
  );
}

export default CardProduto;
