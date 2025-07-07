const secao = document.querySelector('.secao-roxa'); //area efeito
const presente = document.querySelector('.presente'); // imagem efeito
const intensidade = 20; 

const moverElemento = (event) => {
    // Pega as dim e a pos da sec na tela
    const retangulo = secao.getBoundingClientRect();
    // Calcula a posição mouse x centro da seção
    const x = event.clientX - retangulo.left - retangulo.width / 2;
    const y = event.clientY - retangulo.top - retangulo.height / 2;
    
    const moveX = x / intensidade;
    const moveY = y / intensidade;
    
    // Aplica a transformação
    presente.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
};

const resetarPosicao = () => {
    presente.style.transform = 'translateX(0) translateY(0)';
};

secao.addEventListener('mousemove', moverElemento);
secao.addEventListener('mouseleave', resetarPosicao);

