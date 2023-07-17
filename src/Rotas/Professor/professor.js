import React from 'react';
import Navbar from '../../navbar/navbar';
import reporta from '../../Fotos/report (6).pdf'







function Professor() {

  return (


    <body>
      
      <Navbar></Navbar>

      <main>

        <section class="flexbox">

        <div>
        <h1>Pagina Professor</h1>
         <br></br>
        <div>

          
          <div className='container2'>

          <br></br>

         <h2>Dados aluno</h2>

          

            <p className='textevinho'>

                Nome:Jackson De Lima Gregório

                <br></br>

                CB:3013189

                <br></br>



              <br></br>
            </p>
          </div>

          <br></br>

    <div className='container2'>

    <h2>Iformações site</h2>

   <p className='textevinho'>

       <strong>Palavras Chaves</strong>: Vinho, Preço e melhor
       <br></br>
       <strong>Sitemap</strong>:http://qualmelhorvinho.epizy.com/sitemap.xml
       <br></br>
       <strong>Robots</strong>:http://qualmelhorvinho.epizy.com/robots.txt
     <br></br>
       <strong>Relátorio Analytics</strong>:<a href={reporta}> baixa aqui</a>
     <br></br>
   </p>
   </div>
               
    </div>
    </div>
    </section>
    </main>
        

    </body>
 
 
  );
}
export default Professor;