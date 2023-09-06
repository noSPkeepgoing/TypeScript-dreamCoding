{
  /**
   * Intersection Types: AND
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId);
  }

  internWork({
    name: 'sunny',
    score: 100,
    employeeId: 123,
    work: () => {},
  });
}
