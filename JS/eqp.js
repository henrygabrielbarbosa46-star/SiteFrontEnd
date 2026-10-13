let prox = document.querySelector('.prox');
let prev = document.querySelector('prev');

prox.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.eqp').appendChild(items[0])
})