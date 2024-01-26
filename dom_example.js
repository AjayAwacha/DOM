// Accessing Html Element
// console.log(document.getElementById('one'));  // return single element
// console.log(document.getElementsByClassName('className'));  // return array of element
// console.log(document.getElementsByName('age'));       // return array of elemet
// console.log(document.getElementsByTagName('p'));   // return array of element
// console.log(document.querySelector('div.container p'));  // return first match single ele
// console.log(document.querySelectorAll('div.container p'));  // return array of match element

// manipulate Html element

// difference between innerHTML, innerText, textContent
const div = document.getElementsByClassName('example');
// console.log(div[0].innerHTML);
// console.log(div[0].textContent);
// console.log(div[0].innerText);


//1]we can change inner content
const heading1 = document.getElementById('getElementById');
heading1.innerHTML = 'modified content';
const heading2 = document.getElementsByClassName('className');
heading2[0].innerHTML = 'change text';
const inputEle = document.getElementsByTagName('p');
inputEle[0].innerHTML = 'change par';

//2]can change attribute value
const ageInput = document.getElementsByName('age');
ageInput[0].value = 12;
const anchorEle = document.getElementsByTagName('a');
anchorEle[0].href = 'https://w3school.com';
anchorEle[0].target = '_blank';

//3] change css property
heading1.style.color = 'red';


//4] add Event Listner
const btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', () => {
    console.log('button clicked');
});

// add classes and remove classes
const ele = document.getElementsByClassName('div-cls')[0];

function hideDiv() {
    ele.classList.remove('show');
    ele.classList.add('hide');
}

function showDiv() {
    ele.classList.remove('hide');
    ele.classList.add('show');
}

// adding and removing elements

const newEle = document.createElement('div');
newEle.innerHTML = 'we create this paragraph';
newEle.classList.add('paragraph-style');

const parentDiv = document.getElementsByClassName('container')[0];
console.log(parentDiv);
parentDiv.appendChild(newEle);

const parent = document.getElementById('parent');

const newP = document.createElement('p');
newP.innerText = 'this is new created Element';

const ref = document.getElementById('existing');
// parent.appendChild(newP);
parent.insertBefore(newP, ref);

// const eleRmv = parentDiv.getElementsByClassName('rmv')[0];
// eleRmv.remove();