const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'souOIrmao';
console.log(irmao);
pai.appendChild(irmao)

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoDoElementoOndeVoceEsta = document.createElement('div');
filhoDoElementoOndeVoceEsta.className = "souOFilho"
console.log(filhoDoElementoOndeVoceEsta);
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta)

const filhoDoFilho = document.createElement('p');
filhoDoFilho.id = 'FilhoDoFilho'
filhoDoFilho.innerText = 'Nasci'
filhoDoElementoOndeVoceEsta.appendChild(filhoDoFilho)

const terceiroFilho = filhoDoFilho.parentNode.parentNode.nextSibling.nextSibling;
console.log(terceiroFilho);