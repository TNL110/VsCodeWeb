
function Knight(id){
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));

    // -1 -2
    if(x-1>=1 && y-2>=1 && getColor(x,y)!=getColor(x-1,y-2)){
        paintBoxPossibleMove(x-1,y-2);
        listPossibleMove.push((x-1).toString()+(y-2).toString());
    }

    // -2 -1
    if(x-2>=1 && y-1>=1 && getColor(x,y)!=getColor(x-2,y-1)){
        paintBoxPossibleMove(x-2,y-1);
        listPossibleMove.push((x-2).toString()+(y-1).toString());
    }

    // -2 +1
    if(x-2>=1 && y+1<=8 && getColor(x,y)!=getColor(x-2,y+1)){
        paintBoxPossibleMove(x-2,y+1);
        listPossibleMove.push((x-2).toString()+(y+1).toString());
    }

    // -1 +2
    if(x-1>=1 && y+2<=8 && getColor(x,y)!=getColor(x-1,y+2)){
        paintBoxPossibleMove(x-1,y+2);
        listPossibleMove.push((x-1).toString()+(y+2).toString());
    }

    // +1 +2
    if(x+1<=8 && y+2<=8 && getColor(x,y)!=getColor(x+1,y+2)){
        paintBoxPossibleMove(x+1,y+2);
        listPossibleMove.push((x+1).toString()+(y+2).toString());
    }

    // +2 +1
    if(x+2<=8 && y+1<=8 && getColor(x,y)!=getColor(x+2,y+1)){
        paintBoxPossibleMove(x+2,y+1);
        listPossibleMove.push((x+2).toString()+(y+1).toString());
    }

    // +2 -1
    if(x+2<=8 && y-1>=1 && getColor(x,y)!=getColor(x+2,y-1)){
        paintBoxPossibleMove(x+2,y-1);
        listPossibleMove.push((x+2).toString()+(y-1).toString());
    }

    // +1 -2
    if(x+1<=8 && y-2>=1 && getColor(x,y)!=getColor(x+1,y-2)){
        paintBoxPossibleMove(x+1,y-2);
        listPossibleMove.push((x+1).toString()+(y-2).toString());
    }

}