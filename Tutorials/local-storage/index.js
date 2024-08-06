// Session Storage
const sessionTodosContainer = document.getElementById(
    'session-storage-todos-container'
);
const sessionInputEle = document.getElementById(
    'session-storage-todo-input-ele'
);
const sessionAddTaskBtn = document.getElementById(
    'session-storage-add-task-btn'
);

// Local Storage
const localTodosContainer = document.getElementById(
    'local-storage-todos-container'
);
const localInputEle = document.getElementById(
    'local-storage-todo-input-ele'
);
const localAddTaskBtn = document.getElementById(
    'local-storage-add-task-btn'
);

function createTodoLiElements(todoArray) {
    return todoArray.map((i, index) => {
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `session-chbx-${index}`);
        labelEle.setAttribute('for', `session-chbx-${index}`);

        checkboxEle.addEventListener('click', (e) => {
            const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore'));
            todoArr[e.target.getAttribute('id').split('-')[2]].checked =
                !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
            sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
            labelEle.classList.toggle('todo-task-done');
        });

        labelEle.textContent = i.text;
        liElement.append(checkboxEle, labelEle);
        return liElement;
    });
}

window.addEventListener(
    'load',
    (() => {
        const sessionTodoArray =
            JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
        console.log(sessionTodoArray);
    })()
);

sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
    ];

    // Add newTodoArray to the session storage object:
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    console.log(todoLiElements);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    // Get items already in session storage
    let inStorage = JSON.parse(sessionStorage.getItem('codesweetlyStore'));
    console.log("In storage: ", inStorage);

    // Loop through items in session storage and display it in a list if not null
    if (inStorage) {
        for (let i = 0; i < inStorage.length; ++i) {
            let listItem = createTodoLiElements(inStorage)
            sessionTodosContainer.append(listItem[i]);
        }
    }
})