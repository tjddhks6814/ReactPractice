import { useState, useMemo } from "react";
import TestMemoChild from "./TestMemoChild";

const TestMemoParentent = () => {
    const [parAge, setParage] = useState<number>(0);

    const plusParAge = () => {
        setParage(parAge + 1);
    };
    const name = useMemo(() => {
        return {
            firstName: "홍",
            lastName: "길동"
        }
    }, [])

    //console.log("부모 컴포넌트가 랜더링 됐습니다!");

    return(
        <div style={{border:'2px solid black', padding:'10px'}}>
            <span>부모나이:{parAge}</span>
            <button onClick={plusParAge}>부모나이 증가</button>
            <TestMemoChild name={name}/>
        </div>
    );
}

export default TestMemoParentent;