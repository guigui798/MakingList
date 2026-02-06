
let tarefas = document.querySelector('.titulo_tarefa');
let addescricao = document.querySelector('.descricao_tarefa');
let tipo;
let tarefas_responsivas = document.querySelector('.titulo_tarefa_responsivo');
let addescricao_responsiva = document.querySelector('.descricao_tarefa_responsivo');
const organizacao_tarefas = document.querySelector('.organizacao_tarefas');
const add_tarefa_responsivo = document.querySelector('.add_tarefa_responsivo');
const container_tarefa_responsiva = document.querySelector('.inputs_responsivo_container');

document.addEventListener('click', function(e){
    if(e.target ===container_tarefa_responsiva){
        container_tarefa_responsiva.style.display='none';
    }
});

add_tarefa_responsivo.addEventListener('click', function(){
    if(document.querySelector('.inputs_responsivo_container').style.display ==='none'){
        document.querySelector('.inputs_responsivo_container').style.display ='flex';
    }
    else{
        document.querySelector('.inputs_responsivo_container').style.display ='none';
    }
});

document.addEventListener('click', function(e){
    if(e.target.classList.contains('escola')){
        tipo = 'escola';
    }
    else if(e.target.classList.contains('trabalho')){
        tipo = 'trabalho';
    }
    else if(e.target.classList.contains('lazer')){
        tipo = 'lazer';
    }
    else if(e.target.classList.contains('casa')){
        tipo = 'casa'; 
    }
    else if(e.target.classList.contains('outros')){
        tipo = 'outros';
    }
    console.log(tipo);
});

const banco_tarefas = [];


const filtrar = () => {
    if(organizacao_tarefas.style.display === 'flex'){
        organizacao_tarefas.style.display = 'none';
        document.querySelector('.container_tarefa').style.display = 'flex';
        return;
    }
    if(banco_tarefas.length === 0){
        alert('Nenhuma tarefa para filtrar!');
        return;
    }
    else{
        banco_tarefas.forEach( (tarefa) => {
        const tarefa_div = document.createElement('div');
        tarefa_div.classList.add('tarefa_filtrada');
        tarefa_div.innerText = tarefa.titulo;

        const descricaoDiv = document.createElement('div');
        descricaoDiv.classList.add('descricao');
        descricaoDiv.innerText = tarefa.descricao_tarefa;
        tarefa_div.appendChild(descricaoDiv);

        if(tarefa.tipo_tarefa === 'escola'){
           document.querySelector('.tarefas_escola').appendChild(tarefa_div);
        }
        else if(tarefa.tipo_tarefa === 'trabalho'){
            document.querySelector('.tarefas_trabalho').appendChild(tarefa_div);

        }
        else if(tarefa.tipo_tarefa === 'lazer'){
            document.querySelector('.tarefas_lazer').appendChild(tarefa_div);

        }
        else if(tarefa.tipo_tarefa === 'casa'){
            document.querySelector('.tarefas_casa').appendChild(tarefa_div);

        }
        else if(tarefa.tipo_tarefa === 'outros'){
            document.querySelector('.tarefas_outros').appendChild(tarefa_div);

        }
        organizacao_tarefas.style.display = 'flex';
        document.querySelector('.container_tarefa').style.display = 'none';

});
    }
}

function addTarefa(){
    const texto = tarefas.value;
    let descricao = addescricao.value;

    if(!texto.trim() || !tipo){
        alert('Por favor, insira uma tarefa válida e selecione um tipo.');
    }
    else{
      if(!descricao.trim()){
        descricao = 'Sem descrição';
        
    }

    const tarefa_obj = {
        titulo: texto,
        descricao_tarefa: descricao,
        tipo_tarefa: tipo,
        vizibilidade: true
    };

    banco_tarefas.push(tarefa_obj);
    console.log(banco_tarefas);
    const novaTarefa = document.createElement('div');
    novaTarefa.classList.add('tarefa');
    novaTarefa.innerText = texto;
    document.querySelector('.container_tarefa').appendChild(novaTarefa);

    const excluir = document.createElement('div');
    excluir.classList.add('excluir');
    novaTarefa.appendChild(excluir);

    const descricaoDiv = document.createElement('div');
    descricaoDiv.classList.add('descricao');
    descricaoDiv.innerText = descricao;
    novaTarefa.appendChild(descricaoDiv);
  
    }
    tarefas.value = '';
    addescricao.value = '';
}


function addTarefaResponsivo(){
    const texto = tarefas_responsivas.value;
    let descricao = addescricao_responsiva.value;

    if(!texto.trim() || !tipo){
        alert('Por favor, insira uma tarefa válida e selecione um tipo.');
    }
    else{
      if(!descricao.trim()){
        descricao = 'Sem descrição';
        
    }

    const tarefa_obj = {
        titulo: texto,
        descricao_tarefa: descricao,
        tipo_tarefa: tipo,
        vizibilidade: true
    };

    banco_tarefas.push(tarefa_obj);
    console.log(banco_tarefas);
    const novaTarefa = document.createElement('div');
    novaTarefa.classList.add('tarefa');
    novaTarefa.innerText = texto;
    document.querySelector('.container_tarefa').appendChild(novaTarefa);

    const excluir = document.createElement('div');
    excluir.classList.add('excluir');
    novaTarefa.appendChild(excluir);

    const descricaoDiv = document.createElement('div');
    descricaoDiv.classList.add('descricao');
    descricaoDiv.innerText = descricao;
    novaTarefa.appendChild(descricaoDiv);
  
    }
    tarefas.value = '';
    addescricao.value = '';
    document.querySelector('.inputs_responsivo_container').style.display ='none';
}


const concorda = document.getElementById('task');
concorda.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        addTarefa();
    }
}
);
const add_tarefa = document.querySelector('.add_tarefa_responsivo');
const concluir = document.querySelector('.excluir');
//o método target vai pegar o elemento que sofreu o evento
document.addEventListener('click', function(e){
    if(e.target.classList.contains('excluir')){
        e.target.style.animation = 'concluir 0.5s';
        setInterval( () => {
            e.target.parentElement.style.display = 'none';
        }, 400);
        for(let i = 0; i < banco_tarefas.length; i++){
            if(banco_tarefas[i].titulo === e.target.parentElement.innerText){
                banco_tarefas[i].vizibilidade = false;
            }
    }
}
});

//basicamente o excluir é filho da tarefa, então, supostamente, ao clicar no excluir,