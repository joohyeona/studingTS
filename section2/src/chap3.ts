// object로 정의
let user: object = {
    id: 1,
    name: "이정환",
  };


// 객체 리터럴 타입으로 객체 만들기
let user2: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "이주현",
};

console.log(user2.id);

// 선택적 프로퍼티 정의 Optional Property
let user3: {
    id?: number;    // 필수아님 생략가능, but 입력한다면 number로만 받음
    name: string;
} = {
    id: 1,
    name: "이주현",
};

// let이니까 1, 이주현 값은 사라짐
user3 = {
    // id? undefined로 저장됨
    name: "홍길동",
}

console.log(user3.id, user3.name);


// readonly 프로퍼티
let user4: {
    id?: number;
    readonly name: string;
} = {
    name: "이주현",
}

// user.name = "바꾸기 불가능" // 오류 발생