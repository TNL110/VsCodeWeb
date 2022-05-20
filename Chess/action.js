var isClick = false;
var turn = 2;
var Location = "00";

var listPossibleMove = [];

function creation(){
    paintBoard();
    paintChessPieces();
    isClick = false;
    turn = 2;
}

function Click(id){
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));

    isClick = !isClick;
    if(isClick && getColor(x,y)!= turn){
        isClick = !isClick;
        return;
    }
    if(isClick){
        listPossibleMove = [];
        var name = getName(x,y);
        Location = id.substring(1,3);
        switch(name){
            case "Rook":
                Rook(id);
                break;
            case "Knight":
                Knight(id);
                break;
            case "Bishop":
                Bishop(id);
                break;
            case "Queen":
                Queen(id);
                break;
            case "King":
                King(id);
                break;
            case "Pawn":
                Pawn(id);
                break;
            default:
                isClick = !isClick;
                break;
        }
    }else{
        var name = getName(x,y);
        if(move(Location, id)){
            if(turn == 1){
                if(checkMate(name)){
                    alert("Red Win")
                    creation();
                }
            }else{
                if(checkMate(name)){
                    alert("Black Win")
                    creation();
                }
            }
            swapTurn();
            turn = (turn==1)?2:1;
        }
        paintBoard();
    }

    
}