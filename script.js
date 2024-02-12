
function addtask(){
    let inputValue =document.querySelector('#task').value;
    let dateValue =document.querySelector('#dataInput').value;
 if(inputValue !== ""){
    
    const listItems = document.createElement('li');

    listItems.textContent = inputValue;
    const taskList = document.querySelector('#task-list');
    taskList.append(listItems)

    let date = document.createElement('li');
    date.textContent = dateValue;
    listItems.append(date)

 let deletButton = document.createElement('button');

 
 deletButton.textContent = 'x';
 deletButton.classList.add('delete-btn');

 listItems.append(deletButton)

deletButton.addEventListener('click', function(){
    listItems.remove();
})
   
    document.querySelector('#task').value = "";
}else{
    alert("add a task please")
}
}
const btn =document.querySelector('#btn')
btn.addEventListener("click",addtask)