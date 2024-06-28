let us = 0;
let uc = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userpara = document.querySelector("#uscore");
const comppara = document.querySelector("#cscore");

////
//reset
const btn = document.querySelector("#box");
btn.addEventListener("click",()=>{

message.innerText="Play a move!";
message.style.backgroundColor="chartreuse";
userpara.innerText=0;
comppara.innerText=0;
us=0;
uc=0;


})



////

//drawgame
const draw=()=>{
console.log("game is draw");
message.innerText = "Draw!! Come again";
message.style.backgroundColor ="gold";


};
//print winner
    const showwinner=(userwin,choiceid,compchoice )=>
    {
 
     if(userwin === true){
         us ++;
         userpara.innerText = us;

        console.log("You Win!")
        message.innerText = "You Won MF:  "+ choiceid+"- beats -"+compchoice ;
        message.style.backgroundColor = "chartreuse";

     }
     else{
         uc++;
         console.log("com won");
         comppara.innerText=uc;
         message.innerText = "You Lose pussy : computer's " +compchoice +" beats "+ choiceid;
         message.style.backgroundColor = "red";
     }
    };






// computer chioce 
const gencomt = () => {

    const optn = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);  //if we need 2 number 0 to 2 the multiple by 3 if n number the multiply the number by n+1 

    return  optn[random];

};
////user choice
const playgame = (choiceid) => {

    console.log("userid", choiceid);
    const compchoice = gencomt();
    console.log("comp ", compchoice);

    if(choiceid === compchoice){
        //draw condition
  draw();
    }

    else{
        let userwin = true;
        //
        if(choiceid === "rock"){
            //comp choices scissor oor paper

         userwin = compchoice === "paper"? false:true;
        }
        //
  else if(choiceid ==="paper"){

  userwin = compchoice ==="scissor"? false:true;
  }  
  //
  
  else if(choiceid ==="scissor"){

    userwin = compchoice ==="rock"? false:true;
  
    }
    showwinner(userwin,choiceid,compchoice);
    }

};

///
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const choiceid = choice.getAttribute("id");

        //console.log("choice was clicked" , choiceid);

        playgame(choiceid);


    });

});