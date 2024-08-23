import { useEffect, useState } from 'react';

function WidthButton({ width }: { width: number }) {
    const [widthAux, setwidthAux] = useState<number>(100);
    useEffect(() => {
        setwidthAux(width);
    }, [width]);
    return (
        <button style={{width:`${widthAux}px`}}> Boa Noite
        </button>
    );
}
 
export default WidthButton;