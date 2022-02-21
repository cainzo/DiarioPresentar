
import Home from './componentes/pages/Home';
import Navigation from "./componentes/common/Navigation";
import Loginreg from './componentes/pages/Loginreg';
import { Container } from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <div>
      <Navigation classNamem="" ></Navigation>
       <Loginreg></Loginreg>
    </div>
  );
}

export default App;
