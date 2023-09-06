{
  // Array
  const fruits: string[] = ['🍎', '🍑']; // readonly 🙆‍♀️
  const scores: Array<number> = [100, 80, 90]; // readonly 🙅‍♀️
  function printArray(fruits: readonly string[]) {}

  // Tuple
  // low readability 💦
  // -> interface, type alias, class
  let student: [string, number]; // different type and fixed size
  student = ['name', 100];
  student[0]; // name
  student[1]; // 100
  const [name, age] = student;
}
