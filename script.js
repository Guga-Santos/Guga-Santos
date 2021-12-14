window.onload = document.querySelector('#black').className += ' selected';
// window.onload = document.querySelector('#board-size').value = 5
// Inicia adicionando a classe 'selected' a id 'black' onde se encontra a div referente à cor preta.

const pixelBoard = document.querySelector('#pixel-board');

//
let draw = false
//

function numeroGrid(n) {
  for (let i = 1; i <= n * n; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');

    div.addEventListener('mouseover', () => {
      const select = document.querySelector('.selected').style.backgroundColor;
      if(draw) { 
      div.style.backgroundColor = select;
    }
    });
    div.addEventListener('mousedown', () => {
      const select = document.querySelector('.selected').style.backgroundColor;
      if(!draw) { 
      div.style.backgroundColor = select;
    }
    });
    pixelBoard.appendChild(div);
  }
}

window.addEventListener('mousedown', function(){
  draw = true
})

window.addEventListener('mouseup', function(){
  draw = false
})
// Cria uma função com parâmetro 'n' (que será alterado para inputV.value na função acima), cria um laço for que irá percorrer de 1 até (n * n), que foi a maneira de dobrar n.
// Pra cada iteração do for, ele cria uma div e adiciona à ela a classe 'pixel'.
// Cria um evento que, após um clique, a div clicada receba o backgroundColor da cor que está com a classe 'selected'.

function changeValue() {
  const inputV = document.querySelector('#board-size');
  const currentVal = inputV.value;
  const quadrados = document.querySelector('#pixel-board').childElementCount;

  if (!inputV.value === true) {
    alert('Board inválido!');
  } else if (inputV.value >= 5 && inputV.value <= 50) {
    inputV.value = currentVal;
    pixelBoard.innerHTML = '';
    numeroGrid(inputV.value);

    if (inputV.value == (quadrados / inputV.value)) {
      alert('Board inválido!');
    }

    document.querySelector('#pixel-board').style.gridTemplateColumns = `repeat(${inputV.value}, 1fr)`;
    document.querySelector('#pixel-board').style.gridTemplateRows = `repeat(${inputV.value}, 1fr)`;
  }
}
// Define que o value default, quando alterado e validado em button('genarate-board'), se torne o valor corrente.
// Após a alternancia de valor, limpa o quadro de pixels ('pixelboard') e chama a função numeroGrid criando a quantidade de numeros e colunas definida pelo cliente.

// const invalido = document.querySelector('#generate-board');

// invalido.addEventListener('click', function(){
//   const valor = document.querySelector('#board-size').value
//   const quadrados = document.querySelector('#pixel-board').childElementCount

//   if(valor == (quadrados/valor)) {
//     alert('Board inválido!')
//   }
// })

window.onload = changeValue;
// Chama a função changeValue que tem como valor default '5' e monta um quadrado de pixel de 5x5

const bluePick = document.querySelector('#blue');
const redPick = document.querySelector('#red');
const yellowPick = document.querySelector('#yellow');
const blackPick = document.querySelector('#black');

function selectedColor(event) {
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
// Cria uma função que remove a classe 'selected' de onde ela estiver e adiciona onde há um evento click.

blackPick.addEventListener('click', selectedColor);
redPick.addEventListener('click', selectedColor);
bluePick.addEventListener('click', selectedColor);
yellowPick.addEventListener('click', selectedColor);
// Adiciona a função selelectedColor ao caminho onde foi clicado.

const button = document.querySelector('.button');

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearBoard);

// Cria uma função que limpa os quadrados de classe 'pixel'.

// blackPick.addEventListener('click', () => {
//   blackPick.className = 'color selected black';
//   redPick.className = 'color';
//   yellowPick.className = 'color';
//   bluePick.className = 'color';
// });

// bluePick.addEventListener('click', () => {
//   bluePick.className = 'color selected blue';
//   redPick.className = 'color';
//   yellowPick.className = 'color';
//   blackPick.className = 'color';
// });

// redPick.addEventListener('click', () => {
//   redPick.className = 'color selected red';
//   bluePick.className = 'color';
//   yellowPick.className = 'color';
//   blackPick.className = 'color';
// });

// yellowPick.addEventListener('click', () => {
//   yellowPick.className = 'color selected yellow';
//   redPick.className = 'color';
//   bluePick.className = 'color';
//   blackPick.className = 'color';
// });

// Havia feito da forma acima em comentário, porém, foi possível refatorar visualizando alguns outros código de amigos nas salas de estudos e nos próprios pullRequests.

const generate = document.querySelector('#generate-board');

generate.addEventListener('click', () => {
  const transfNumber = parseInt(document.querySelector('#board-size').value);
  if (transfNumber < 5 && transfNumber > 0) {
    document.querySelector('#board-size').value = '5';
    changeValue();
  } else if (transfNumber > 50) {
    document.querySelector('#board-size').value = '50';
    changeValue();
  }
});

const random1 = Math.floor(Math.random() * 255);
const random2 = Math.floor(Math.random() * 255);
const random3 = Math.floor(Math.random() * 255);

const random4 = Math.floor(Math.random() * 255);
const random5 = Math.floor(Math.random() * 255);
const random6 = Math.floor(Math.random() * 255);

const random7 = Math.floor(Math.random() * 255);
const random8 = Math.floor(Math.random() * 255);
const random9 = Math.floor(Math.random() * 255);
// https://stackoverflow.com/questions/20790579/wont-math-floormath-random-255-generate-uneven-probabilities

const paleta = document.querySelector('.color');

blackPick.onload = blackPick.style.backgroundColor = 'rgb(0,0,0)';
bluePick.onload = bluePick.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
redPick.onload = redPick.style.backgroundColor = `rgb(${random4},${random5},${random6})`;
yellowPick.onload = yellowPick.style.backgroundColor = `rgb(${random7},${random8},${random9})`;

// https://www.w3schools.com/jsref/event_onload.asp

const cor1 = document.querySelector('#color1')

cor1.addEventListener('click', () => {
  blackPick.style.backgroundColor = cor1.value
})

const cor2 = document.querySelector('#color2')

cor2.addEventListener('click', () => {
  bluePick.style.backgroundColor = cor2.value
})

const cor3 = document.querySelector('#color3')

cor3.addEventListener('click', () => {
  redPick.style.backgroundColor = cor3.value
})

const cor4 = document.querySelector('#color4')

cor4.addEventListener('click', () => {
  yellowPick.style.backgroundColor = cor4.value
})
