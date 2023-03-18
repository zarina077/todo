// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.getElementById('filter-todo');


// Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
// filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event){
    // Prevent form  from submitting
    event.preventDefault();

       
    // todo DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");
    // create li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
   
    // check mark button
    const complatedButton = document.createElement("button");
    complatedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    complatedButton.classList.add("complete-btn");
    todoDiv.appendChild(complatedButton);
  

    // edit
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
   editBtn.classList.add("edit-btn");
    todoDiv.appendChild(editBtn);
        editBtn.onclick = function(){
            editWorking(newTodo)
        }

    // check trash btn
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    // Append list
    todoList.appendChild(todoDiv);
// clean todo INPUT VALUE
// todoInput.value = ""

if(todoInput.value == ""){
    alert("pleace enter the text")
    todoDiv.remove()
}
else{
    todoInput.value = ""
}
};





function deleteCheck(e){
const item = e.target;
// DELETE TODO
if(item.classList[0] === 'trash-btn'){
const todo = item.parentElement;
// animation
todo.classList.add("fall");
todo.addEventListener('transitionend',function(){
    todo.remove();
})
}

// check mark
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed")
}
 

}
 
function editWorking(e){
let editValue = prompt("edit the select item",e.firstChild.nodeValue)
e.firstChild.nodeValue = editValue;
}