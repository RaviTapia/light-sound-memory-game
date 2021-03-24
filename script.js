var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var tries = 0;
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

function startGame(){
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  pattern = randomPattern();
  console.log(pattern);
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("lives").innerText ="Mistakes: 0"
  tries = 0;
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function randomPattern(){
  let temp = [];
  for(let i = 0; i < 8; i++){
    temp.push(Math.floor((Math.random()*6) + 1 ));
  }
  return temp;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 530.2,
  6: 590.5
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  console.log("we are here");
  for(let i=0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in "+ delay + " ms.")
    setTimeout(playSingleClue,delay,pattern[i]) //sets Timeout to play clue;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user gussed: "+ btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] != btn){ //the guess was incorrect
    tries++;
    document.getElementById("lives").innerText = "Mistakes: " + (tries);
    if( tries < 3){ //incorrect but was not third mistake
      alert("Mistake: " + (tries));
      guessCounter = 0; //will have to do pattern from the beginning.
    } else {  //was their third mistake
      loseGame();
    }
  }else if(guessCounter !=  progress){ // the guess was correct but turn is not over
    guessCounter++;
  }else if( progress < pattern.length-1 ){ //guess was correct, turn is over, but is not last turn
    progress++;
    playClueSequence();
  }else {
    winGame();
  }
  
}


