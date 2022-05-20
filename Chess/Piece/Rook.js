
function Rook(id) {
    var x = parseInt(id.charAt(1));
    var y = parseInt(id.charAt(2));
    // left
    var x_tmp = x-1;
    while (x_tmp >= 1 && getColor(x_tmp, y) != getColor(x, y)) {
        paintBoxPossibleMove(x_tmp, y);
        listPossibleMove.push(x_tmp.toString()+y.toString());
        if (getColor(x_tmp, y) != -1) {
            break;
        }
        x_tmp -= 1;
    }

    // right
    var x_tmp = x+1;
    while (x_tmp <= 8 && getColor(x_tmp, y) != getColor(x, y)) {
        paintBoxPossibleMove(x_tmp, y);
        listPossibleMove.push(x_tmp.toString()+y.toString());
        if (getColor(x_tmp, y) != -1) {
            break;
        }
        x_tmp += 1;
    }

    // top
    var y_tmp = y-1;
    while (y_tmp >= 1 && getColor(x, y_tmp) != getColor(x, y)) {
        paintBoxPossibleMove(x, y_tmp);
        listPossibleMove.push(x.toString()+y_tmp.toString());
        if (getColor(x, y_tmp) != -1) {
            break;
        }
        y_tmp -= 1;
    }

    // bottom
    var y_tmp = y+1;
    while (y_tmp <= 8 && getColor(x, y_tmp) != getColor(x, y)) {
        paintBoxPossibleMove(x, y_tmp);
        listPossibleMove.push(x.toString()+y_tmp.toString());
        if (getColor(x, y_tmp) != -1) {
            break;
        }
        y_tmp += 1;
    }

}