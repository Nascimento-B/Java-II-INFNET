let paises = [];

paises.push('Dinamarca');
paises.push('Croacia');
paises.push('Brasil');
paises.push('Japão');
paises.push('Peru');

console.log(paises);

document.write('o tamanho do array é: ' + paises.length);
paises[2] = 'Argentina';
console.log('o tamanho do array é: ' + paises.length);

paises.push('frança');
paises.splice(3,1);
console.log(paises);