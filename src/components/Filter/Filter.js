import React from "react";
import styled from "styled-components";

const BarraLateral = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid orange;
`


function Filter(props) {

  const onChangeMin = (e) => {
    const value = Number(e.target.value)
    const novoFiltro = {"valorMinimo": value}

    props.onChangeFilter(novoFiltro)
    console.log(novoFiltro)
  }

  const onChangeMax = (e) => {
    const value = Number(e.target.value)
    const novoFiltro = {"valorMaximo": value}

    props.onChangeFilter(novoFiltro)
    console.log(novoFiltro)
  }

  

  

  


  return <BarraLateral>
      <h2>Filtros:</h2>
     <label>Valor Mínimo:</label>
     <input 
      type="number"
      min={0}
      name="valorMinimo"
      onChange={onChangeMin}
     />
     <label>Valor Máximo:</label>
     <input
       type="number"
       max={0}
       name="valorMaximo"
       onChange={onChangeMax}
     />
     <label>Buscar Produtos:</label>
     <input 
      type="text"
      name="busca"
      value={props.valorInput}
      onChange={""}
     />

  </BarraLateral>;
}

export default Filter;
