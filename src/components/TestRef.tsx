import { useState, useRef, useEffect } from "react"

const TestRef = () => {
    const [render, setRender] = useState<number> (0);
    const [count, setCount] = useState<number> (0);
    const [renderCount, setRenderCount] = useState<number> (0);
    // Ref는 렌더링을 시켜주지 않음
    // 리렌더링이 되어야지 화면에 반영됨
    // 리렌더링되어도 같은 값을 계속해서 유지가 가능하다
    // Ref는 특정 값을 초기화 할 필요가 있는 경우 사용한다
    // 특정 DOM 요소에 접근 할 때 사용한다
    const countRef = useRef<number>(0);
    const renderRef = useRef<number>(0);
    // DOM 요소에 접근하려면 Type을 <HTMLInputElement>(null)로 설정
    const focusRef = useRef<HTMLInputElement>(null);
    // 변수는 렌더링 될 떄마다 0으로 초기화가 되어서 0으로 계속 나옴
    let countVar:number = 0;

    /*
    state 변경을 계속 찾아내면서 무한 변경을 만들어
    무한 loop에 빠지게 된다
    useEffect(() =>{
        setRenderCount(renderCount + 1);
    })
    */

    // Optional Chaining을 통해 간단하게 처리 가능하다 되도록 null일 경우에만 사용하는걸 권장
    useEffect(() => {
        focusRef.current?.focus();
    },[])

    useEffect(() => {
        renderRef.current = renderRef.current + 1;
    })

    const doRender = () => {
        setRender(render + 1)
    }

    const refUpBtn = () => {
        countRef.current = countRef.current + 1;
    }

    const valueUpBtn = () => {
        countVar = countVar + 1;
    }
    

    return(
        <div>
            <h2 style={{color:"blue"}}>useRef Test</h2>
            <p>Ref : {countRef.current}</p>
            <p>value : {countVar}</p>
            <p>Count : {count}</p>
            <input type="text" ref={focusRef} />렌더링
            <button onClick={doRender}>렌더링</button>
            <button onClick={refUpBtn}>ref올려 +</button>
            <button onClick={valueUpBtn}>value올려 +</button>
            <button onClick={() => setCount(count + 1)}>Count올려 +</button>
        </div>
    )
}

export default TestRef