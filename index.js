function buttonClicked(){
    var diccRoll1 = Math.floor(Math.random()*6 + 1);
    var diccRoll2 = Math.floor(Math.random()*6 + 1);
    var url1 = "./dicce" + diccRoll1 +".png";
    var url2 = "./dicce" + diccRoll2 +".png";
    var x = document.getElementById('image1');
    x.src = url1;
    var y = document.getElementById('image2');
    y.src = url2;
    if (diccRoll1 < diccRoll2){
        document.getElementById('title').innerHTML = 'PLAYER 2 WINS';
    } else if ( diccRoll1 > diccRoll2){
        document.getElementById('title').innerHTML = 'PLAYER 1 WINS';
    } else{
        document.getElementById('title').innerHTML = "IT'S A TIE";
    }
}
var button = document.getElementById('Start');
button.addEventListener("click",buttonClicked);
