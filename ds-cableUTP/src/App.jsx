import './App.scss';
import Descripcion from './components/descripcion';
import Especificaciones from "./components/especificaciones";
import cableUTP from "./assets/img/cableUTP.jpg";
import Descargar from './components/descargar';
import Nombre from './components/nombre';
import Precio from './components/precio';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Buscar from './components/buscar';

function App() {

  return (
    <div className="main-container">
          <div className="item-buscar">
            <Buscar/>
          </div>

        <div className="item-container">
          <Nombre/>

          <div className="item-container-elements">
            <div className="item-container-elements-text">
              <Descripcion/>
            </div>

            <div className="item-container-elements-img">
                <img src={cableUTP} />
            </div>
          </div>

          <div className="item-container-price">
            <Precio/>
          </div>

          <div className="item-container-download">
             <Descargar/>
          </div>
                  
          <div className="item-container-specs">
              <Especificaciones/>
          </div>   
        </div>  
      
          
    </div>
  )
}

export default App
