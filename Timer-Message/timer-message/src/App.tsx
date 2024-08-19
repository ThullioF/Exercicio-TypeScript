import './App.css';
import Timer from './componentes/Timer';
import Message from './componentes/Message';
import Mensagem2 from './componentes/Mensagem2';
import UserList from './componentes/UserList';
import ToggleMessage from './componentes/ToggleMessage';

function App() {
  return (
    <div className='App'>
    <h1>Exemplo de React com TypeScript</h1>
    <Timer />
    <Message />
    <Mensagem2 />
    <UserList />
    <ToggleMessage />
    </div>
  );
}

export default App;