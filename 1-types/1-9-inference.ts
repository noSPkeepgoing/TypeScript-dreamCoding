{
  /**
   * Type Inference
   */

  let text = 'This is text';
  function print(message = 'hello') {
    console.log(message);
  }
  print('hi');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
