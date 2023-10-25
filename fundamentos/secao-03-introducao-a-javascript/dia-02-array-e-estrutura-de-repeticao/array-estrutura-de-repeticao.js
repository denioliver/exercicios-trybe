const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    soma = soma + numbers[index]
}
console.log(`A soma de todos os elementos do array é: ${soma}`);

let mediaAritmetica = soma / numbers.length

switch (mediaAritmetica > 20) {
    case true: 
    console.log("O valor da média aritmética é maior que 20");
        break;
    case false:
        console.log('O valor da média aritmética é menor ou igual a 20');
        break;
}   

console.log(`A media aritmetica dos elementos é ${mediaAritmetica}`);


let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if(maiorValor < numbers[index]) {
        maiorValor = numbers[index]
    }
};
console.log(`O maior valor entre os elementos do array é ${maiorValor}`)

let impares = 0
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0) {
        impares += 1
    }
}
    console.log(`A quantidade de números ímpares dentro do array é de ${impares}`)
    let num = 10
    let fatorial = 0;
for ( let index = 9; index >= 1; index -= 1 ) {
    if (index < num) {
        num = index * num
    }
}

console.log(`o fatorial de 10 é: ${num}` );

let word = 'tryber';
let reverseWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index];
};

console.log(reverseWord);

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
};

let size = 5;
for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    inputLine = inputLine + symbol;
    console.log(inputLine);
};


let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
        inputLine = inputLine + ' ';
    } else {
        inputLine = inputLine + symbol;
    }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};

