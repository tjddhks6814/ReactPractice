import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import React,{useEffect, useState} from "react";
import { useQuery, UseQueryOptions } from "react-query";
import BtnCom from "./Button"

//axios 패턴 중 하나
interface A {
    name: string
    age: number
}

interface B extends A {
    key: number
}

const fetchData = async () => {
    const response = await axios.get("")
    return response.data
}

function UseQuery() {
    const header: UseQueryOptions<A[], Error, B[]> = {
        select: (data) => {
            return data.map((item, index) => ({ ...item, key: index })) 
        },
        placeholderData: [],
        onError: (err) => {
            const stautsError = err as Error
            if (err instanceof AxiosError) return alert(err.response?.data);
            alert(stautsError.message);
        }
    }

    const { data = [], ...rest } = useQuery<A[], Error, B[] >(["KEY"], fetchData, header)
    return { data, ...rest };
}

interface Post{
    id: number,
    title: string,
    body: string
}
interface Created{
    id: number,
    title: string,
    body: string
}
interface Deleted{}
interface Data{}

interface axiosA {
    // await 붙어있는 애들은 타입이 Promise
    // AxiosResponse = Data 타입은 T이다 Data : T로 정의
    get:<T = any,  R = AxiosResponse<T>>(url :string) => Promise<R>,
    post:<T = any,  R = AxiosResponse<T>, D = any>(url:string, data: D) => Promise<R>,
    delete:<T = any, R = AxiosResponse<T>>(url:string) => Promise<R>,
    (config : {}): void,
    (url: string, config: {}): void
    //isAxiosError의 경우 커스텀이라 제네릭 설정을 해야함 T <- 제네릭
    // isAxiosError: (error: unknown) => error is AxiosError
}

const TestAxios = () =>{
const [data, setData] = useState<Post[]>([]);
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
    const a:axiosA = axios;
    a.get<Post, AxiosResponse<Post>>(url)
        //return await setData()
    }

//},[])

/* 
    axios post로 데이터 추가
*/
const pushData = () => {
    const a:axiosA = axios;
    a.post<Created, AxiosResponse<Created>, Data>(url,{
        id: 7,
        title: "data7",
        body: "axios post check7"
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
   const a:axiosA = axios;
   e.preventDefault();
    return a.delete<Deleted, AxiosResponse<Deleted>>(url+`/${val}`
    ).then(res => {
        return res.data
    });
        
}

useQuery('axiosData', GetData, {suspense:true});

const numArr = [1,2,3,4,5,6]
return (
    <React.Fragment>        
        {
            idMap.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))
        }
        <BtnCom />
        <button onClick={changeData}>데이터 변경</button>
        <button onClick={pushData}>데이터 추가</button>
    </React.Fragment>
)
}

export default TestAxios;