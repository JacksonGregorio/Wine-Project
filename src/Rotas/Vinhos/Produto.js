import React from 'react';
import Vinhos from './context';
import Navbar from '../../navbar/navbar';
import {useParams } from 'react-router-dom';
import './produtos.css'



function Produto() {
  const { id } = useParams();
  const produto = Vinhos.find((p) => p._id === Number(id));
  return (
    <div>
      {produto ? (
        <React.Fragment>
          <head>
            <meta name='keywords' content='vinho, preço, qual melhor'></meta>
            
          </head>
          <body>
          <Navbar></Navbar>
          <div  className='container '>
          <div className='detalhes'>
          <div>
          <h2>{produto.nome}</h2>
          <div>
          <img src={produto.imagem} alt={produto.nome} className='detalhesimg'/>
          <p>{produto.desc}</p>
          </div>
          <h3>Valor R$:{produto.valor}</h3>
          </div>
          </div>
          </div>
          </body>
        </React.Fragment>
      ) : (
        <body>
        <Navbar></Navbar>
        <div className='alert'><h1>Produto não encontrado!</h1></div>
        </body>
      )}
    </div>
  );
}

  export default Produto;