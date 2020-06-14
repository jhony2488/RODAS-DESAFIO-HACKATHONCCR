$('.questions').hide()
$('.res').hide()
let warnDepression = 0
let warnAnsiedade = 0
let warnStress = 0
let pontosStress = 0
let pontosAnsiedade = 0
let pontosDepressao = 0
const res2 = document.getElementById('res')
function start() {
  $('.questions').show()
  $('.start').hide()
}
function validation(frm) {
  let validation = false
  if (
    frm.pergunta1.value == '' ||
    frm.pergunta2.value == '' ||
    frm.pergunta3.value == '' ||
    frm.pergunta4.value == '' ||
    frm.pergunta5.value == '' ||
    frm.pergunta6.value == '' ||
    frm.pergunta7.value == '' ||
    frm.pergunta8.value == '' ||
    frm.pergunta9.value == '' ||
    frm.pergunta10.value == '' ||
    frm.pergunta11.value == '' ||
    frm.pergunta12.value == '' ||
    frm.pergunta13.value == '' ||
    frm.pergunta14.value == '' ||
    frm.pergunta15.value == '' ||
    frm.pergunta16.value == '' ||
    frm.pergunta17.value == '' ||
    frm.pergunta18.value == '' ||
    frm.pergunta19.value == '' ||
    frm.pergunta20.value == '' ||
    frm.pergunta21.value == ''
  ) {
    alert('Responda todas as perguntas')
    validation = false
    return false
  } else {
    validation = true
  }
  if (validation) {
    $('.questions').hide()
    $('.res').show()
    $('.start').hide()
    res(frm)
  }
}

