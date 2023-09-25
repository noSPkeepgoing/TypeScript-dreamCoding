// Java : Exception
// JavaScript : Error
// const array = new Array(123123123123123123);

// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist ${fileName}`);
  }
  return 'file contents 📑';
}

function closeFile(fileName: string) {
  //
}

const fileName = 'not exist!';
try {
  readFile(fileName);
  console.log('try');
} catch (error) {
  console.log(error);
  console.log('catched!');
} finally {
  closeFile(fileName);
  console.log('finally!');
}
