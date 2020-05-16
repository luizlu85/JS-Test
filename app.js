// tutorial https://www.youtube.com/watch?v=Ttf3CEsEwMQ

//0000000000000000000000000000000000000000000000000000000000000000000000

// Push to existing project to new github repo
// https://help.github.com/pt/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line

//selectors *********************************************************

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



//event listeners ***************************************************

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);


//functions *********************************************************

function filterTodo(event) {
   // const todos = todoList.childNodes;
}

function addTodo(event) {
    //no browser refresh
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //cliear todoInput value
    todoInput.value = "";
}

function deleteCheck(event){
    //console.log(event.target);
    const item = event.target;
    //delete todo
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        //wait for transition end until remove
        todo.addEventListener('transitionend',function(){
        todo.remove();
        });        
    }
    //checklist
    if(item.classList[0]=== 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}