const TypeScript = () => {
    const a:number = 5;
    const b:string = "5";
    const c:boolean = true;
    const d:undefined = undefined;
    const e:null = null;
    // 모든 타입이 가능하다 근데 이렇게 하면 JS랑 다를게 없다
    // TS의 주 목적은 any를 없애는 것
    const f:any = 123;

    //TS 대표적인 종류 4가지
    // : 콜론, type add = () =>, interface add {}, Array<string>

    // 기본적인 룰 TS는 JS로 변환되어야 한다
    // TS를 지워도 동작하는 JS여야 한다
    type Add = (x:number, y:number) => number;
    const add2: Add = (x, y) => x + y;
    interface Obj {
        lat:number,
        lon:number
    }
    
    // 2개의 함수가 존재하면 뒤에있는 함수가 사라진다.
    //function add(x:number, y:number): number;
    /*
    function add(x, y){
        return x + y
    }
    */

    // 배열 형식 1번째
    // 배열은 타입을 할당하지 않으면 never 형식이 나와 push()같은 메소드를 사용하기 어려움
    const arr: string[] = ['123','456'];
    // 배열 형식 2번째 <>는 TS에서 제네릭으로 부름
    // 제네릭은 TS의 핵심
    const arr2: Array<number> = [123,456];
    // 배열 튜플방법은 길이를 정하고 각 값만다 type을 부여
    const arr3: [number, number, string] = [123,456,'123'];
    const obj:Obj = {lat: 37.2, lon: 37.5};

    // !의 역할 null이나 undefined가 존재하지 않는다고 확신이 들 때 사용
    // 사용은 비추 에일리언코드가 될 수 있음 
    const head:Element|null = document.querySelector("#head");
}

export default TypeScript