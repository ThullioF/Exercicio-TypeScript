import React from 'react';
import './App.css';

// Definindo uma interface para as props
interface WelcomeProps {
 name: string;
 age: number;
 endereco: string;
 cidade: string;
}

// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco, cidade }) => {
 return (
  <div>
 <h1>Oi, {name}!</h1>
 <p>Você tem {age} anos.</p>
 <p>Mora na cidade {cidade} no endereco {endereco}.</p>
 </div>
 );
};

function App() {
 return (
 <div className='App'>
 <Welcome name='Alice' age={25} endereco='Rua Brasil' cidade='Franca' />
 <Welcome name='Bob' age={30} endereco='Rua Estudantes' cidade='Barretos' />
 <Welcome name='Charlie' age={35} endereco='Rua Casa' cidade='Ribeirão Preto' />
 </div>
 );
}

export default App;