// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };
  
  let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  
  let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
  };
  

// Index Signiture 키값도 타입 지정 가능
type CountryCodes = {
    [key: string]: string;
  };
  
  let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil : 'bz'
  };


// 반드시 포함해야 하는 프로퍼티가 있다면 직접 명시해도 됨
type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
  };

// 하지만 Koria: string은 예외를 발생하므로 오류가 남.