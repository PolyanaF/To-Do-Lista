const inputAdd = document.getElementById('input-add')
const inputPesquisar = document.getElementById('input-pesquisar')
const btnAdd = document.getElementById('btn-add')
const btnPesquisar = document.getElementById('btn-pesquisar')
const ul = document.querySelector('ul')


let i = 1

const iconeExcluir = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>'
const iconeEditar = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'
const iconeOk = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>'

btnAdd.addEventListener('click', addLista)


function addLista() {

  inputAdd.classList.toggle('hide')
  
  if(inputAdd.value !== '') {
    const li = document.createElement('li')
    const btnExcluir = document.createElement('button')
    const btnEditar = document.createElement('button')
    const btnOk = document.createElement('button')
    const btnDiv = document.createElement('div')

    
    li.innerText = inputAdd.value
    li.className = 'tarefa-'+ i
  
    btnExcluir.innerHTML = iconeExcluir
    btnExcluir.className = 'tarefa-'+ i
    btnExcluir.id = 'btn-excluir'

    btnEditar.innerHTML = iconeEditar
    btnEditar.className = 'tarefa-'+ i
    btnEditar.id = 'btn-editar'

    btnOk.innerHTML = iconeOk
    btnOk.className = 'tarefa-'+ i
    btnOk.id = 'btn-ok'


    btnDiv.className = 'tarefa-'+ i

    btnDiv.append(btnOk,btnEditar,btnExcluir)
    
    li.append(btnDiv)
    ul.append(li)
    inputAdd.value = ''
  
    i++

    btnOk.addEventListener('click', function() {
      const idRiscar = btnOk.className
      const liRiscar = document.querySelector('li.' + idRiscar)

      liRiscar.classList.toggle('pronto')

    })

    btnEditar.addEventListener('click', function () {
      const idEditar = btnEditar.className
      const liEditar = document.querySelector('li.' + idEditar)

      
   
     })
  
    btnExcluir.addEventListener('click', function () {
     const idExcluir = btnExcluir.className
     const liExcluir = document.querySelector('li.' + idExcluir)
  
     liExcluir.remove()
  
    })
  }
  


}



