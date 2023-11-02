function main(){

    let confirm = document.getElementById("main-result").innerHTML;
    if(confirm == "You're Lost!"){
     alert("Game over. please restart again .");
    }else{


let x;

 do{
    x = parseInt(Math.floor(Math.random()*100/7.6));
   }while(x==0);
  
   var img = document.createElement("img");
   img.src="images/"+ x + ".png";
   img.height=300;

   document.body.appendChild(img);

   let currentTT=parseInt(document.getElementById("result").innerHTML);
   let total=currentTT+x;
   document.getElementById("result").innerHTML=total;

   if(total < 21){
    document.getElementById("main-result").innerHTML="Generate Another Card ?";
   }else if(total == 21){
    document.getElementById("main-result").innerHTML="You're Won!";
    alert("Congradulation!!")
    document.getElementById("btn-res").style.display="block";

   }else{
    document.getElementById("main-result").innerHTML="You're Lost!";
    alert("Lost Restart to play again..")
    document.getElementById("btn-res").style.display="block";
   }


   
}
}

function restart(){

    location.reload();
}