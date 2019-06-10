const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskInput.addEventListener('keypress', addTask);
addButton.addEventListener('click', addTask);
addButton.addEventListener('keypress', function(e) {e.preventDefault();});

function addTask(e) {
    const tb = taskInput;
    if ((this === taskInput) && (e.keyCode != 13)) {
        return;
    }
    if (tb.value != '') {
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${tb.value}
            </div>
            <a href="#" class="task__remove" onclick="this.closest('.task').outerHTML = '';">&times;</a>
        </div>        
        `;       
        tb.value = '';
        e.preventDefault();
        return false;
    }
}