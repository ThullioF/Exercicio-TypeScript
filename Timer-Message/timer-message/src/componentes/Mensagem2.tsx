import { useState, useEffect } from 'react';

function Mensagem2() {
    const [message, setMessage] = useState('Boa tarde!');
    useEffect(() => {
        const timer = setTimeout(() => {
        setMessage('Boa noite!');
        }, 10000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
        <h3>{message}</h3>
        </div>
    );
}

export default Mensagem2;