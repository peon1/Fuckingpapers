let eleccionJugador = null;
let eleccionCompu = null;


let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");

rockButton.onclick = () =>
{
    elegir(1)
}

paperButton.onclick = () =>
{
    elegir(2)
}

scissorsButton.onclick = () =>
{
    elegir(3)
}
function elegir(eleccionJugadorF)
{
    let temp = getRandomIntInclusive(1, 3);
    console.log(temp)
   switch (temp)
   {
       case 1:
       {
           eleccionCompu = 1;
           break;
       }

       case 2:
       {
           eleccionCompu = 2;
           break;
       }

       case 3:
       {
           eleccionCompu = 3;
           break;
       }
   }

   if(eleccionJugadorF === 1 && eleccionCompu === 3)
   {
      alert("The computer chose scissors and your stone, congratulations now you can jerk off with a changed hand");

   } else if (eleccionJugadorF === 2 && eleccionCompu === 1)
   {
       alert("The computer chose stone and you chose paper, it looks like you gave your ass to the leprechaun of luck so you can win, you son of a bitch");

   } else if(eleccionJugadorF === 3 && eleccionCompu === 2)
   {
       alert("The computer chose rock and you chose scissors, wow, looks like you're not as retarded as you seem");

   } else if(eleccionJugadorF === 1 && eleccionCompu === 2)
   {
        alert("The computer chose paper and your rock, you are very bad at playing this, you should dedicate yourself to giving your ass to the furrys to pay for electricity and water.");

   } else if(eleccionJugadorF === 2 && eleccionCompu === 3)
   {
       alert("The computer chose scissors and your paper, you lost, go have sex with the cows in your town, you're bad even in that");

   } else if (eleccionJugadorF === 3 && eleccionCompu === 1)
   {
       alert("the computer chose rock and you scissors, you lost, just like you lost your dignity and your fucking autistic parents");

   } else
   {
       alert("There is a tie and it is not known who is more idiot if the computer or you")
   }



}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}