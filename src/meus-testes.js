const vqv = (name, age) => {
    if (name === null || age === null) {
      return undefined;
    }
    return `Oi, meu nome é ${name}!
    Tenho ${age} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`;
  };

const name = 'Fortunato';
const age = 26;

console.log(vqv(name, age));