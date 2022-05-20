

function King(id) {
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));

    if (x - 1 >= 1 && getColor(x - 1, y) != getColor(x, y)){
        paintBoxPossibleMove(x - 1, y);
        listPossibleMove.push((x-1).toString()+(y).toString());
    }
    if (x + 1 <= 8 && getColor(x + 1, y) != getColor(x, y)){
        paintBoxPossibleMove(x + 1, y);
        listPossibleMove.push((x+1).toString()+(y).toString());

    }
    if (y - 1 >= 1 && getColor(x, y - 1) != getColor(x, y)){
        paintBoxPossibleMove(x, y - 1);
        listPossibleMove.push((x).toString()+(y-1).toString());
    }
    if (y + 1 <= 8 && getColor(x, y + 1) != getColor(x, y)){
        paintBoxPossibleMove(x, y + 1)
        listPossibleMove.push((x).toString()+(y+1).toString());
    }
    if (x - 1 >= 1 && y - 1 >= 1 && getColor(x - 1, y - 1) != getColor(x, y)){
        paintBoxPossibleMove(x - 1, y - 1);
        listPossibleMove.push((x-1).toString()+(y-1).toString());
    }
    if (x - 1 >= 1 && y + 1 <= 8 && getColor(x - 1, y + 1) != getColor(x, y)){
        paintBoxPossibleMove(x - 1, y + 1);
        listPossibleMove.push((x-1).toString()+(y+1).toString());
    }
    if (x + 1 <= 8 && y + 1 <= 8 && getColor(x + 1, y + 1) != getColor(x, y)){
        paintBoxPossibleMove(x + 1, y + 1);
        listPossibleMove.push((x+1).toString()+(y+1).toString());
    }
    if (x + 1 <= 8 && y - 1 >= 1 && getColor(x + 1, y - 1) != getColor(x, y)){
        paintBoxPossibleMove(x + 1, y - 1)
        listPossibleMove.push((x+1).toString()+(y+1).toString());
    }

    if(x==1 && y==4){
        var check = true;
        if(getName(1,1).localeCompare("Rook")!=0){
            check = false;
            console.log(check);
        }
        for(var i = 2; i<4; i++){
            if(getColorId("1"+i)!=-1){
                check = false;
            }
        }
        console.log(check);
        if(check){
            paintBoxPossibleMove(1,1);
            listPossibleMove.push(1,1);
        }

        var check = true;
        if(getName(1,8).localeCompare("Rook")!=0)
            check = false;
        for(var i = 5; i<8; i++){
            if(getColorId("1"+i)!=-1){
                check = false;
            }
        }
        if(check){
            paintBoxPossibleMove(1,8);
            listPossibleMove.push(1,8);
        }
    }
    else if(x == 8 && y==5){
        var check = true;
        if(getName(8,1).localeCompare("Rook")!=0)
            check = false;
        for(var i = 2; i<5; i++){
            if(getColorId("8"+i)!=-1){
                check = false;
            }
        }
        if(check){
            paintBoxPossibleMove(8,1);
            listPossibleMove.push(8,1);
        }

        var check = true;
        if(getName(8,8).localeCompare("Rook")!=0)
            check = false;
        for(var i = 6; i<8; i++){
            if(getColorId("8"+i)!=-1){
                check = false;
            }
        }
        if(check){
            paintBoxPossibleMove(8,8);
            listPossibleMove.push(8,8);
        }
    }
}