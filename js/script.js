let todoForm = null;
let todoList = null;

function addTask(text){
    
    //Element todo
    
    let todo = document.createElement('div');
    todo.classList.add('todoElement');
    
    //Upper bar
    
    let todoBar = document.createElement('div');
    todoBar.classList.add('todoElementBar');
    
    
    //Date
    
    let todoDate = document.createElement('div');
    todoDate.classList.add('todoElementBar');
    let date = new Date();
    let dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    todoDate.innerText = dateText;
    
    //Button delete
    
    let todoDelete = document.createElement('button');
    todoDelete.classList.add('todoElementDelete');
    todoDelete.innerText = 'DELETE';
    
    //Adding elements
    
    todoBar.appendChild(todoDate);
    todoBar.appendChild(todoDelete);
    
    //Elements Text
    
    let todoText = document.createElement('div');
    todoText.classList.add('todoElementText');
    todoText.innerText = text;
    
    //Adding elements
    
    todo.appendChild(todoBar);
    todo.appendChild(todoText);
    
    //Adding elements
    
    todoList.append(todo);
    
    //Delete - remove
    
    todoDelete.addEventListener('click',function(e){
         e.preventDefault();
        todoList.removeChild(todo);
    });
      
}

document.addEventListener('DOMContentLoaded', function(){
    todoForm = document.querySelector('#todoForm');
    todoList = document.querySelector('#todoList');
    

    todoForm.addEventListener('submit', function(e){
        e.preventDefault();
        let textarea = this.querySelector('textarea');
        if (textarea !== ''){
            addTask(textarea.value);
            textarea.value = '';
        }
    });
    
});

