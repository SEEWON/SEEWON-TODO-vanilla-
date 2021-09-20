const toDo = document.querySelector('.inputToDo');
const buttonClick = document.querySelector('.inputButton');
const toDoList = document.querySelector('.toDoList');

//버튼 클릭 시 함수 실행 Event Listener
buttonClick.addEventListener('click', addToDo);

function addToDo(event) {
  event.preventDefault(); //submit 시 새로고침 방지

  const newDiv = document.createElement('div');
  newDiv.classList.add('toDoDiv');

  const newSuccessButton = document.createElement('button');
  newSuccessButton.innerHTML = '달성';
  newSuccessButton.classList.add('successButton');
  newDiv.appendChild(newSuccessButton);

  const newLi = document.createElement('li');
  newLi.innerText = '여기다 inputToDo 넣기';
  newLi.classList.add('toDoLi');
  newDiv.appendChild(newLi);

  const newDeleteButton = document.createElement('button');
  newDeleteButton.innerHTML = '삭제';
  newSuccessButton.classList.add('deleteButton');
  newDiv.appendChild(newDeleteButton);

  toDoList.appendChild(newDiv);
}
