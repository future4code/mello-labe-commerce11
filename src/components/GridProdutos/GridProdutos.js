import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
`;

const Header = styled.div``;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid red;
`;

function GridProdutos(props) {
  return (
    <MainContainer>
      <Header>Cabecalho</Header>
      <ContainerProdutos>
        {props.listaProdutos.map((produto) => (
          <div>{produto.nome}</div>
        ))}
      </ContainerProdutos>
    </MainContainer>
  );
}

export default GridProdutos;
