const svetor = (vacumulator, vcurrent) => vacumulator + vcurrent;
const average = (vetor) => Math.round(vetor.reduce(svetor) / vetor.length);

let vector = [1, 2, 3, 4];

console.log(average(vector));