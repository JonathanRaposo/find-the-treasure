
//DOM references
// const currentPlayer = document.getElementById('team-blue')
const teamRed = document.getElementById('team-red');
const rollDiceButton = document.getElementById('roll-dice-btn');
const diceValue = document.getElementById('dice-value');
const currentTurn = document.getElementById('current-turn');
const twilightZone1 = document.getElementById('square6');
const twilightZone2= document.getElementById('square27');
const twilightZone3 = document.getElementById('square15');
const twilightZone4 = document.getElementById('square20')
const message = document.getElementById('message-para');
const treasure = document.getElementById('gold');


const squares = [
   'square1','square2','square3','square7','square10','square11','square12','square8','square4','square5','square6','square9','square13','square14','square21','square20','square19','square18','square17','square16','square15','square22','square23','square24','square25','square26','square27','square28','square29','square30', 'square31'
]
//  event listener :
rollDiceButton.addEventListener('click', function () {
   rollDice();
   movePlayer();
   changeColorText(); 
   
})
function rollDice(){
  let dice = Math.floor(Math.random() * 4 ) + 1;
  diceValue.innerHTML = dice;
  return dice;
}

  
// functions:
function movePlayer(){
  let dice = diceValue.innerHTML;
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
   },1000)
   
   
    if(currentPlayer.parentNode.id ==='square6' ||currentPlayer.parentNode.id ==='square27' || currentPlayer.parentNode.id ==='square15' || currentPlayer.parentNode.id ==='square20'){
      currentPlayer.style.backgroundColor = '#fff';
      currentPlayer.style.transform = 'skew(30deg, 20deg)';
      message.innerHTML = 'oops! it seems you got into the twilight Zone. it takes you back two steps';
      message.style.padding ='10px';
      setTimeout( () => {
        currentPlayer.style.transform = 'none';
        message.innerHTML = '';
        message.style.padding = '0px'
        nextRandomSquare = document.getElementById(squares[nextPosition - 2])
        nextRandomSquare.appendChild(currentPlayer);
        nextRandomSquare.style.transform = 'scale(0.8)';
        currentPlayer.style.backgroundColor = '#13b5eb';
        setTimeout( () => {
            nextRandomSquare.style.transform ='none'
        },1000);
      
      }, 3000);
    
    }
    
   

   if(currentPlayer.parentNode.id === 'square31') {
    message.style.backgroundColor = '#7ad0e7';
    message.style.padding ='10px';
    message.innerHTML = 'Congrats! Team blue found the treasure first!';
    treasure.style.transform ='scale(2)';
  } 

     else if( teamRed.parentNode.id === 'square31') {
    message.style.backgroundColor = '#7ad0e7';
    message.style.padding ='10px';
    message.innerHTML = 'Congrats! Team red found the treasure first!'
    treasure.style.transform ='scale(2)'
   }
}

// change  text color when clicked
function changeColorText(){
  
  if(currentTurn.innerHTML ==='Team blue'){
       setTimeout( () => {
        currentTurn.innerHTML ='Team Red';
        currentTurn.style.color ='#f3264f';
       
       }, 1000);
  } else {
     setTimeout( () => {
      currentTurn.innerHTML ='Team blue';
   currentTurn.style.color = '#0421dbde'
     },1000)
  }
}
// create random colors 
function generateRandomColor(){
  let colorString ='#'

  let randomHexColor = Math.floor(Math.random() * 16777216).toString(16);
  colorString += randomHexColor;
  return colorString;
}

//change background color of squares (twilight zones)
function changeBackgroundColor(){
  
    twilightZone1.style.backgroundColor = generateRandomColor();
    twilightZone2.style.backgroundColor = generateRandomColor();
    twilightZone3.style.backgroundColor = generateRandomColor();
    twilightZone4.style.backgroundColor = generateRandomColor();
}
setInterval(changeBackgroundColor,800);

