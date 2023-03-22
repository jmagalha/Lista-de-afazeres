const entrada = document.getElementById('entrada')

const tabela = document.getElementById('tabela')

const afazeres = document.getElementsByClassName('afazer')

function inserirAfazer() {
    const input = entrada.value
    let qtd = afazeres.length
    tabela.insertAdjacentHTML('afterbegin', `<tbody 
      id="${qtd + 1}" 
      class="afazer">
        <tr>
          <td>${input}</td>
          <td>
            <button onclick="deletarAfazer(${qtd + 1})">Deletar</button>
          </td>
        </tr>
    </tbody>`)
  

    entrada.value = ''
}

function deletarAfazer(id) {
    const afazer = document.getElementById(id)
    if (afazer) {
      afazer.remove()
    }
}

function limparAfazeres() {
  tabela.innerHTML= ''
}