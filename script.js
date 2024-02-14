function createTask(task) {
    let divElement = document.createElement('div');
    let inputElement = document.createElement('input');
    let labelElement = document.createElement('label');
    let hrElement = document.createElement('hr');
    divElement.classList.add('p-2');
    inputElement.setAttribute('id', task);
    labelElement.classList.add('ml-2');
    labelElement.setAttribute('for', task);
    labelElement.innerText = task;
    inputElement.type = 'checkbox';
    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
    divElement.appendChild(hrElement);
    // set to incomplete task
    if (task.length <= 0) {
        return alert("Add task note");
    }
    const incompleteTask = document.getElementById('incomplete-task');
    incompleteTask.appendChild(divElement);
    const completeTask = document.getElementById('complete-task');
    // additional things for complete task
    let divCompleteTask = document.createElement('div');
    divCompleteTask.classList.add('flex');
    divCompleteTask.classList.add('justify-between');
    divCompleteTask.classList.add('p-2');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('id',task);
    deleteBtn.classList.add('bg-red-600');
    deleteBtn.classList.add('p-1');
    deleteBtn.classList.add('text-white');
    deleteBtn.classList.add('rounded-md');
    // input(checkbox) on change
    inputElement.addEventListener('change', function () {
        divCompleteTask.appendChild(labelElement);
        divCompleteTask.appendChild(deleteBtn);
        completeTask.appendChild(divCompleteTask);
        divElement.classList.add('hidden');
        // delete button
        deleteBtn.addEventListener('click',function(){
            divCompleteTask.classList.add('hidden');
        })
    });

}
// target input field
document.getElementById('add-task').addEventListener('click', function () {
    const inputField = document.getElementById('do-task');
    const task = inputField.value;
    inputField.value = '';
    createTask(task);
});