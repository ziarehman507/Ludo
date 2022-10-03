


var red;
function ludogame (){


 red= Math.floor(Math.random() * 6) + 1;
var red2 =`./imge/dic${red}.jpg`;
document.getElementById("chak1").setAttribute('src', red2);



}

var aneeq =()=>{
    var blue1 =document.getElementById('blue1')
    var zia = document.getElementById('zia')

if(red == 6){

  zia.append(blue1)
}


}




