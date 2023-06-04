document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector ('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList (document.getElementById ('new-task-description').value)
    form.reset ()
  })
});

function taskList (task) {
  let p = document.createElement ('p')
  let btn = document.createElement ('button')
  btn.addEventListener ('click', handleDelete)
  btn.textContent = ' x '
  p.textContent = `${task} `
  p.appendChild (btn)
  document.querySelector ('#list').appendChild(p)
}

function handleDelete (e) {
  e.target.parentNode.remove ()
}