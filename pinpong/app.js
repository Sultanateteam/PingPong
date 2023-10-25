// const names = ['Ali', 'Vali', 'Guli']

// const [b, ...h] = names

// // console.log(b, h)


// const mine = {
//     name : 'Abdugani',
//     age : 24,
//     job : 'dev'
// }

// const {name, ...info} = mine

// console.log(name, info)

////////////////////////////////////////////////////////////////////////////////

// const player1 = document.querySelector('.player1')
// const player2 = document.querySelector('.player2')
// const select = document.querySelector('#select')
// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const reset = document.querySelector('.reset')
// const spans = document.querySelector('.span')


// player2.disabled = true
// let timer
// let a = 1

// const uniFunc = () => {
//     left.textContent = 0
//     right.textContent = 0
//     player1.disabled = false
//     player2.disabled = true
//     left.style.color = 'white'
//     right.style.color = 'white'
// }

// select.addEventListener('click', uniFunc )

// const random = () => {
//     return Math.ceil(Math.random()*4)
// }

// player1.addEventListener('click', () => {
//     a = select.value
//     v = random()

//     const inter = setInterval(()=>{
//         left.textContent++
//     },400)
    
//     setTimeout(()=>{
//         clearInterval(inter)
//         if(Number(left.textContent)>Number(a)){
//             timer = setTimeout(() => spans.textContent = '', 3000)
//             player1.disabled = true
//             player2.disabled = true
//             left.style.color = 'green'
//             right.style.color = 'red'
//             spans.textContent = 'Player 1 win'
//             timer
//             return
//         }else{
//             player1.disabled = true
//             player2.disabled = false
//         }
//     },400*v)

    
// })

// player2.addEventListener('click', () => {
//     v = random()
//     a = select.value

//     const sev = setInterval( () => right.textContent++, 400)

//     setTimeout( () => {
//         clearInterval(sev)
//         if(Number(right.textContent)>Number(a)){
//             player1.disabled = true
//             player2.disabled = true
//             left.style.color = 'red'
//             right.style.color = 'green'
//             spans.textContent = 'Player 2 win'
//             timer = setTimeout(() => spans.textContent = '', 3000)
//             timer
//             return
//         }else{
//             player1.disabled = false
//             player2.disabled = true
//         }
//     }, 400 * v )
// })

// reset.addEventListener('click', uniFunc )




const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const select = document.querySelector('#select');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const reset = document.querySelector('.reset');
const spans = document.querySelector('.span');

player2.disabled = true;
let timer;
let a = 1;
let v;

const uniFunc = () => {
    left.textContent = '0';
    right.textContent = '0';
    player1.disabled = false;
    player2.disabled = true;
    left.style.color = 'white';
    right.style.color = 'white';
    spans.textContent = '';
};

select.addEventListener('click', uniFunc);

const random = () => {
    return Math.ceil(Math.random() * 4);
};

player1.addEventListener('click', () => {
    a = parseInt(select.value);
    v = random();

    const inter = setInterval(() => {
        left.textContent = parseInt(left.textContent) + 1;
    }, 400);

    setTimeout(() => {
        clearInterval(inter);
        if (parseInt(left.textContent) > a) {
            timer = setTimeout(() => {
                spans.textContent = '';
            }, 3000);
            player1.disabled = true;
            player2.disabled = true;
            left.style.color = 'green';
            right.style.color = 'red';
            spans.textContent = 'Player 1 wins';
            clearTimeout(timer);
        } else {
            player1.disabled = true;
            player2.disabled = false;
        }
    }, 400 * v);
});

player2.addEventListener('click', () => {
    v = random();
    a = parseInt(select.value);

    const sev = setInterval(() => {
        right.textContent = parseInt(right.textContent) + 1;
    }, 400);

    setTimeout(() => {
        clearInterval(sev);
        if (parseInt(right.textContent) > a) {
            player1.disabled = true;
            player2.disabled = true;
            left.style.color = 'red';
            right.style.color = 'green';
            spans.textContent = 'Player 2 wins';
            timer = setTimeout(() => {
                spans.textContent = '';
            }, 3000);
            clearTimeout(timer);
        } else {
            player1.disabled = false;
            player2.disabled = true;
        }
    }, 400 * v);
});

reset.addEventListener('click', uniFunc);