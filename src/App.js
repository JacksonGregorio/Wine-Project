
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vitrine from './Rotas/Vinhos/Vitrine';
import Produto from './Rotas/Vinhos/Produto';
import Mais from './Rotas/Mais/mais';
import Professor from './Rotas/Professor/professor';
import Analise from './Rotas/Analises/analise';
import ReactGA from "react-ga";

const TRACKING_ID = "G-N1ZXGPEKVB";
ReactGA.initialize(TRACKING_ID);





function App() {
  return (

    <Router>
        <Routes>
        <Route exact path='/' element={<Vitrine/>}></Route>
        <Route path="/produto/:id" element={<Produto/>} />
        <Route path='/Mais' element={<Mais/>}></Route>
        <Route path='/Professor' element={<Professor></Professor>}></Route>
        <Route path='/Analise' element={<Analise/>}></Route>
        </Routes>
    </Router>
    


  );
}

ReactDOM.render(<App/>, document.getElementById('root'));


export default App;


