import 'bootstrap/dist/css/bootstrap.min.css';
import Entrada from './Entrada';
import './App.css'

function App() {
  return (
    <div className = 'App' >
      <header className="App-header">
      <Entrada name = 'Entrada 1: Microfone'></Entrada>
      <Entrada name = 'Entrada 2: Caixa de Som'></Entrada>
      <Entrada name = 'Entrada 3: Auto Falante'></Entrada>
      </header>
      
    </div>
  );
}

export default App;
