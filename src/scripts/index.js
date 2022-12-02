let levelCheck = 0;
const body = document.querySelector('body');
const state = 'level';
const titleHref = '';

window.addEventListener('DOMContentLoaded', renderBlockGame(document.querySelector('.app')));

function renderBlockGame(block) {
    const app = document.querySelector('.app');
   
    body.style.backgroundColor = '#004781';

    const blockGame = document.createElement('div');
    blockGame.classList.add('box-level');

    const title = document.createElement('h1');
    title.classList.add('title_level');
    title.textContent = 'Выбери сложность';

    const levels = document.createElement('div');
    levels.classList.add('levels');
    levels.id = 'levels';

    const level1 = document.createElement('input');
    level1.classList.add('level1');
    level1.type = 'radio';
    level1.id = 'level1';
    level1.name = 'level';

    const label1 = document.createElement('label');
    label1.classList.add('level');
    label1.textContent = '1';

    const level2 = document.createElement('input');
    level2.classList.add('level2');
    level2.type = 'radio';
    level2.id = 'level2';
    level2.name = 'level';

    const label2 = document.createElement('label');
    label2.classList.add('level');
    label2.textContent = '2';


    const level3 = document.createElement('input');
    level3.classList.add('level3');
    level3.type = 'radio';
    level3.id = 'level3';
    level3.name = 'level';

    const label3 = document.createElement('label');
    label3.classList.add('level');
    label3.textContent = '3';

    const start = document.createElement('button');
    start.classList.add('start-game');
    start.textContent = 'Старт'

    block.appendChild(blockGame);

    blockGame.appendChild(title)
    blockGame.appendChild(levels)

    levels.appendChild(level1);
    levels.appendChild(label1);

    levels.appendChild(level2);
    levels.appendChild(label2);

    levels.appendChild(level3);
    levels.appendChild(label3);

    blockGame.appendChild(start);

    const levelID = document.getElementById('levels')
    levelID.addEventListener("click", function (event) {
        let lvlIDpick = ([...document.querySelectorAll('.level')].indexOf(event.target)) + 1;
        levelCheck = lvlIDpick;

    });

    start.addEventListener('click', (event) => {
        const levelI = `level${levelCheck}.html`;
        let levelSave = localStorage.setItem('lvl', JSON.stringify(levelCheck));
        const level = JSON.stringify(levelCheck);
        console.log(level);

        if (level !== 0) {
            app.textContent = '';
            history.pushState(state, titleHref, levelI);
            renderLevel(document.querySelector('.app'));
            console.log(localStorage);
        }
    });

}

function renderLevel (block) {
    const title = document.createElement('h1');
    title.textContent = `Уровень ${levelCheck}`;
    body.style.backgroundColor = '#999999'
    block.appendChild(title);
}
