interface parProps  {
    name: string,
    age: number,
    school: string
}
const TestMeno = (props:parProps) => {
    const {name, age, school} = props;
    return(
        <div>
            <h2 style={{color:"blue"}}>TS props Test</h2>
            <span>{name}</span>
            <span>{age}</span>
            <span>{school}</span>
        </div>
    )
}
export default TestMeno