const mainContainer = document.querySelector('#mainContainer');
const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.innerText = document.querySelector('#habit').value;
    div.setAttribute('class', 'checkbox');
    mainContainer.appendChild(div);

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class','fa-solid fa-check');
    checkBtn.classList.add('checkBtn');
    div.appendChild(checkBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'fa-regular fa-circle-xmark');
    deleteBtn.classList.add('deleteBtn');
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        div.remove(div.removeChild);
    })
    
    checkBtn.addEventListener('click', function() {

        div.style.textDecoration = 'line-through';
        
    })
    checkBtn.addEventListener('dblclick', function() {
        div.style.textDecoration = 'none';
    })

})
