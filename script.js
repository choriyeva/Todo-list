let listContainer=document.getElementById("list-container");

let inputBox=document.getElementById("input-box");


function addTask(){
    if(inputBox.value===''){
        alert('add Your ToDo')
    }
    else{
        let task=document.createElement("li");
        task.textContent=inputBox.value
        listContainer.appendChild(task);
let span=document.createElement('span');
span.textContent='\u00d7';
task.appendChild(span);
    }
    inputBox.value='';
    saveData();


}
listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked');
        saveData();
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}


function showData(){
   listContainer.innerHTML=localStorage.getItem("tasks")
}

showData()

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};