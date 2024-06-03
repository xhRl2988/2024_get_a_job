var modal = document.getElementById('myModal');
var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);
var player = 0;
var gameWon = 0;
var numberMap = new Map();

function fillMap(){
    numberMap.set('one',1);
    numberMap.set('two',2);
    numberMap.set('three',3);
    numberMap.set('four',4);
    numberMap.set('five',5);
    numberMap.set('six',6);
    numberMap.set('seven',7);
    numberMap.set('eight',8);
    numberMap.set('nine',9);
}
fillMap();

function evaluateMapping(squareNumber){
    if(squareNumber >= 1 && squareNumber <=3){
        return[0,squareNumber-1];
    }
    if(squareNumber >= 4 && squareNumber <=6){
        return[1,squareNumber-4];
    }
    if(squareNumber >= 7 && squareNumber <=9){
        return[2,squareNumber-7];
    }
}

function handleSquareClick(squareVal){
    let x, y, squareNumber;
    squareNumber = numberMap.get(squareVal);
    [x,y] = evaluateMapping(squareNumber);
    if(checkLegalMove(x,y)==true){
        if(player==0){
            console.log('X turn');
            $(`#square_${squareVal}_text`).html("X");
            grid[x][y]='X';
            if(checkWin(1)==true){
                endgame(1);
            }
        }else{
            console.log('0 trun');
            $(`#square_${squareVal}_text`).html("O");
            grid[x][y]='O';
            if(checkWin(2)==true){
                endgame(2);
            }
        }
        player = 1 - player;
    }
}

$("#square_one").click(function() { handleSquareClick("one")});
$("#square_two").click(function() { handleSquareClick("two")});
$("#square_three").click(function() { handleSquareClick("three")});
$("#square_four").click(function() { handleSquareClick("four")});
$("#square_five").click(function() { handleSquareClick("five")});
$("#square_six").click(function() { handleSquareClick("six")});
$("#square_seven").click(function() { handleSquareClick("seven")});
$("#square_eight").click(function() { handleSquareClick("eight")});
$("#square_nine").click(function() { handleSquareClick("nine")});

function checkWin(playerNum){
    for(i=0;i<3;i++){
        if((grid[i][0]==grid[i][1]&&grid[i][1]==grid[i][2])&&grid[i][0]!=undefined&&grid[1][i]!=undefined&&grid[2][i]!=undefined){
            console.log("vertical won");
            return true;
        }
    }

    for(i=0;i<3;i++){
        console.log("i is: "+i);
        console.log("grid["+i+"][0] is "+grid[i][0]);
        console.log("grid["+i+"][1] is "+grid[i][1]);
        console.log("grid["+i+"][2] is "+grid[i][2]);
        if((grid[0][i]==grid[1][i]&&grid[1][i]==grid[2][i]) && grid[0][i]!=undefined && grid[1][i]!=undefined && grid[2][i] != undefined){
            console.log("vertival won");
            return true;
        }
    }

    if(((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) && grid[1][1] != undefined){
        console.log("diagonal won");
        return true;
    }

    var tieGame = true;
    for(var i =0; i<3; i++){
        for(var x=0; x<3; x++){
            if(grid[i][x] == null && grid[i][x] == undefined){
                tieGame = false;
            }
        }
    }

    if(tieGame == true){
        endgame(0);
    }

    return false;
}

function checkLegalMove(row,column){
    console.log(grid[row][column]);
    if(grid[row][column] != undefined && grid[row][column] != null){
        return false;
    }else{
        return true;
    }
}

function endgame(num){
    if(num == 0){
        $(".modal_text").html("Tie game!");
        $("#myModal").css("display", "block");
    }
    if(num == 1){
        $(".modal_text").html("Player X Wins!");
        $("#myModal").css("display", "block");
    }
    if(num == 2){
        $(".modal_text").html("Player O Wins!");
        $("#myModal").css("display", "block");
    }
    $("table").css("filter","blur(8px)");
}

$("#restartBtn").click(function(){
    grid = new Array(3);
    grid[0] = new Array(3);
    grid[1] = new Array(3);
    grid[2] = new Array(3);
    player = 0;
    gameWon = 0;
    $("#square_one_text").html("");
    $("#square_two_text").html("");
    $("#square_three_text").html("");
    $("#square_four_text").html("");
    $("#square_five_text").html("");
    $("#square_six_text").html("");
    $("#square_seven_text").html("");
    $("#square_eight_text").html("");
    $("#square_nine_text").html("");
    modal.style.display = "none";
    $("table").css("filter","")
});