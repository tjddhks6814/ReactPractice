import { useEffect, useState } from "react";

const Box = ({createBoxStyle}:any) => {
    const [boxstyle, setBoxStyle] = useState({});

    useEffect(() => {
        console.log("박스 키우기");
        setBoxStyle(createBoxStyle());
    }, [createBoxStyle])

    return <div style={boxstyle}></div>
}

export default Box;