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

 const customType = async () => {
    interface Cat{ meow: number };
    interface Dog{ bow: number };
    // 커스텀 함수
    // is가 있으면 TypeGuard이다
    function catOrDog(a: Cat | Dog): a is Dog {
        // 타입 반변을 직접 만들 수 있다.
        // Dog면 meow가 없어야 한다.
        if((a as Cat).meow) { return false }
        return true;
    }
    // is는 Type을 구분해주는 커스텀 함수를 직접 만들 수 있다.
    const cat: Cat | Dog = { meow: 3 }
        if(catOrDog(cat)){
            console.log(cat.meow)
        }
        if('meow' in cat){
            console.log(cat.meow)
        }
    function pet(a: Cat | Dog){
        if(catOrDog(a)){
            console.log(a.bow)
        }
        if('meow' in a){
            console.log(a.meow)
        }
    }

    const isRejected = (input : PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
        return input.status === 'rejected'
    }
    // React에서는 JSX에서 구별을 못할 수 있어서 기본값을 넣어주는게 좋음
    const isFulFailed = <T extends unknown>(input : PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
        return input.status === 'fulfilled'
    }

    //PromiseSettledResult, PromiseFulfilledResult
    //Promise -> Pending -> Settled(Resolved, Rejected)
    //promise.then().catch()

    const promise = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
    const errors = promise.filter(isFulFailed);

    // 4.8ver은 unknown을 if에 넣으면 모든 값을 받는다
    // {} 모든 타입을 가르키지만 null | undefined는 받지 않음
 }

 const infaceType = () => {
    interface A {
        readonly a: string,
        b: string
    }
    const aaa: A = {a: 'hello', b: 'world'};

    // 인덱스 시그니쳐 모든 값을 통일하고 싶을 때 사용
    // 또는 쓸떄는 무조건 type으로 써야함
    type C = 'Human' | 'Mamal' | 'Animal';
    // key값이 3개중에 하나 였으면 좋겠다 할 때 in으로 사용
    // 제한을 둬서 더 정확한 타입을 정한다 '맵드타입'
    type B = {[key in C]: number};
 }

 const classType = () => {
    interface A {
        readonly a: string;
        b: string;
    }
    // interface는 추상이고 class는 구현이다
    // class는 class자체가 타입이다
    class B implements A {
        // 접근 할 수 없게 만드는 속성 해당 클래스 안에서만 써야한다.
        //private a: string = '123';
        a: string = '123';
        //protected b: string = 'world';
        b: string = 'world';
    }
    class C extends B {}
    //new C().a;
    //new C().b;

    //            public protected private
    // 클래스내부        o       o       o
    // 인스턴스         o        x      x
    // 상속클래스        o       o       x
}

const optional = () => {
    // ?는 있어도 되고 없어도 되는 값
    // ?는 항상 속성명 뒤에 붙인다
    function abc(a: number, b?:number, c?:number){}
    abc(1)
    abc(1,2)
    abc(1,2,3)

    let obj: { a: string, b?:string } = {a: 'hi', b: ''};
    obj = { a: 'hello'}
}

const generic = () => {
    // 제네릭은 주로 함수명 옆에 붙인다.
    // 사용할 때 타입을 정해주면 된다.
    // extends로 제한을 둘 수 있음 
    // 제네릭을 여러개 동시에 만들면서 각각 다른 제한을 둘 수 있음
    // <T extends number | string, K extends string>

    // extends 종류
    // <T extends {...}>
    // <T extends any[]>
    // <T extends (...args:any) => any> '이런 형식은 callback함수에 많이 씀'
    // <T extends abstract new (...args:any) => any>  '생성자만 뽑고 싶을 떼'
    function add<T extends number | string, K extends string | number>( x: T, y: K): T { return x }
    // TS는 T가 뭔지 몰라서 오류가 남
    // 함수를 사용할 때 타입일 정해질 수 있도록
    add(1, 2)
    add('1', '2')
}