import axios from "axios";
import React,{useEffect, useState} from "react";

interface reData{
    id: number,
    title: string,
    body: string
}

const TestAxios = () =>{
const [data, setData] = useState<reData[]>([]);
const url = 'http://localhost:4000/testAxios'; 

useEffect(() => {
    /* 
    파라미터 메소드를 사용하여 특정값만 받아올 수 있음
    get(url, {
        params:{
            id:3
        }
    })
    */
    axios.get(url).then(response => {
        setData(response.data)
    }).catch(error => {
        console.log(error)
    })
},[])

useEffect(() => {
    /* 
        axios post로 데이터 추가
    
    axios.post(url,{
        id: 5,
        title: "test2",
        body: "axios post test2"
    }).then(response => {
        console.log(response)
    })
    */
},[])

useEffect(() => {
    /* 
        axios put으로 데이터 수정
    
    axios.put(url+'?id=5',{
        title: "test recheck"
    }).then(response => {
        console.log(response)
    })
    */
},[])

/*
useEffect(() => {
    
    /* 
        axios delete로 특정 데이터 삭제
    
    axios.delete(url,{
    }).then(res => {
       console.log(res.status)
    }).catch(error =>{
        console.log(error)
    })
},[])
*/
const idMap = data.filter((el) => {
    return el.id 
})

const clickId = (e:any) => {
    /*
    axios.delete(url+e.target.value,{
    }).then(res => {
       console.log(res.status)
    }).catch(error =>{
        console.log(error)
    })
    */
   e.preventDefault();
    return axios.delete(url+`?id=${e.target.value}`,{
        headers: {
            'Content-Type': `application/json`,
          },
        data:{
            ...data[5]
        }
    }
    ).then(res => {
        const del = data.filter((el) => e.target.value !== el.id)
        setData(del)
        console.log(res.data)
    }).then(error => {
        console.log(error)
    });
        
}  


return (
    <React.Fragment>
        <button value={6} onClick={clickId}>6번 ID삭제</button>
        {
            idMap.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))
        }
    </React.Fragment>
)
}

export default TestAxios;