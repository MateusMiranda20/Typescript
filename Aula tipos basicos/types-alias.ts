type Idade = number
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

//Daqui para cima e TYPES-ALIAS

//DAQUI PARA BAIXO O CODIGO USANDO OS TYPES

const pessoa: Pessoa = {
    idade: 12,
    nome: 'Mateus',
    salario: 200_000, // O typescript entende como 200 mil 
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Preto'));