document.addEventListener('DOMContentLoaded', function (){
    const botaoburguer = document.getElementById('hamburguer')

    botaoburguer.addEventListener('click', function clickMenu() {
        document.body.classList.toggle('comp-ativo');
    });

});