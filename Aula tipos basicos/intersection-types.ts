// Não seria tão utilizado como o union-types | OU 

//Vamos fallar soobre o & AND

type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa : Pessoa = {
    nome: 'Mateus',
    sobrenome: "Joao",
    idade: 15
}

console.log(pessoa)


export { pessoa }