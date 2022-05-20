
function Pawn(id){
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));
    var color = getColor(x,y);

    if(color == 1){
        if(x==2){
            if(getColor(x+1,y)!=color){
                paintBoxPossibleMove(x+1,y);
                listPossibleMove.push((x+1).toString()+y.toString());
            }
            if(getColor(x+2,y)!=color){
                paintBoxPossibleMove(x+2,y);
                listPossibleMove.push((x+2).toString()+y.toString());
            }
            
        }else{
            if(x+1<=8 && getColor(x+1,y)==-1){
                paintBoxPossibleMove(x+1,y);
                listPossibleMove.push((x+1).toString()+y.toString());
            }
        }
        // left
        if(y-1>=1 && getColor(x+1,y-1)!=-1 && getColor(x+1,y-1)!==color){
            paintBoxPossibleMove(x+1,y-1);
            listPossibleMove.push((x+1).toString()+(y-1).toString());
        }
        // right
        if(y+1<=8 && getColor(x+1,y+1)!=-1 && getColor(x+1,y+1)!==color){
            paintBoxPossibleMove(x+1,y+1);
            listPossibleMove.push((x+1).toString()+(y+1).toString());
        }
    }else{
        if(x==7){
            if(getColor(x-1,y)!=color){
                paintBoxPossibleMove(x-1,y);
                listPossibleMove.push((x-1).toString()+y.toString());
            }
            if(getColor(x-2,y)!=color){
                paintBoxPossibleMove(x-2,y);
                listPossibleMove.push((x-2).toString()+y.toString());
            }
            
        }else{
            if(x-1>=1 && getColor(x-1,y)==-1){
                paintBoxPossibleMove(x-1,y);
                listPossibleMove.push((x-1).toString()+y.toString());
            }
            
        }
        // left
        if(y-1>=1 && getColor(x-1,y-1)!=-1 && getColor(x-1,y-1)!==color){
            paintBoxPossibleMove(x-1,y-1);
            listPossibleMove.push((x-1).toString()+(y-1).toString());
        }
        // right
        if(y+1<=8 && getColor(x-1,y+1)!=-1 && getColor(x-1,y+1)!==color){
            paintBoxPossibleMove(x-1,y+1);
            listPossibleMove.push((x-1).toString()+(y+1).toString());
        }
    }
}