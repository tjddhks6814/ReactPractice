import axios from "axios";
import React,{useEffect, useState} from "react";
import { useQuery } from "react-query";

interface reData{
    id: number,
    title: string,
    body: string
}

const TestAxios = () =>{
const [data, setData] = useState<reData[]>([]);
const url = 'http://localhost:4000/testAxios'; 

//useEffect(() => {
    /* 
    파라미터 메소드를 사용하여 특정값만 받아올 수 있음
    get(url, {
        params:{
            id:3
        }
    })
    */
   const GetData = async () => {
    axios.get(url).then(response => {
        setData(response.data)
    })
        //return await setData()
    }

//},[])

/* 
    axios post로 데이터 추가
*/
const pushData = () => {
    axios.post(url,{
        id: 7,
        title: "data7",
        body: "axios post check7"
    }).then(response => {
    })
}
    
/* 
    axios put으로 데이터 수정
*/
const changeData =() => {
    axios.put(url+'/7',{
        id:7,
        title: "test recheck",
        body:"post success"
    }).then(response => {
    })
}
    
const idMap = data.filter((el) => {
    return el.id 
})

const clickId = (e:any) => {
   const val = e.target.value;
   e.preventDefault();
    return axios.delete(url+`/${val}`,{
        headers: {
            'Content-Type': `application/json`,
          },
    }
    ).then(res => {
        return res.data
    }).then(error => {
    });
        
}

useQuery('axiosData', GetData, {suspense:true});


return (
    <React.Fragment>
        <button value={6} onClick={clickId}>6번 ID삭제</button>
        {
            idMap.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))
        }
        <button onClick={changeData}>데이터 변경</button>
        <button onClick={pushData}>데이터 추가</button>
    </React.Fragment>
)
}

export default TestAxios;