import { useContext, useEffect, useState } from "react"

const TestState = () => {
    // React에서 상태를 관리해주는 Hook
    // 해당 컴포넌트에서 변경이 일어나면 전체를 리렌더링
    const [count, setCount] = useState<number>(0);

    const plusBtn = () => {
        setCount(count + 1);
    }

    const minusBtn = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        //console.log("렌더링 시작", count);

        //return () => console.log("언마운트 값", count)
    },[])
    return(
        <div>
            <h2 style={{color:'blue'}}>useState</h2>
            <h2>{count}</h2>
            <button onClick={plusBtn}>+</button>
            <button onClick={minusBtn}>-</button>
        </div>
    )
}

export default TestState