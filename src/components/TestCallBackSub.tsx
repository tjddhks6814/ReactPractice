import { validateHeaderValue } from "http";
import { useCallback, useEffect, useState } from "react";

const TestCallBack = () => {
    // 메모이제이션을 사용하여  컴포넌트 최적화
    const [number, setNumber] = useState("");
    const [toggle, setToggle] = useState(true);
    
    const someFunction = useCallback(() => {
        console.log("now number : " + number);
        return;
    },[number])

    useEffect(() => {
        console.log("someFunc이 변경되었습니다");
    }, [someFunction]);
    
    return (
        <div>
            <h2 style={{"color":"blue"}}>useCallback</h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}
export default TestCallBack;