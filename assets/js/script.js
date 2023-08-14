//Wait for the DOM to finish loanding before runing the game.
//Get the buttons elements and addEventListener to them. 

document.addEventListener("DOMContentLoaded", function(){
  let buttons=document.getElementsByTagName("button");

  for(let button of buttons){
      button.addEventListener("click", function(){
        if(this.getAttribute("data-type")=="submit"){
          alert("Yous cliked  submit!")
        }else{
          let gameType  = this.getAttribute("data-type");
          alert(`You clikc ${gameType} button`); 
        }
      })
  }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){
  
}

function incrementWrongAnswer(){
  
}

function displayAdditionQuestion(){
  
}

function displaySbutractQuestion(){
  
}

function displayMultiplyQuestion(){
  
}

function displayDivisionQuestion(){
  
}