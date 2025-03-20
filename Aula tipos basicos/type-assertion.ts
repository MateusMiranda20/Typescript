// 1. Quando Usar Type Assertion?
// Quando você sabe que uma variável tem um tipo específico, mas o TypeScript não conseguiu inferi-lo corretamente.
// Quando você está lidando com valores dinâmicos (exemplo: API, DOM, JSON).
// Quando você quer acessar métodos ou propriedades específicas de um tipo.

// O Type Assertion no TypeScript é uma maneira de informar ao compilador que você tem certeza sobre o tipo de uma variável, 
// mesmo que ele não consiga inferi-lo automaticamente. 
// Ele não realiza nenhuma conversão real de tipos (como o casting em outras linguagens), 
// apenas informa ao TypeScript como ele deve tratar determinado valor.

// Recomendado
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

//Type assertion
const body3= document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red'

//HTMLElement - Se estamos manipulando o DOM, o TypeScript pode não reconhecer corretamente os elementos HTML:
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus()

//NÃO RECOMENDADOS

const body4 = (document.querySelector('body') as unknown) as number;

const body2 = document.querySelector('body')!;
body2.style.background = 'red'
