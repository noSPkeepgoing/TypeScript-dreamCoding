{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hi';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(1);
  const numbers_ = findNumbers()!;

  const button = document.querySelector('.class')!;
}
