//DOM references
const button1 = document.getElementById('team-blue-btn');
const button2 = document.getElementById('team-red-btn');
const turn1 = document.getElementById('turn-1');
const turn2= document.getElementById('turn-2');
const blueDiceValue = document.getElementById('blue-dice-value');
const redDiceValue = document.getElementById('red-dice-value');
const blueCurrentTurn = document.getElementById('blue-current-turn');
const redCurrentTurn = document.getElementById('red-current-turn');
const twilightZone4 = document.getElementById('square20')
const messageBlue = document.getElementById('message-blue');
const messageRed = document.getElementById('message-red');
const messagePara = document.querySelector('.message-para');
const treasure = document.getElementById('gold');
const twilightZone1 = document.getElementById('square6');
const twilightZone2= document.getElementById('square27');
const twilightZone3 = document.getElementById('square15');


const squares = [
   'square1','square2','square3','square7','square10','square11','square12','square8','square4','square5','square6','square9','square13','square14','square21','square20','square19','square18','square17','square16','square15','square22','square23','square24','square25','square26','square27','square28','square29','square30', 'square31'
]


// - create random colors for the squares

function generateRandomColor(){
  let colorString ='#';

  let randomHexColor = Math.floor(Math.random() * 16777216).toString(16);
  colorString += randomHexColor;
  return colorString;
}

// - change background color of squares (twilight zones)
function changeBackgroundColor(){
  
    twilightZone1.style.backgroundColor = generateRandomColor();
    twilightZone2.style.backgroundColor = generateRandomColor();
    twilightZone3.style.backgroundColor = generateRandomColor();
    twilightZone4.style.backgroundColor = generateRandomColor();
}
setInterval(changeBackgroundColor,800);


/*************************** TEAM BLUE LOGIC ******************************/
// - event listener:

button1.addEventListener('click', () => {
   rollBlueDice();
   moveBluePlayer();
   displayRedTeam();
   
   
});

// Functions: - generate random number with values from 1-4 for dice

function rollBlueDice(){
  let dice = Math.floor(Math.random() * 4 ) + 1;
  blueDiceValue.innerHTML = dice;
  return dice;
}
// - display turn

     function displayRedTeam(){
             setTimeout( () => {
              redCurrentTurn.textContent ='Team red';
              turn2.textContent ='Current turn';
              blueCurrentTurn.textContent= '';
              turn1.textContent ='';
             },2000);
     }

// - create function to move player
function moveBluePlayer(){
  let dice = blueDiceValue.innerHTML;
  let currentPlayer = document.getElementById('team-blue')
  let currentPosition = Number(currentPlayer.getAttribute('position'));
  let nextPosition = Number(dice) + currentPosition;
  if(nextPosition > 30){
    nextPosition = 30;
 }
  currentPlayer.setAttribute('position',nextPosition);
  console.log(nextPosition);
  
  let nextRandomSquare = document.getElementById(squares[nextPosition])
  nextRandomSquare.appendChild(currentPlayer);
  nextRandomSquare.style.transform = 'scale(0.8)';
   setTimeout( () => {
    nextRandomSquare.style.transform = 'none';
   },1000);
   
   
    if(currentPlayer.parentNode.id ==='square6' ||currentPlayer.parentNode.id ==='square27' || currentPlayer.parentNode.id ==='square15' || currentPlayer.parentNode.id ==='square20'){
      currentPlayer.style.backgroundColor = generateRandomColor();
      currentPlayer.style.transform = 'skew(30deg, 20deg)';
      messageBlue.innerHTML = 'oops! it seems you got into the twilight Zone. it takes you back two steps';
      messageBlue.style.padding ='10px';
      messageBlue.style.marginTop = '130px';
      setTimeout( () => {
        currentPlayer.style.transform = 'none';
        messageBlue.innerHTML = '';
        messageBlue.style.padding = '0px';
        nextRandomSquare = document.getElementById(squares[nextPosition - 2])
        nextRandomSquare.appendChild(currentPlayer);
        nextRandomSquare.style.transform = 'scale(0.8)';
        currentPlayer.style.backgroundColor = '#13b5eb';
        setTimeout( () => {
            nextRandomSquare.style.transform ='none';
        },1000);
      
      }, 4000);
    
    }
   if(currentPlayer.parentNode.id === 'square31') {
    messageBlue.style.padding ='10px';
    messageBlue.innerHTML = 'Way to go! Team blue found the treasure first!';
    treasure.style.transform ='scale(2)';
    setTimeout( () => {
      messageBlue.innerHTML = '';
      messageBlue.style.padding = '0px'
    },4000);
  
  } 
}

/*************************** TEAM RED LOGIC ********************************/

// - event listener:
button2.addEventListener('click', () => {
  rollRedDice();
  moveRedPlayer();
  displayBlueTeam(); 
  
});

// Functions: - generate random number with values from 1-4 for dice
function rollRedDice(){
  let dice = Math.floor(Math.random() * 4 ) + 1;
  redDiceValue.innerHTML = dice;
  return dice;
}

// - display turn

function displayBlueTeam(){
  setTimeout( () => {
    blueCurrentTurn.textContent ='Team blue';
    turn1.textContent ='Current turn'
    turn2.textContent ='';
   redCurrentTurn.textContent ='';
  },2000);
}

// - create function to move player
function moveRedPlayer(){
  let dice = redDiceValue.innerHTML;
  let currentPlayer = document.getElementById('team-red')
  let currentPosition = Number(currentPlayer.getAttribute('position'));
  let nextPosition = Number(dice) + currentPosition;
  if(nextPosition > 30){
    nextPosition = 30;
 }
  currentPlayer.setAttribute('position',nextPosition);
  console.log(nextPosition);
  
  let nextRandomSquare = document.getElementById(squares[nextPosition])
  nextRandomSquare.appendChild(currentPlayer);
  nextRandomSquare.style.transform = 'scale(0.8)';
   setTimeout( () => {
    nextRandomSquare.style.transform = 'none';
   },1000);
   
   
    if(currentPlayer.parentNode.id ==='square6' ||currentPlayer.parentNode.id ==='square27' || currentPlayer.parentNode.id ==='square15' || currentPlayer.parentNode.id ==='square20'){
      currentPlayer.style.backgroundColor = generateRandomColor();
      currentPlayer.style.transform = 'skew(30deg, 20deg)';
      messageRed.innerHTML = 'oops! it seems you got into the twilight Zone. it takes you back two steps';
      messageRed.style.padding ='10px';
      messageBlue.style.marginTop = '130px';
      setTimeout( () => {
        currentPlayer.style.transform = 'none';
        messageRed.innerHTML = '';
        messageRed.style.padding = '0px';
        nextRandomSquare = document.getElementById(squares[nextPosition - 2])
        nextRandomSquare.appendChild(currentPlayer);
        nextRandomSquare.style.transform = 'scale(0.8)';
        currentPlayer.style.backgroundColor = '#f3264f';
        setTimeout( () => {
            nextRandomSquare.style.transform ='none';
        },1000);
      
      }, 4000);
    
    }
    if(currentPlayer.parentNode.id === 'square31') {
      messageRed.style.padding ='10px';
      messageRed.innerHTML = 'Way to go! Team Red found the treasure first!';
      treasure.style.transform ='scale(2)';
      setTimeout( () => {
        messageRed.innerHTML = '';
        messageRed.style.padding = '0px';
      },4000);
    } 
  }