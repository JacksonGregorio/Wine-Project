import React from 'react';
import produtos from './context';
import Navbar from '../../navbar/navbar';
import './vitrinecss.css';
import {Link} from 'react-router-dom'






function Vitrine() {

  const vitrine = produtos.map((produto) => {
    return (
      
      <div className="produto" key={produto.id}>
        <Link  key={produto.id} to={`/produto/${produto._id}`}>
        <img src={produto.imagem} alt={produto.id} />
        <br></br>
        <h3>{produto.nome}</h3>
        <p>R$ {produto.valor.toFixed(2)}</p>
        </Link>
      </div>
    );
  });

  return (

    <body>
      <Navbar/>


    <div className="vitrine">

      {vitrine}

    </div>

    </body>
  );

}

export default Vitrine;