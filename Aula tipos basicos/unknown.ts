// unknown ---> é tipo um ANY 

// Se você precisa de um tipo flexível, mas ainda deseja algum controle, use unknown em vez de any, 
// pois ele exige que você faça uma verificação de tipo antes de usar o valor.

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;