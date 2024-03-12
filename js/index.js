let cards = document.querySelector('.cards');

/* Fetch - Faz a leitura de alguma informação(requisita) */
fetch('jogadores-brasil.json')

    /* Then faz a conversão e depois joga dentro de uma variavel no caso pegou a resposta do json e jogou dentro da variavel resposta, ele sempre aguarda a resposta do anterior */
    .then(resposta => resposta.json())

    /* ForEach = Laço de repetição,enquanto tiver posição no array ele vai trazendo as informações */
    .then(dados => dados.forEach((jogador) => {


        /* Criar um card padrao */
        let card = document.createElement('div')

        /* Da uma classe css para o elemento especificado */
        card.classList.add('card')

        /* Cria um elemento filho dentro do elemento especificado */
        cards.appendChild(card)

        /* InnerHtml = insere qualquer conteudo dentro do html da tag */
        card.innerHTML = `
        <span class = "posicaoP"> ${jogador.posicao}</span>

        <span class = "posicaoG"> ${jogador.posicao}</span>

        <img class = "escudo" src = "images/escudos/${jogador.escudo}.png" alt = ""/>

        <img class = "jogador" src = "images/jogadores/${jogador.foto}.png" alt=""/>

        <h3 class = "nomeJogador">${jogador.nome}</h3>

        <h4 class = "numero">${jogador.numero}</h4>
        `
    }))