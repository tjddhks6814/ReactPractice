import { useEffect, useState } from "react"

export const TestEffect = () => {
    const [name, setName] = useState<String>("Wan");

    const changeName = () => {
        setName("sungWan");
    }

// React는 State값이 바뀌면 무조건 해당 컴포넌트에 있는 모든 것들을 다시 실행한다
// 그레서 특정 경우에만 실행되게 설정하기 위헤서 useEffect가 필요하다
// useEffect 렌더링 이후 실행할 함수
// useEffect는 컴포넌트가 마운트, 언마운트, 업데이트 됐을 때 특정 작업을 처리하게 도와줌
useEffect(() => {
    // 렌더링이 완료될 때마다 실행 or count State가 변동이 있을때
    // 이름변경 이벤트를 실행할 경우에는 Mount되지 않음
    //  console.log("첫 렌더링 이름", name);
  
    // cleanup 함수
    // useEffect가 return 할 때 실행
    // 컴포넌트가 Mount되면 unMount 될 때는 이벤트를 삭제해야 한다
    // return () => console.log("언마운트 이름", name);
    // 이전 값은 unMount하고 현재 Mount값이 보이는거 확인 가능
  }, [name]);
  
  // 특정값이 변결 될때 실행되는 예
  // Effect함수를 실행 하고 싶은 경우 빈 배열에 해당값을 넣어준다
  // 빈 배열을 입력할 경우 컴포넌트가 Mount 될 떄에만 실행
  /*
  useEffect(() => {
    // 렌더링이 완료될 때마다 실행 or name State가 변동이 있을때
    console.log("렌더링 완료", name);
  }, []);
  */
  
  //특정 값을 넣은 예시 
  /*
  useEffect(() => {
    // 조건이 변할 때마다 실행
    console.log("렌더링 완료", name);
  }, [name]);
  */

    return(
        <div>
            <h2 style={{color:'blue'}}>useEffect</h2>
            <h2>{name}</h2>
            <button onClick={changeName}>이름 변경하기</button>
        </div>
    )
}