function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.calssName === "topnav"){
          x.className += " responsive";
     }else{
          x.className = "topnav";
     }
}
