alert("Start New Tic Tac Toe");

var player = 1;
function clickBtn(btn){
    if(player == 1){
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled";
        player -= 1;;
        getwinner();
    }else{
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled";
        player += 1;
        getwinner();
    }
};
function getwinner(){
    if(document.getElementById("btn1").value == "X"&&
    document.getElementById("btn2").value == "X"&&
    document.getElementById("btn3").value == "X"||
    document.getElementById("btn4").value == "X"&&
    document.getElementById("btn5").value == "X"&&
    document.getElementById("btn6").value == "X"||
    document.getElementById("btn7").value == "X"&&
    document.getElementById("btn8").value == "X"&&
    document.getElementById("btn9").value == "X"||

    document.getElementById("btn1").value == "X"&&
    document.getElementById("btn4").value == "X"&&
    document.getElementById("btn7").value == "X"||
    document.getElementById("btn2").value == "X"&&
    document.getElementById("btn5").value == "X"&&
    document.getElementById("btn8").value == "X"||
    document.getElementById("btn3").value == "X"&&
    document.getElementById("btn6").value == "X"&&
    document.getElementById("btn9").value == "X"||

    document.getElementById("btn1").value == "X"&&
    document.getElementById("btn5").value == "X"&&
    document.getElementById("btn9").value == "X"||

    document.getElementById("btn3").value == "X"&&
    document.getElementById("btn5").value == "X"&&
    document.getElementById("btn7").value == "X"
    ){
        alert("1st Player Is The Winner!!!");
    }else if(document.getElementById("btn1").value == "O"&&
            document.getElementById("btn2").value == "O"&&
            document.getElementById("btn3").value == "O"||
            document.getElementById("btn4").value == "O"&&
            document.getElementById("btn5").value == "O"&&
            document.getElementById("btn6").value == "O"||
            document.getElementById("btn7").value == "O"&&
            document.getElementById("btn8").value == "O"&&
            document.getElementById("btn9").value == "O"||

            document.getElementById("btn1").value == "O"&&
            document.getElementById("btn4").value == "O"&&
            document.getElementById("btn7").value == "O"||
            document.getElementById("btn2").value == "O"&&
            document.getElementById("btn5").value == "O"&&
            document.getElementById("btn8").value == "O"||
            document.getElementById("btn3").value == "O"&&
            document.getElementById("btn6").value == "O"&&
            document.getElementById("btn9").value == "O"||

            document.getElementById("btn1").value == "O"&&
            document.getElementById("btn5").value == "O"&&
            document.getElementById("btn9").value == "O"||

            document.getElementById("btn3").value == "O"&&
            document.getElementById("btn5").value == "O"&&
            document.getElementById("btn7").value == "O"
    ){
        alert("2nd Player Is The Winner!!!");
    };
};
