{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // do something
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function tsFetchNum(id: string): Promise<number> {
    // do something
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript

  // Optional parameter (?)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('sunny');
  printName('paaaa', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); // default message

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
