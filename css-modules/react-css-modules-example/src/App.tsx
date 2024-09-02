import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button label="Click Me" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
