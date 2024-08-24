const nome = document.getElementById('nome')
const prioridade = document.getElementById('seletor')

function adicionar(){
    const li = document.createElement('li')
    li.innerText = nome.value
    if(prioridade.value == 'alto'){
        li.classList.add('alto')
    }
    else if(prioridade.value == 'medio'){
        li.classList.add('medio')
    }
    else{
        li.classList.add('baixo')
    }
    document.getElementById('nome').value = ''
    const btnexcluir = document.createElement('button')
    btnexcluir.innerText = 'excluir'
    btnexcluir.addEventListener('click', function(){
        li.remove()
    })
    li.appendChild(btnexcluir)
    
    const btnconcluir = document.createElement('button')
    btnconcluir.innerText = 'Concluir'
    btnconcluir.addEventListener('click', function(){
        const concluida = document.getElementById('concluidas')
        concluida.appendChild(li)
        btnconcluir.remove()
        const data = new Date();
        const dataCerta = `${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}`;
        const h2 = document.createElement('p');
        h2.textContent = `Concluída em: ${dataCerta}`;
        li.appendChild(h2);
    })
    li.appendChild(btnconcluir)
    
    const relacionados = document.getElementById('relacionados')
    relacionados.appendChild(li)
}
function concluida(){
    li.innerText = nome.value
    
}