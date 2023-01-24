import { memo } from "react"

interface objProps {
   name:{
       firstName: string
       lastName: string
   }
}

const TestMemoChild = ({name}:objProps) => {
    //console.log("자녀도 되었네요")
    return(
        <div>
            <p>응애 나 자식</p>
            <p>성: {name.firstName}</p>
            <p>이름: {name.lastName}</p>
        </div>
    )
}
export default memo(TestMemoChild)