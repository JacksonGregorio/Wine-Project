import React from 'react';
import Vinhos from './context';
import Navbar from '../../navbar/navbar';


function Produto(props) {

      const produto = Vinhos.find((p) => p.id === parseInt(props.match.params.id));
      if (!produto) {
        return(
        <body>
        <Navbar></Navbar>
        <div><p color="White">Produto não encontrado!</p></div>
        </body>
        );
      }
    return (
      <body>
        <Navbar></Navbar>
      <div>
        <h2>{produto.nome}</h2>
        <img src={produto.imagem} alt={produto.nome} />
        <p>{produto.valor}</p>
      </div>
      </body>
    );
  }

  export default Produto;