// const name = 'Anthony';
// console.log(name)

const headingOne = document.querySelector('h1');
// console.log(headingOne)
headingOne.style = 'color: red; text-decoration: underline;';

const paragraph = document.getElementById('some-text')
// console.log(paragraph)
// console.log(paragraph.innerText)
paragraph.innerText = 'I am new text given by JS'
// console.log(paragraph.className)
paragraph.className = 'some-class';
// console.log(paragraph.className)

paragraph.classList.add('new-class');
// console.log(paragraph.className);

paragraph.classList.remove('new-class')
// console.log(paragraph.className);

paragraph.classList.toggle('new-class')
// console.log(paragraph.className);


const listItems = document.getElementsByTagName('li')
// console.log(listItems)

document.getElementById('unordered-list').innerHTML = '<li>New Item</li>';

const classItems = document.querySelectorAll('.ordered-item')
// console.log(classItems)

const someInput = document.getElementById('some-input');
let inputValue = '';

const userInputDisplay = document.getElementById('user-input');

someInput.addEventListener('keypress', function(event){
    // console.log(event);
    inputValue = event.target.value;
    userInputDisplay.innerText = inputValue;
})

function clickMe(){
    // alert('I have been clicked');
    console.log('I have been clicked');
}

document.querySelector('#child').addEventListener('click', function(event){
    event.stopPropagation();
    console.log('Child button event invoked')
})

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Default event prevented');
})

/// * MINI PROJECT CODE * ///

const toDoInput = document.getElementById('todo-input');
let toDoInputValue = '';

toDoInput.addEventListener('change', function(event){
    toDoInputValue = event.target.value;
})

function createToDo(){
    //1. creat a list item
    //2. give li text content from input
    //3. add event to li that allows user to remove it
    //4. attach element to the ul

    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInputValue;

    newToDo.addEventListener('click', function(){
        newToDo.remove();
    })

    document.querySelector('#task-list').appendChild(newToDo);
    toDoInput.value = '';
    toDoInputValue = '';
}