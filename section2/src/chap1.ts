// 원시 타입
// 숫자면 숫자, 문자열이면 문자열 등 딱 하나의 값만 저장하는 타입

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = Infinity;
let num5: number = -Infinity;
let num4: number = NaN;

// string
let str1: string = "dd";
let str2: string = `이 따옴표 됨`;
let str3: string = `hello ${num1} 됨`

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

// 오류
// let numA: number = null;
    // null 값을 변수의 임시값으로 활용하고 싶은 상황에는
    // tsconfig.json의 strictNullChecks(엄격한 null 검사) 옵션을 false