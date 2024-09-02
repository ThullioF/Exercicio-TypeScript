import React from 'react';
import HeaderStyled from './components/HeaderStyled';
import HeaderEmotion from './components/HeaderEmotion';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <HeaderStyled />
      <HeaderEmotion />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button label="Click Me" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
