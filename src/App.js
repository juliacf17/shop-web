import './App.css';
import Carrusel from './Carrusel';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <div classname="shop-name">
            <p>Ropa y complementos Lorenzo</p>
          </div>        
      </div>
      <div className="main">
          <Carrusel/>
      </div>
      <div className="footer"> 
        <p>Dirección: Calle Mayor 8, Almendricos, Murcia | Teléfono: +34 617 588 867</p>
      </div>    
    </div>
  );
}


export default App;
