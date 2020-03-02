let tempo = new Date();
let hr = tempo.getHours();

let container = document.querySelector('#container');
let foto = document.querySelector('#foto');
let frase = document.querySelector('.conteudo h2');

if (hr >= 6 && hr <= 12) {
    container.classList.add('dia');
    foto.classList.add('bomdia');
    frase.innerHTML = `Bom dia são ${hr} hr`;
}
else if (hr >= 13 && hr <= 18) {
    container.classList.add('tarde');
    foto.classList.add('boatarde');
    frase.innerHTML = `Boa tarde são ${hr} hr`;
}
else if (hr >= 19 && hr <= 23 || hr == 0) {
    container.classList.add('noite');
    foto.classList.add('boanoite');
    frase.innerHTML = `Boa noite são ${hr} hr`;
}
else {
    container.classList.add('noite');
    foto.classList.add('boanoite');
    frase.innerHTML = `Bom madrugada são ${hr} hr`;
}

// adiciona a hr que o usuario quizer
document.querySelector('.conteudo button').addEventListener('click', e => {
    let valor = prompt('Digite somente a hr');
    const limpar = ()=>{
        document.querySelector('#container').classList.remove('dia', 'tarde', 'noite');
        document.querySelector('#foto').classList.remove('bomdia', 'boatarde', 'boanoite');
    }
    if (!isNaN(valor)) {
        let tempo = new Date();
        tempo.setHours(valor);
        let hr = tempo.getHours();

        let container = document.querySelector('#container');
        let foto = document.querySelector('#foto');
        let frase = document.querySelector('.conteudo h2');

        if (hr >= 6 && hr <= 12) {
            limpar();
            container.classList.add('dia');
            foto.classList.add('bomdia');
            frase.innerHTML = `Bom dia são ${hr} hr`;
        }
        else if (hr >= 13 && hr <= 18) {
            limpar();
            container.classList.add('tarde');
            foto.classList.add('boatarde');
            frase.innerHTML = `Boa tarde são ${hr} hr`;
        }
        else if (hr >= 19 && hr <= 23 || hr == 0) {
            limpar();
            container.classList.add('noite');
            foto.classList.add('boanoite');
            frase.innerHTML = `Boa noite são ${hr} hr`;
        }
        else {
            limpar();
            container.classList.add('noite');
            foto.classList.add('boanoite');
            frase.innerHTML = `Bom madrugada são ${hr} hr`;
        }
    } else {
        alert('Digite um numero');
    }

})