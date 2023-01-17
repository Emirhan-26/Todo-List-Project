let input = document.getElementById('input');
let addInput = document.getElementById('add-input');
let todos = document.getElementById('todos');

addInput.addEventListener('click', function(){
    var todo = document.createElement('p');
    todo.className = "todo";
    todo.innerText = input.value;
    todos.appendChild(todo);
    input.value = ""

    todo.addEventListener('click', function(){
        todo.style.textDecoration = 'line-through'
    })

    todo.addEventListener('dblclick', function(){
        todos.removeChild(todo);
    })
})