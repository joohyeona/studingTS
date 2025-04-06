let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", `b`, `c`];
let boolArr: boolean[] = [true, true, false];

// 다양한 타입의 요소를 갖는 배열 타입정의
// let multiArr = [1, "hello"];
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3], 
    [4, 5],
];

// 튜플
let tup1: [number, string, boolean] = [1, "hello", true];
let tup2: [number, number, number] = [2, 3, 4];
tup2.push(1);
// console.log(tup2); // 결과 [2, 3, 4, 1]


// tsconfig.json에 isolateModules: true로 설정되어 있어서 export 1개 이상 필수
export {};