function res(frm) {
  if (frm.pergunta1.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta1.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta1.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta1.value == 'sempre') {
    pontosStress += 3
  }
  if (frm.pergunta2.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta2.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta2.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta2.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta3.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta3.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta3.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta3.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta4.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta4.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta4.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta4.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta5.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta5.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta5.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta5.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta6.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta6.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta6.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta6.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta7.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta7.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta7.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta7.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta8.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta8.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta8.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta8.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta9.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta9.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta9.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta9.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta10.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta10.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta10.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta10.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta11.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta11.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta11.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta11.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta12.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta12.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta12.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta12.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta13.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta13.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta13.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta13.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta14.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta14.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta14.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta14.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta15.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta15.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta15.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta15.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta16.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta16.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta16.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta16.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta17.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta17.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta17.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta17.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta18.value == 'nunca') {
    pontosStress += 0
  } else if (frm.pergunta18.value == 'asVezes') {
    pontosStress += 1
  } else if (frm.pergunta18.value == 'geralmente') {
    pontosStress += 2
  } else if (frm.pergunta18.value == 'sempre') {
    pontosStress += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta19.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta19.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta19.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta19.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta20.value == 'nunca') {
    pontosAnsiedade += 0
  } else if (frm.pergunta20.value == 'asVezes') {
    pontosAnsiedade += 1
  } else if (frm.pergunta20.value == 'geralmente') {
    pontosAnsiedade += 2
  } else if (frm.pergunta20.value == 'sempre') {
    pontosAnsiedade += 3
  } else {
    //nao faça nada
  }
  if (frm.pergunta21.value == 'nunca') {
    pontosDepressao += 0
  } else if (frm.pergunta21.value == 'asVezes') {
    pontosDepressao += 1
  } else if (frm.pergunta21.value == 'geralmente') {
    pontosDepressao += 2
  } else if (frm.pergunta21.value == 'sempre') {
    pontosDepressao += 3
  } else {
    //nao faça nada
  }

  calculoRes(pontosStress, pontosAnsiedade, pontosDepressao)
}
function calculoRes(stress, ansiedade, depressao) {
  if (depressao <= 9) {
    console.log('Nível de Depressão: Normal')
    warnDepression = 0
  } else if (depressao <= 13 && depressao > 9) {
    console.log('Nível de Depressão: Leve')
    warnDepression = 1
  } else if (depressao <= 20 && depressao > 13) {
    console.log('Nível de Depressão: Moderada')
    warnDepression = 2
  } else if (depressao <= 27 && depressao > 20) {
    console.log('Nível de Depressão: Severa')
    warnDepression = 3
  } else if (depressao <= 28 && depressao > 27) {
    console.log('Nível de Depressão: Muito Severa')
    warnDepression = 4
  } else {
    //nao faça nada
  }
  if (ansiedade <= 7) {
    console.log('Nível de Ansiedade: Normal')
    warnAnsiedade = 0
  } else if (ansiedade <= 9 && ansiedade > 7) {
    console.log('Nível de Ansiedade: Leve')
    warnAnsiedade = 1
  } else if (ansiedade <= 14 && ansiedade > 9) {
    console.log('Nível de Ansiedade: Moderada')
    warnAnsiedade = 2
  } else if (ansiedade <= 19 && ansiedade > 14) {
    console.log('Nível de Ansiedade: Severa')
    warnAnsiedade = 3
  } else if (ansiedade <= 20 && ansiedade > 19) {
    console.log('Nível de Ansiedade: Muito Severa')
    warnAnsiedade = 4
  } else {
    //nao faça nada
  }
  if (stress <= 14) {
    console.log('Nível de Stress: Normal')
    warnStress = 0
  } else if (stress <= 18 && stress > 14) {
    console.log('Nível de Stress: Leve')
    warnStress = 1
  } else if (stress <= 25 && stress > 18) {
    console.log('Nível de Stress: Moderada')
    warnStress = 2
  } else if (stress <= 33 && stress > 25) {
    console.log('Nível de Stress: Severa')
    warnStress = 3
  } else if (stress <= 34 && stress > 3) {
    console.log('Nível de Stress: Muito Severa')
    warnStress = 4
  } else {
    //nao faça nada
  }
  resDefinitive(warnDepression, warnAnsiedade, warnStress)
}
function resDefinitive(depressao, ansiedade, stress) {
  if (depressao == 0) {
    res2.innerHTML = 'Seu nivel de depressão e normal,  Parabéns!!' + '<br/>'
  } else if (depressao == 1) {
    res2.innerHTML +=
      'Seu nivel de depressão e Leve tome cuidado para não aumentar' + '<br/>'
  } else if (depressao == 2) {
    res2.innerHTML +=
      'Seu nivel de depressão e Moderado, peça ajuda a um especialista para se tratar' +
      '<br/>'
  } else if (depressao == 3) {
    res2.innerHTML +=
      'Seu nivel de depressão e Severo, procure um de nossos parceiros o mais rapido para que possamos lhe ajudar' +
      '<br/>'
  } else if (depressao == 4) {
    res2.innerHTML +=
      'Seu nivel de depressão e muito Severa, urgentemente  procure um de nossos profissionais' +
      '<br/>'
  }
  if (ansiedade == 0) {
    res2.innerHTML += 'Seu nivel de ansiedade e normal, Parabéns ' + '<br/>'
  } else if (ansiedade == 1) {
    res2.innerHTML +=
      'Seu nivel de ansiedade e Leve tome cuidado para não aumentar , sempre concentre-se no momento presente' +
      '<br/>'
  } else if (ansiedade == 2) {
    res2.innerHTML +=
      'Seu nivel de ansiedade e Moderado, peça ajuda a um especialista para se tratar' +
      '<br/>'
  } else if (ansiedade == 3) {
    res2.innerHTML +=
      'Seu nivel de ansiedade e Severo, procure um de nossos parceiros o mais rapido para que possamos lhe ajudar' +
      '<br/>'
  } else if (ansiedade == 4) {
    res2.innerHTML +=
      'Seu nivel de ansiedade e muito Severa, urgentemente  procure um de nossos profissionais' +
      '<br/>'
  }
  if (stress == 0) {
    res2.innerHTML += 'Seu nivel de stress e normal, Parabéns ' + '<br/>'
  } else if (stress == 1) {
    res2.innerHTML +=
      'Seu nivel de stress e Leve tome cuidado para não aumentar , sempre concentre-se no momento presente' +
      '<br/>'
  } else if (stress == 2) {
    res2.innerHTML +=
      'Seu nivel de stress e Moderado, peça ajuda a um especialista para se tratar' +
      '<br/>'
  } else if (stress == 3) {
    res2.innerHTML +=
      'Seu nivel de stress e Severo, procure um de nossos parceiros o mais rapido para que possamos lhe ajudar' +
      '<br/>'
  } else if (stress == 4) {
    res2.innerHTML +=
      'Seu nivel de stress e muito Severa, urgentemente  procure um de nossos profissionais' +
      '<br/>'
  }
  event.preventDefault()
}
