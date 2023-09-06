{
  /**
   * Type Aliases
   *
   * custom type!!
   */

  type Text = string;
  const hi: string = 'hi 🙌';
  const hi_: Text = 'hi 👏';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'sunpa',
    age: 20,
    // habit:'reading books' // error!
  };

  /**
   * String Literal Types
   */

  type Name = 'name';
  let userName: Name;
  userName = 'name';

  type JOSN = 'json';
  const json: JOSN = 'json';
}
