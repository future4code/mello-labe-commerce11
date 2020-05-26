import React from "react";
import styled from "styled-components";
import CardProduto from "../CardProduto/CardProduto";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Quantidade = styled.p`
  padding: 10px;
`;

const Ordenacao = styled.select`
  margin-right: 10px;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* Funciona com grid e flex, gostei mais de flex, mas vou deixar  o grid aqui por enquanto
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; 
  */
  padding: 10px;
  border: 1px solid red;
`;

function GridProdutos(props) {
  const { produtos, ordenacao, funcaoAdicionar, funcaoOrdenacao } = props;

  switch(ordenacao){
    case "crescente":
      produtos.sort((a, b)=> a.valor - b.valor)
      break
    case "decrescente":
      produtos.sort((a, b)=> b.valor - a.valor)
      break
    default:
      break  
  }

  return (
    <MainContainer>
      <Header>
        <Quantidade>Quantidade de Produtos: {produtos.length}</Quantidade>
        <Ordenacao onChange={funcaoOrdenacao}>
          <option value="crescente">Preço: Crescente</option>
          <option value="decrescente">Preço: Decrescente</option>
        </Ordenacao>
      </Header>
      <ContainerProdutos>
        {produtos.map((item) => (
          <CardProduto
            key={item.id}
            produto={item}
            funcao={() => funcaoAdicionar(item)}
          />
        ))}
      </ContainerProdutos>
    </MainContainer>
  );
}

export default GridProdutos;
