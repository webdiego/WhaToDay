

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo =>{

 const html = `<li class="list-group-item flex ">
 <span>${todo}</span>
 <i class="fas fa-fire-alt delete"></i>
</li>  `;


list.innerHTML += html;
};


//////// ADD


addForm.addEventListener ('submit' , e =>{

  e.preventDefault();

  const todo = addForm.add.value.trim(); 
  if(todo.length){ 
  

    generateTemplate(todo);
    addForm.reset();
    
    
  };

});


/////DELETE

list.addEventListener('click', e =>{   
 if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
}  

});



//// SEARCH


const filterTodos = (term) =>{
 
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filter'));
  

  Array.from(list.children)
  .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.remove('filter')); 
};


search.addEventListener('keyup', () => {
 
  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});