var gamestart=false;
var dd=["red","blue","yellow","green"];
var pat=[];
var your=[];
var level=1;
$("html").keydown(function (e) { 
    if(gamestart==false){
        gamestart=true;
        $("h1").text("level "+level++);
        var n=Math.floor(Math.random() * 4);
        pat.push(dd[n]);
        soun(dd[n]);
         btan(dd[n]);
        
    }
});
$(".btn").click(function (e) { 
    your.push(this.id);
    var l=your.length;
    if(pat[l-1]==your[l-1]){
        if(pat[level-2]==your[level-2]){
            setTimeout(function (){ var n=Math.floor(Math.random() * 4);
                pat.push(dd[n]);
                soun(dd[n]);
                 btan(dd[n]);
                 $("h1").text("level "+level++);},1000);
                 your=[];
        }
    }
    else{
        $("h1").html("game over  <br><br> Press Any Key to Start");
        your=[];
        pat=[];
        level=1;
        gamestart=false;
        $("body").addClass("game-over");
        wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function (){
          $("body").removeClass("game-over");  
        },200);
        setTimeout(function (){
            $("body").addClass("game-over");
          },500);
          setTimeout(function (){
            $("body").removeClass("game-over");  
          },700);
    }
    soun(this.id);
    btan(this.id);
});
function soun(e){
    switch(e){
        case "red":
            var red=new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue=new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green=new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
     }
}
function btan(e){
    $("."+e).addClass("pressed ");
    setTimeout(function (){ $("."+e).removeClass("pressed ");},100)
}