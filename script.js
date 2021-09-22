const inputToDo = document.querySelector('.inputToDo');
const buttonClick = document.querySelector('.inputButton');
const toDoList = document.querySelector('.toDoList');

const addToDo = (event) => {
  event.preventDefault(); //submit 시 새로고침 방지

  const newDiv = document.createElement('div');
  newDiv.classList.add('toDoDiv'); //1개의 todo를 감쌀 div태그

  const newSuccessButton = document.createElement('button');
  newSuccessButton.innerHTML = '달성';
  newSuccessButton.classList.add('successButton');
  newDiv.appendChild(newSuccessButton); //달성 버튼

  const newLi = document.createElement('li');
  newLi.innerText = inputToDo.value;
  newLi.classList.add('toDoLi');
  newDiv.appendChild(newLi);
  inputToDo.value = ''; //할 일이 들어갈 li태그

  const newDeleteButton = document.createElement('button');
  newDeleteButton.innerHTML = '삭제';
  newSuccessButton.classList.add('deleteButton');
  newDiv.appendChild(newDeleteButton); //삭제 버튼

  toDoList.appendChild(newDiv);
};

const deleteToDo = (event) => {
  const deleteItem = event.target.parentElement; //삭제할 button의 div태그 불러오기
  deleteItem.remove();
};

//버튼 클릭 시 함수 실행 Event Listener
buttonClick.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteToDo);
