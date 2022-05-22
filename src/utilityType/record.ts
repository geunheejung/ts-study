{
  type humanInfo = {
    [name: string]: number; // name이라는 Key가 해당 프로퍼티명의 의도를 명확히 표현
  };

  let human: humanInfo = {
    홍길동: 20,
    둘리: 30,
    마이콜: 40,
  };

  type humanInfoRecord = Record<string, number>;

  let humanB: humanInfoRecord = {
    홍길동: 20,
    둘리: 30,
    마이콜: 40,
  };
}

/*
Record Type, 인덱스 시그니처 는 상당히 비슷. 구문 관점에서 인덱스 시그니처가 더 좋다.
인덱스 시그니처에서 name이라는 Key가 의도를 명확하게 표현한다.
 */
{
  // Record Type이 유용한 이유
  // 문자열 리터럴을 Key로 사용하는 경우 오류가 발생한다.
  // type humanInfo = {
  //   [name: "홍길동" | "둘리" | "마이콜"]: number;
  // };
  // Record Type은 속성을 제한하고 싶은 경우 문자열 리터럴을 사용하여 Key에 허용 가능한 값을 제한한다.
  type names = "홍길동" | "둘리" | "마이콜";
  type humanInfo = Record<names, number>; // names에 포함된 리터럴만 Key로 설정 가능.
  let human: humanInfo = {
    홍길동: 20,
    둘리: 30,
    마이콜: 40,
  };
}
// Ts2.9부터 열거형을 Key로 사용할 수 있다. -> 문자열 리터럴보다 코드가 깔끔하다는 장점.
{
  enum names {
    홍길동 = 1,
    둘리 = 2,
    마이콜 = 3,
  }
  type humanInfo = Record<names, number>;
  let human: humanInfo = {
    1: 20,
    2: 30,
    3: 40,
  };
}

{
  // keyof 와 Record Type을 같이 사용.
  type keyType = {
    a: string;
    b: number;
  };

  type key = keyof keyType;
  let k: keyType; // Key의 타입은 a | b

  type humanType = {
    name: string;
    age: number;
    address: string;
  };

  type humanRecordType = Record<keyof humanType, string>;

  let human: humanRecordType = {
    name: "또치",
    age: "20",
    address: "서울",
  };
  // 기존 타입의 속성 이름을 Record Type의 Key 타입으로 하고 싶은 경우 keyof와 함께 사용 가능
}
