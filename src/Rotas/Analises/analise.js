import React from 'react';
import Navbar from '../../navbar/navbar';
import bar from '../../Fotos/bar-tender.jpg';
import bar2 from '../../Fotos/barreact.jpg';





function Analise() {

  return (

    <body>
      
<Navbar></Navbar>

<section class="flexbox">



 <br></br>
<div>

<h1>Pagina de Analises</h1>

<br></br>

  
  <div className='container2'>

    <div>

  <img src={bar} className= 'detalhesimg' ></img>

  <br></br>

    <p className='textevinho'>
    Degustar um vinho é muito mais do que simplesmente tomar uma taça e beber. A degustação é 
    um processo que envolve os sentidos, permitindo que você possa apreciar as características do 
    vinho e compreender melhor suas nuances. Se você deseja aprimorar seus conhecimentos sobre vinho,
    aprender a degustar é um bom começo.
    O primeiro passo para degustar um vinho é observar sua aparência. A cor do vinho pode indicar a 
    idade, a uva e a região de produção. Em seguida, você deve sentir o aroma do vinho, fazendo um 
    giro suave na taça para liberar os aromas. Preste atenção aos aromas primários, como frutas e 
    flores, aos secundários, como carvalho e especiarias, e aos aromas terciários, como nozes e 
    couro.
    <br></br>
    Agora é hora de provar o vinho. Tome um gole pequeno e deixe-o na boca por alguns segundos, 
    permitindo que os sabores e as texturas se revelem. Procure por sabores primários, secundários e 
    terciários e avalie a intensidade do sabor, o corpo do vinho e sua acidez. É importante lembrar 
    que a degustação deve ser feita em um ambiente calmo e silencioso, sem distrações, para que você
    possa se concentrar no vinho.
    </p>
    <br></br>
    </div>

    <div>

      <img src={bar2} className= 'detalhesimg' ></img>

      <br></br>
    <p className='textevinho'>
      Ao engolir o vinho, preste atenção ao retrogosto, que é a sensação deixada após a degustação.
      O retrogosto pode indicar a qualidade do vinho e fornecer informações sobre sua complexidade e
      equilíbrio. Por fim, dê uma nota para o vinho em relação à aparência, aroma, sabor e retrogosto.
      A degustação de vinho é uma atividade que requer prática e paciência. Quanto mais você degusta,
      mais facilmente será capaz de identificar os diferentes sabores e aromas do vinho. Lembre-se
      também de que o vinho é um produto subjetivo e que o que é agradável para uma pessoa pode não
      ser para outra. A degustação de vinho é, acima de tudo, uma jornada de descoberta e prazer.
    </p>


    </div>
     </div>
        </div>


  </section>

    </body>
 
  );
}

  export default Analise;