const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const container = document.getElementById('todo-list')


for (let i = 0; i < tasks.length; i++) {
    const element = document.createElement('li')
    element.classList.add('task')
    element.innerText = tasks[i]
    container.appendChild(element)

}
