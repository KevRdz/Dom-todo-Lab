const inputId = document.getElementById('list-input')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
const rstBtn = document.getElementById('reset-button')

btn.addEventListener('click', function (evt){
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inputId.value = " "
})

// function init(){
//   rstBtn.setAttribute(true)
// }

// rstBtn.addEventListener('reset', init)


