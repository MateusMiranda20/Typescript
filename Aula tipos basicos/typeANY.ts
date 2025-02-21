// Utilize any apenas em último caso
function showMessage(msg: any) {
    return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// No TypeScript, o tipo any é um tipo especial que desativa a verificação de tipos. 
// Ele permite que uma variável contenha qualquer tipo de valor, como string, number, object, etc. 
// Isso pode ser útil em algumas situações, mas também pode comprometer a segurança do código, 
// pois perde os benefícios da tipagem estática do TypeScript.