let gridFooter = document.querySelector('.grid-footer');

gridFooter.addEventListener('mousemove', function(evento){
    const rect = gridFooter.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;

    gridFooter.style.setProperty('--mx', x + 'px')
    gridFooter.style.setProperty('--my', y + 'px')
});