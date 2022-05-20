
function paintBoxPossibleMove(x, y) {
    document.querySelector("#d" + x.toString() + y.toString()).style.backgroundColor = "#F6CD61";
}

function getColor(x, y) {
    var x = document.querySelector("#d" + x.toString() + y.toString()).dataset.color;
    return parseInt(x)
}

function getColorId(id) {
    var x = parseInt(id.charAt(0));
    var y = parseInt(id.charAt(1));

    var x = document.querySelector("#d" + id).dataset.color;
    return parseInt(x)
}

function getNameId(id) {
    var x = parseInt(id.charAt(0));
    var y = parseInt(id.charAt(1));

    var name = document.querySelector("#d" + x.toString() + y.toString()).dataset.name;
    name = name.substring(0, name.indexOf('-'));
    console.log(name);
    return name;
}

function getName(x, y) {
    var name = document.querySelector("#d" + x.toString() + y.toString()).dataset.name;
    name = name.substring(0, name.indexOf('-'));
    return name;
}

function move(id, idLast) {
    idLast = idLast.substring(1, 3);


    if (id.localeCompare("14") == 0 && getNameId(id).localeCompare("King") == 0) {
        if (idLast.localeCompare("11") == 0 && getNameId(idLast).localeCompare("Rook") == 0) {
            var before = document.querySelector("#d" + id);
            document.getElementById("i12").src = document.getElementById("i" + id).src;
            document.getElementById("i" + id).src = Black.Empty;
            document.querySelector("#d12").dataset.color = before.dataset.color;
            document.querySelector("#d12").dataset.name = before.dataset.name;
            document.querySelector("#d" + id).dataset.color = -1;
            document.querySelector("#d" + id).dataset.name = "";

            var before = document.querySelector("#d11");
            document.getElementById("i13").src = document.getElementById("i11").src;
            document.getElementById("i11").src = Black.Empty;
            document.querySelector("#d13").dataset.color = before.dataset.color;
            document.querySelector("#d13").dataset.name = before.dataset.name;
            document.querySelector("#d11").dataset.color = -1;
            document.querySelector("#d11").dataset.name = "";

            return true;
        }

        else if (idLast.localeCompare("18") == 0 && getNameId(idLast).localeCompare("Rook") == 0) {
            var before = document.querySelector("#d14");
            document.getElementById("i17").src = document.getElementById("i14").src;
            document.getElementById("i14").src = Black.Empty;
            document.querySelector("#d17").dataset.color = before.dataset.color;
            document.querySelector("#d17").dataset.name = before.dataset.name;
            document.querySelector("#d14").dataset.color = -1;
            document.querySelector("#d14").dataset.name = "";

            var before = document.querySelector("#d18");
            document.getElementById("i16").src = document.getElementById("i18").src;
            document.getElementById("i18").src = Black.Empty;
            document.querySelector("#d16").dataset.color = before.dataset.color;
            document.querySelector("#d16").dataset.name = before.dataset.name;
            document.querySelector("#d18").dataset.color = -1;
            document.querySelector("#d18").dataset.name = "";
            
            return true;
        }
    }

    if (id.localeCompare("85") == 0 && getNameId(id).localeCompare("King") == 0) {
        if (idLast.localeCompare("81") == 0 && getNameId(idLast).localeCompare("Rook") == 0) {
            var before = document.querySelector("#d85");
            document.getElementById("i82").src = document.getElementById("i85").src;
            document.getElementById("i85").src = Black.Empty;
            document.querySelector("#d82").dataset.color = before.dataset.color;
            document.querySelector("#d82").dataset.name = before.dataset.name;
            document.querySelector("#d85").dataset.color = -1;
            document.querySelector("#d85").dataset.name = "";

            var before = document.querySelector("#d81");
            document.getElementById("i83").src = document.getElementById("i81").src;
            document.getElementById("i81").src = Black.Empty;
            document.querySelector("#d83").dataset.color = before.dataset.color;
            document.querySelector("#d83").dataset.name = before.dataset.name;
            document.querySelector("#d81").dataset.color = -1;
            document.querySelector("#d81").dataset.name = "";
            
            return true;
        }
        else if (idLast.localeCompare("88") == 0 && getNameId(idLast).localeCompare("Rook") == 0) {
            var before = document.querySelector("#d85");
            document.getElementById("i87").src = document.getElementById("i85").src;
            document.getElementById("i85").src = Black.Empty;
            document.querySelector("#d87").dataset.color = before.dataset.color;
            document.querySelector("#d87").dataset.name = before.dataset.name;
            document.querySelector("#d85").dataset.color = -1;
            document.querySelector("#d85").dataset.name = "";

            var before = document.querySelector("#d88");
            document.getElementById("i86").src = document.getElementById("i88").src;
            document.getElementById("i88").src = Black.Empty;
            document.querySelector("#d86").dataset.color = before.dataset.color;
            document.querySelector("#d86").dataset.name = before.dataset.name;
            document.querySelector("#d88").dataset.color = -1;
            document.querySelector("#d88").dataset.name = "";
            
            return true;
        }
    }


    if (id.localeCompare(idLast) == 0 || getColorId(idLast) == getColorId(id) || !listPossibleMove.includes(idLast)) {
        return false;
    }
    var before = document.querySelector("#d" + id);
    document.getElementById("i" + idLast).src = document.getElementById("i" + id).src;
    document.getElementById("i" + id).src = Black.Empty;
    document.querySelector("#d" + idLast).dataset.color = before.dataset.color;
    document.querySelector("#d" + idLast).dataset.name = before.dataset.name;
    document.querySelector("#d" + id).dataset.color = -1;
    document.querySelector("#d" + id).dataset.name = "";
    return true;
}

function checkMate(name) {
    return (name.localeCompare("King") == 0) ? true : false;
}

function swapTurn() {
    var tmp = document.getElementById("PRed").src;
    document.getElementById("PRed").src = document.getElementById("PBlack").src;
    document.getElementById("PBlack").src = tmp;
}