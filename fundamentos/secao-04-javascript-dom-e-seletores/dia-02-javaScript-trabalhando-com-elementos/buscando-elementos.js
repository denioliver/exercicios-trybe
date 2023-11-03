// <<<<<<<<<< Buscando elementos - parent >>>>>>>>>>

const whereAreYou = document.getElementById('where-are-you');

const parent = whereAreYou.parentNode;
parent.style.color = 'red' ;

const firstChildOfChild = document.getElementById('first-child-of-child');
firstChildOfChild.innerText = 'adicionando texto';

const firstChild = firstChildOfChild.parentNode.previousElementSibling;
console.log(firstChild);

const attention = whereAreYou.nextSibling;
console.log(attention);

const thirdChild = whereAreYou.nextElementSibling;



// <<<<<<<<<< Criando elementos >>>>>>>>>>

let newElement = document.createElement('div');
newElement.innerHTML = 'oPaA'
console.log(newElement);
thirdChild.appendChild(newElement);

