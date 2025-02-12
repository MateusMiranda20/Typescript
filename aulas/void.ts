// No TypeScript, o tipo void é usado para indicar que uma função não retorna nenhum valor. 
// É como dizer que a função "não tem resultado" ou "não retorna nada". 
// Aqui vai um exemplo simples.

function saudar(): void {
    console.log("Olá!");
}

// Nesta função saudar, o tipo de retorno é void, o que significa que a função não retorna nenhum valor. 
// Ela apenas executa a ação de imprimir "Olá!" no console.

// Quando usar o tipo void:
// Funções sem retorno: Use void quando sua função não precisar retornar um valor.

// Callbacks e funções de evento: Muitas vezes, 
// funções de callback ou funções associadas a eventos não precisam retornar um valor, então void é apropriado.



function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };


