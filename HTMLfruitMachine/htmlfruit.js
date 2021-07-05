

let creditVal = 0;
let score = 0;
let money = 10;


let elem1 = document.getElementById("val1").innerHTML;
let elem2 = document.getElementById("val2").innerHTML;
let elem3 = document.getElementById("val3").innerHTML;
let fruit = ["<img class='reelimage', src='./sWarsPics/Obi-wan.png'>","<img class='reelimage', src='./sWarsPics/darthVader.png'>","<img class='reelimage', src='./sWarsPics/Yoda.png'>","<img class='reelimage', src='./sWarsPics/Grievous.png'>","<img class='reelimage', src='./sWarsPics/stormTrooper.png'>","<img class='reelimage', src='./sWarsPics/rey.png'>","<img class='reelimage', src='./sWarsPics/darthMaul.png'>","<img class='reelimage', src='./sWarsPics/emperor.png'>","<img class='reelimage', src='./sWarsPics/luke.png'>",];
// fruit[9] = new Image ();
// fruit[9].src = "./sWarsPics/Yoda.png"


console.log(fruit)

let resultTxt = document.getElementById("result");
let feedback = document.getElementById("feedback");

let beepSound = new Audio("audio/R2D2-do.mp3");
let beepSound2 = new Audio("audio/R2D2-hey-you.wav");
let winSound = new Audio("audio/R2D2-yeah.mp3");
let bigWinSound = new Audio("audio/bigwin.mp3");
let noSound = new Audio("audio/zang.mp3");

function addCredit(v)
{
    if (money > 0)
    {
        beepSound2.play();
        creditVal = creditVal + v;
        money = money - v;
        document.getElementById("credits").innerHTML = creditVal;
        document.getElementById("bank").innerHTML = money;
    }
    else
    {
        feedback.innerHTML = "you have no more Republican Credits in the bank! :(";
        
    }

}

function winCredit(v)
{
    creditVal = creditVal + v;
    document.getElementById("credits").innerHTML = creditVal;
}


function removeMoney(v)
{
    money = money - v
    document.getElementById("bank").innerHTML = money;
}

function collect()
{
    beepSound2.play();
    money = money + creditVal;
    creditVal = creditVal - creditVal;
    document.getElementById("bank").innerHTML = money;
    document.getElementById("credits").innerHTML = creditVal;
}

function removeCredit(v)
{
    creditVal = creditVal - v;
    document.getElementById("credits").innerHTML = creditVal;
}

function addScore(v)
{
    score = score + v;
    document.getElementById("score").innerHTML = score;
}


function spin()
{
    beepSound2.play();
    var btnspin=document.getElementById("btn-spin");
    if (creditVal > 0)
    {

        removeCredit(1);
        btnspin.disabled = true;
        var rnd1 = Math.floor((Math.random()*fruit.length));
        var rnd2 = Math.floor((Math.random()*fruit.length));
        var rnd3 = Math.floor((Math.random()*fruit.length));
        var reel1 = setInterval(function() {
        document.getElementById('val1').innerHTML= fruit[rnd1++];
            if (rnd1 == fruit.length)
            {
                rnd1 = 0;
            }
        }, 120);

        var reel2 = setInterval(function() {
        document.getElementById('val2').innerHTML= fruit[rnd2++];
            if (rnd2 == fruit.length)
            {
                rnd2 = 0;
            }
        }, 150);

        var reel3 = setInterval(function() {
        document.getElementById('val3').innerHTML= fruit[rnd3++];
        if (rnd3 == fruit.length)
        {
            rnd3 = 0;
        }
        }, 135);


        
        setTimeout(function(){
        clearInterval(reel1);

        clearInterval(reel2);

        clearInterval(reel3);
        beepSound.play();
        btnspin.disabled = false;
        elem1 = document.getElementById("val1").innerHTML;
        elem2 = document.getElementById("val2").innerHTML;
        elem3 = document.getElementById("val3").innerHTML;
        check(elem1,elem2,elem3);
        }, 1500);
    }
    else
    {
        noSound.play();
        feedback.innerHTML = "You have 0 Republican credits, please add credits to continue";
        
    }

    
}


function check(a,b,c)
{
    if (a == b && b == c)
    {
        feedback.innerHTML = "matching 3. 50 credits awarded! 100 points";
        bigWinSound.play();
        winSound.play();
        
        addScore(100);
        winCredit(50);

    }
    else if (a == b)
    {
        feedback.innerHTML = "Matching pair. 5 credits awarded! 20 points";
        winSound.play();
        addScore(20);
        winCredit(5);
    }
    else if (b == c)
    {
        feedback.innerHTML = "Matching pair. 5 credits awarded! 20 points";
        winSound.play();
        addScore(20);
        winCredit(5);
    }
    else if (a == c)
    {
        feedback.innerHTML = "Matching pair. 5 credits awarded! 10 point";
        winSound.play();
        addScore(10);
        winCredit(5);
    }
}

