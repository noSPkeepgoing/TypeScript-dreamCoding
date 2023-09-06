{
  /**
   * In JavaScript
   *
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = -5;

  // string
  const str: string = 'hi';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // ❌
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null; // ❌
  let person_: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'hehe';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'haha';
  anything = true;

  // void
  function print(): void {
    console.log('🖨️');
    return;
  }
  let unusable: void = undefined; // ❌

  //never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // ❌

  // objet 💩
  let obj: object;
  obj = [1, 2, 3];
  obj = [{ name: 'sun' }];
  obj = function () {
    console.log('hi');
  };
}
