const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // AQUI CRIA UMA CHAVE QUE NÃO PRECISA ESTAR EXISTENCIAV 
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// Aqui é o modo como podemos trocar o valor de um objeto
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
