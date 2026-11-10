 function addTarefas(){
    let input = document.querySelector("input").value/*input é o valor ditado no campo de texto, essa linha pega o valor e atribuia vaiavel imput*/ 
    if(input.trim() === "") return;

    let li =document.createElement("li")/* aqui criamos um novo elemento que será adicionado a lista de tarefas quando clicarmos no botão */

    li.innerHTML = input +
    "<span onclick='concluirTarefa(this)'>✅</span>" + 
    "<span onclick='deletarTarefa(this)'>❌</span>"/* aqui adicionamos o valor do input dentro do elemento li, e adicionamos uma tag span que será usada para o botão de deletar a tarefa */

    document.querySelector("ul").appendChild(li)/*Aqui adicinamos o elemento li que ciramos como filho detro da ul, assim o valor armazenado na li vai iaparecer na tela após clicar botäo  */
    document.querySelector("input").value = ""/* aqui limpamos o campo de texto após clicar no botão */
}   
function deletarTarefa(elemento){
   elemento.parentElement.remove();/* aqui subimos na hierarquia do dom para achmarmos o pai do elemento SPAN e quando clicarmos no span este elemento será removido */ 
}
function concluirTarefa(elemento) {
   elemento.parentElement.classList.toggle("concluida")
}