import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vitrine from './Rotas/Vinhos/Vitrine'
import Produto from './Rotas/Vinhos/Produto';





function App() {
  return (

    <Router>
        <Routes>
        <Route exact path='/' element={<Vitrine/>}></Route>
        <Route path="/Produto/:id" component={<Produto/>} />
        </Routes>
    </Router>
    


  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;


