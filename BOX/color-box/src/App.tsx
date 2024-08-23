import './App.css';
import { useState } from 'react';
import ColorBox from './componentes/ColorBox';
import ColorInput from './componentes/ColorInput';
import WidthButton from './componentes/WidthButton';
import WidthInput from './componentes/WidthInput';

function App() {
  const [color, setColor] = useState<string>('red');
  const[width, setWidth] = useState<Number>(100);
  return (
    <div className='App'>
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <ColorBox color={color} />
      <WidthInput width={width} setWidth={setWidth} />
      <WidthButton width={width} />
    </div>
  );
}

export default App;