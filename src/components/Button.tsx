import React from "react";

const BtnCom = () => {
    const numArr = [1,2,3,4,5,6];

    return (
        <React.Fragment>
            {
                numArr.map((el) => (
                    <button value={el}>{el}번째 버튼</button>
                ))
            }
        </React.Fragment>
    )
}
export default BtnCom