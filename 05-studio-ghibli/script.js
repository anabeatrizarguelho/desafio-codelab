function initButtonClique () {

const button = document.querySelectorAll('.button a');

function btnClique(event) {
    const eventActive = event.currentTarget;

    eventActive.classList.add('ativo');

    setTimeout(() => {
        eventActive.classList.remove('ativo');
    }, 300)
}

button.forEach ((btn) => {
    btn.addEventListener('click', btnClique);
});
}
initButtonClique();

