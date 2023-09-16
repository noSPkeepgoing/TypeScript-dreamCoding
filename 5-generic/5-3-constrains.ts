interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time !`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`part time !`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수
// 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

const sun = new FullTimeEmployee();
const pa = new PartTimeEmployee();
sun.workFullTime();
pa.workPartTime();

const sunAfterPay = pay(sun);
sun.workFullTime();
const paAfterPay = pay(pa);
pa.workPartTime();

const obj1 = {
  name: 'sun',
  age: 10,
};

const obj2 = {
  animal: '🐶',
};

console.log(getValue(obj1, 'name'));
console.log(getValue(obj1, 'age'));
console.log(obj2, 'animal');

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
