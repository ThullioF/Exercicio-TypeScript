import { useEffect, useState } from 'react';

function ColorBox({ color }: { color: string }) {
    const [bgColor, setBgColor] = useState<string>('red');
    useEffect(() => {
        setBgColor(color);
    }, [color]);
    return (
        <div style={{ backgroundColor: bgColor, width: '200px', height: '200px', border: '3px solid white' }}>
            <p style={{ textAlign: 'center', lineHeight: '200px', color: 'white' }}>Cor Atual: {bgColor}</p>
        </div>
    );
}
 
export default ColorBox;