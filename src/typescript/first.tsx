const First = () => {
    type world = 'world' | 'hell';
    const a:world = 'world';

    const b = `hello ${a}`

    type Greeting = `hello ${world}`
    const c: Greeting = 'hello hell'

    let arr: string[] = [];
    let arr2: Array<string> = [];
    function rest(...args: string[]){
        return args;
    }

    rest('1', '2', '3');

    const tuple: [string, number] = ['1', 1];
    tuple[0] = 'hello';
    tuple[1] = 1;

    // 여러개의 변수들을 하나로 묶고싶을때
    const enum EDirection {
        Up = 3,
        Down = 5,
        Left = 7,
        Rigjt = 9
    }

    // 이런식으로 상수로도 설정이 가능
    const ODirection = {
        Up : 1,
        Down : 2,
        Left : 3,
        Right : 4
    } as const;

    const u = EDirection.Up;
    const l = EDirection.Left;

    //Js 값은 Type으로 쓸 수 없어서 앞에 typeof를 붙여줘야함
    // as const를 붙이면 value들의 type을 가져옴 엄격하게 타이핑함
    const obj = { a:'123', b:'456', c:123 } as const;
    type Key = typeof obj[keyof typeof obj];
    //type Key = keyof typeof obj.a;
}
export default First;

const secondType = () => {
    // 간단한거는 type 
    type A = {a: string};
    const a: A = {a: 'hi'};

    // 객체지향으로 하고싶으면 interface
    interface B {
        b: string
    }
    const b:B = {b: 'bye'};

    // string | number로 type을 주면 상당히 꼬이게된다 그래서
    // 처음부터 타입을 잘 정하고 시작해야함
    // & 일때는 모든 속성이 다 정의되어야 한다
    function add(x: number, y: number):number {return x + y}
    // union or 또는이라고도 함
    add(1, 2)
    //add('1', 2)
    //add(1, '2')  
}

 const Extend = () => {
    // 상속의 개념
    type Animal = { breath : true} ;
    type P = Animal & { breed: true };
    type Human = P & { think: true };

    const ssw: Human = {breath: true, breed: true, think: true};

    // interface로도 사용이 가능함
   interface A {
    breath: true
   } 
   interface B extends A {
    breed: true
   }
   const b:B = { breath: true, breed:true };

   // interface 같은 이름으로 여러개 선언이 가능함
   // 추가할때마다 값이 합쳐져서 확장성에 용이함
   // Type은 합쳐지지 않음
   interface C {
        a: () => void;
    }

   interface C {
        b: () => void;
    }
    const c: C = { a() {}, b() {}, sleep() {} }

    interface C {
        sleep: () => void;
    }

 }

 const Void = () => {
    interface A { a: string };
    // 객체 리터럴을 바로 대입할때는 잉여속성을 검사해줌 
    const obj = {a: 'asd', b:'asd'}
    const a:A = obj;

    function b(callback: () => void): void {
        // void로 타입을 주면 return값에 undefined말고는 들어가지 않음
        // 함수에서는 return값이 없다는 의미
        return undefined;
    }
    const c = b(() => {
        return 3;
    });

    interface Human {
        // return 값을 사용하지 않겠다 라는 의미
        talk: () => void;
    }
    // React에서 강제 타입 변환을 할 때는 as unknown 처럼 as를 붙여줘야한다
    const human: Human = {
        talk() { return 3; }
    }

    // void타입을 크게 3가지로 나눠진다
    // 매개변수가 void일때
    // return이 void일때
    // method가 void일때

    // 구현부를 만들기 싫을떄는 앞에 declare를 선언하면 된다
    // 외부에서 만들어진 애들을 type선언할때 declare해서 사용
    //declare function forEach(arr: number[], callback: (el: number) => void): void;
    //let target: number[] = [];
    //forEach([1,2,3], el => target.push(el))
 }

 const Unknow = () => {
    // unknown랑 any차이
    // any는 타입 선언을 포기해버리는 것
    // unknown 지금 당장의 type을 모를 때 사용한다 추후 타입을 지정해주면 됨

    // unknown이 나오는 상황
    // error가 대표적인 unknown
    // error는 아직 뭐가 올지 몰라서 unknown로 정의
    try {
        
    } catch(error){
        (error as Error).message
    }
 }

 const TypeGuard = () => {
    function numOrStr(a: number | string | number[]){
        // unknown때 말고는 as는 쓰지 말아야 한다
        // ex) (a as number).toFixed(1);
        
        // typeGuard
        if( typeof a === 'number'){
            // number는 number로
            a.toFixed(1);
        }else if(Array.isArray(a)){
            // 베열일때는 Array.isArray()
            a.concat(4);
        }

        if( typeof a === 'string'){
            a.charAt(1);
        }
    }
    numOrStr('123');
    numOrStr(123);

    class A {
        aaa() {}
    }
    class B {
        bbb() {}
    }
    function aOrb(param: A | B){
        // param들 간에는 instanceof로 구별한다
        if(param instanceof A){
            param.aaa();
        }
    }
    aOrb(new A());
    aOrb(new B());

    // ts를 쓸때는 type이라는 속성을 넣어주는 버릇을 들여라
    // 그래야 나중에 타입검사 할 떄 쉽게 찾을 수 있음
    type C = { type: 'c', ccc: string};
    type D = { type: 'd', ddd: string};
    type E = { type: 'e', eee: string};

    // 객체는 안에 값으로 구별하는 방법
    // 보통은 값으로 구별하는 방법을 선호함
    function typeCheck(a: C | D | E){
        if(a.type === 'c'){
            a.ccc;
        }
        else if(a.type === 'd'){
            a.ddd
        }
        else{
            a.eee
        }

        // 객체 안에 속성값으로 구별하는 방법
        if('ccc' in a){
            a.ccc
        }else if('ddd' in a){
            a.ddd
        }else{
            a.eee
        }
    }
 }