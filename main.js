const BASE_URL ='https://crudcrud.com/api/831bdd128e8c46ff8970cab4c10763e1 ';

let inputTodo = document.querySelector("#input-todo");
let inputTodoDescp = document.querySelector("#input-todo-descp");
let btnAddItem = document.querySelector("#btn-add-item");
let divRemaining = document.querySelector("#div-remaining");
let btnCorrect = document.querySelector("#btn-correct");
let btnCross = document.querySelector("#btn-cross");
let tableCompleted = document.querySelector("#table-completed");
let tableRemaining = document.querySelector("#table-remaining");

//Add Item
btnAddItem.addEventListener("click",()=>{
    let TodoText = inputTodo.value;
    let DescText = inputTodoDescp.value;
    
    let row = document.createElement('tr');
    let tdTodo = document.createElement('td');
    let tdDesc = document.createElement('td');
    let tdBtn = document.createElement('td');
    let crossBtnTemp = document.createElement('button');
    let corrctBtnTemp = document.createElement('button');
    let crossImg = document.createElement('img');
    let correctImg = document.createElement('img');
    
    crossImg.setAttribute('src', 'ic-cross.png'); 
    correctImg.setAttribute('src', 'ic-correct.png'); 
    crossImg.setAttribute('alt', 'Cross'); 
    correctImg.setAttribute('alt', 'Correct'); 
    
    crossBtnTemp.append(crossImg);
    corrctBtnTemp.append(correctImg);
    
    tdBtn.append(corrctBtnTemp);
    tdBtn.append(crossBtnTemp);
    
    tdTodo.textContent = TodoText; 
    tdDesc.textContent = DescText; 
    
    row.append(tdTodo);
    row.append(tdDesc);
    row.append(tdBtn);
    
    tableRemaining.append(row);
});

//Correct
btnCorrect.addEventListener("click",()=>{
    
});

//Crosss
btnCross.addEventListener("click",()=>{
    
});
