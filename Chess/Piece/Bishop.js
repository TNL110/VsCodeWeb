

function Bishop(id){
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));

    // on left
    var x_tmp = x-1;
    var y_tmp = y-1;
    while(x_tmp>=1 && y_tmp >=1 && getColor(x_tmp,y_tmp)!=getColor(x,y)){
        paintBoxPossibleMove(x_tmp,y_tmp);
        listPossibleMove.push((x_tmp).toString()+(y_tmp).toString());
        if(getColor(x_tmp,y_tmp)!=-1)
            break;
        x_tmp-=1;
        y_tmp-=1;
    }

    // on right
    var x_tmp = x-1;
    var y_tmp = y+1;
    while(x_tmp>=1 && y_tmp <=8 && getColor(x_tmp,y_tmp)!=getColor(x,y)){
        paintBoxPossibleMove(x_tmp,y_tmp);
        listPossibleMove.push((x_tmp).toString()+(y_tmp).toString());
        if(getColor(x_tmp,y_tmp)!=-1)
            break;
        x_tmp-=1;
        y_tmp+=1;
    }

    // under right
    var x_tmp = x+1;
    var y_tmp = y+1;
    while(x_tmp<=8 && y_tmp <=8 && getColor(x_tmp,y_tmp)!=getColor(x,y)){
        paintBoxPossibleMove(x_tmp,y_tmp);
        listPossibleMove.push((x_tmp).toString()+(y_tmp).toString());
        if(getColor(x_tmp,y_tmp)!=-1)
            break;
        x_tmp+=1;
        y_tmp+=1;
    }

    // under left
    var x_tmp = x+1;
    var y_tmp = y-1;
    while(x_tmp<=8 && y_tmp >=1 && getColor(x_tmp,y_tmp)!=getColor(x,y)){
        paintBoxPossibleMove(x_tmp,y_tmp);
        listPossibleMove.push((x_tmp).toString()+(y_tmp).toString());
        if(getColor(x_tmp,y_tmp)!=-1)
            break;
        x_tmp+=1;
        y_tmp-=1;
    }
}