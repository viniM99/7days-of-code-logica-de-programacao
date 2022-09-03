function welcomeMessage() {
    let name = prompt("Qual seu nome?")
    let age = prompt("Qual sua idade?")
    let lang = prompt("Qual linguagem de programação você está estudando?")

    let message = 'Olá ' + name + ', você tem ' + age + ' anos e está aprendendo ' + lang
    alert(message)

    let likeLang = prompt('Você gosta de estudar ' + lang + '?\n1 - Sim\n2 - Não')

    switch (likeLang) {
        case "1": 
            alert('Muito bom! Continue estudando e você terá muito sucesso.')
            break
        case "2":
            alert('Ahh que pena... Já tentou aprender outras linguagens?')
            break
        default:
            alert('Digite uma opção válida!')
            break
    }
}

welcomeMessage()