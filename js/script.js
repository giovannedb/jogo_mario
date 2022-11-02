const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

/*função que chama o jump e finaliza ela para que possa pular novamente */
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        pipe.style.animation = 'none';
        pipe.style.left = `${marioPosition}px`

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '500px'

        clearInterval(loop);
    }
} ,10);

document.addEventListener('keydown', jump);