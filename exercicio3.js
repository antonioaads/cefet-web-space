const botoes = document.querySelectorAll('.botao-expandir-retrair');

function toggleP(e) {
    const clickedButton = e.currentTarget;
    const parent = clickedButton.parentNode;
    const isExpanded = parent.classList.toggle('expandido');
    clickedButton.innerHTML = isExpanded ? '-' : '+';
}

for (let botaoEl of botoes) {
    botaoEl.addEventListener('click', toggleP);
}