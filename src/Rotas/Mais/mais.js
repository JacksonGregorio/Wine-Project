import React from 'react';
import Navbar from '../../navbar/navbar';
import './mais.css';
import imgwine from '../../Fotos/Vinho-Argentino.jpg';
import imghist from '../../Fotos/wine-greeg.jpg';
import imggirl from '../../Fotos/winegirl.jpg';





function Mais() {

  return (

    <body>
      
        <Navbar></Navbar>
        <main>

        <section class="flexbox">

        <div>
        <h1>O'que é vinho</h1>
         <br></br>
        <div>

          
          <div className='container2'>

          <img src={imghist} className= 'detalhesimg' ></img>

          <br></br>

            <p className='textevinho'>
              Vinho do grego clássico "οἶνος transl. oínos, através do latim vīnum, "que tanto podem significar "vinho" como "videira" é, genericamente, uma bebida alcoólica produzida por fermentação do sumo de uva.
              <br></br>Na União Europeia, o vinho é legalmente definido como o produto obtido exclusivamente por
              fermentação parcial ou total de uvas frescas, inteiras ou esmagadas, ou de mostos.No Brasil,
               é considerado vinho a bebida obtida pela fermentação alcoólica de mosto de uva sã, fresca e
               madura, sendo proibida a aplicação do termo a produtos obtidos a partir de outras matérias-primas.
               <br></br>A constituição química das uvas permite que estas fermentem sem que lhes sejam adicionados
               açúcares, ácidos, enzimas ou outros nutrientes.<br></br>
            </p>
          </div>
           
           <div className='container2'>
           <br></br>

           <img src={imgwine} className= 'detalhesimg' ></img>

           <br></br>

             <p className='textevinho'>
               Apesar de existirem outros frutos como a maçã
               ou algumas bagas que também possam ser fermentados, os "vinhos" resultantes são geralmente
               designados em função do fruto a partir do qual são obtidos por exemplo vinho-de-maçã e
               são genericamente conhecidos como vinhos de frutas.,O termo vinho ou seus equivalen
               tes em outras línguas é definido por lei em muitos países. A fermentação das uvas é
               feita por vários tipos de leveduras que consomem os açúcares presentes nas uvas
               transformando-os em álcool. Dependendo do tipo de vinho, podem ser utilizadas grandes
               variedades de uvas e de leveduras.<br></br>
             </p>
           </div>
           
           <div className='container2'>

            <br></br>

           <img src={imggirl} className= 'detalhesimg' ></img>

           <br></br>


             <p className='textevinho'>
               O vinho possui uma longa história que remonta pelo
               menos a aproximadamente 6000 a. C., pensando-se que tenha tido origem nos atuais
               territórios da Geórgia, Turquia ou Irã. Crê-se que o seu aparecimento na
               Europa ocorreu há aproximadamente 6500 anos, nas atuais Bulgária ou Grécia. Era muito comum
               na Grécia e Roma antigas. O vinho tem desempenhado um papel importante em várias religiões
               desde tempos antigos. O deus grego Dioniso e o deus romano Baco representavam o vinho, e
               ainda hoje o vinho tem um papel central em cerimônias religiosas cristãs e judaicas como a
               Eucaristia e o Kidush.
             </p>
           </div>
          
        </div>
        </div>

        </section>

        </main>

    </body>
 
  );
}

  export default Mais;