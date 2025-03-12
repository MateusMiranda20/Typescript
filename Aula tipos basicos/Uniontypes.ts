function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean,
  ): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
  }
  
  console.log(addOrConcat(10, 20));
  console.log(addOrConcat('10', '20'));
  console.log(addOrConcat(10, '20'));
  console.log(addOrConcat('10', 20));
  console.log(addOrConcat(true, true));
  
  // Module mode
  export default 1;

  //Quando quero usar mais de um tipo.

  let x = 10; //eslin-disable-line
