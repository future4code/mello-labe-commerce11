import React from "react";
import styled from "styled-components";
import CardProduto from "../CardProduto/CardProduto";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  border: 1px solid red;
`;

function GridProdutos(props) {
  const { produtos, funcaoAdicionar } = props;

  return (
    <MainContainer>
      <Header><p>Produtos</p><p>Ordenar</p></Header>
      <ContainerProdutos>
        {produtos.map((item) => 
          <CardProduto key={item.id} produto={item} funcao={() => funcaoAdicionar(item)} />
        )}
      </ContainerProdutos>
    </MainContainer>
  );
}

export default GridProdutos;
