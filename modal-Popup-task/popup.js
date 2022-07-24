function mymodal(){
     document.getElementById("background").style.backgroundColor = "black";
     let photo =  document.getElementById("image");
     photo.style.width = "500px";
     photo.style.height = "350px";
     let symbol = document.getElementById("cross_mark");
     symbol.innerText = "\u274C";
     symbol.style.float = "right";
     let text = document.getElementById("text");
     text.innerText = "snow";
     text.style.color ="white";
     text.style.position = "fixed";
     text.style.top = "450px";
     text.style.left = "630px";

     
}

function closed(){
    window.close();
}