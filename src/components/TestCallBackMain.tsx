import { useCallback, useState } from "react";
import  Box  from "./Box";

const TestCallBackMain = () => {
    const [size, setSize] = useState<string>("100");
    const [isDark, setIsDark] = useState(false);

    const boxStyle = useCallback(() => {
        return{
            backgroundColor: 'blue',
            width: `${size}px`,
            height: `${size}px`
        }
    },[size]);

    return(
        <div style={{
            backgroundColor : isDark ? 'dark' : 'white'
        }}>
            <input type="number" value={size} onChange={(e) => setSize(e.target.value)}/>
            <button onChange={() => setIsDark(!isDark)}>Change Theme</button>
            <Box createBoxStyle={boxStyle} />
        </div>
    )
}
export default TestCallBackMain;