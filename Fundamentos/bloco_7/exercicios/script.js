//exercicio 3
let clickCount = 0
let textToDisplay = document.querySelector('#text');
document.querySelector('#button1').addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);

//exercicio 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))