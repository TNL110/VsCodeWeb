

function paintBoard(){
    for(var i =1; i <= 8; i++){
        for( var j = 1; j <= 8; j++){
            document.querySelector("#d"+i.toString()+j.toString()).style.backgroundColor = "rgb(255,255,255)";
            if(i % 2 != 0 ){
				if(j % 2 == 0)
					document.querySelector("#d"+i.toString() + j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}else{
				if(j % 2 != 0)
					document.querySelector("#d"+i.toString() + j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}
        }
    }
}

function paintChessPieces(){
    for(var i = 3; i <= 6; i++){
        for(var j = 1; j <= 8; j++){
            document.getElementById("i"+i.toString()+j.toString()).src = Red.Empty;
			document.querySelector("#d"+i+j).dataset.color = -1;
        }
    }
	
    // red
    for(var i = 1; i < 9; i++){
		document.getElementById("i2" + i).src = Red.Pawn;
		document.querySelector("#d2"+i).dataset.name = Red.Pawn_Name;
		document.querySelector("#d2"+i).dataset.color = 1;
	}
    document.getElementById("i11").src = Red.Rook;
	document.querySelector("#d11").dataset.name = Red.Rook_Name;
	document.querySelector("#d11").dataset.color = 1;

	document.getElementById("i12").src = Red.Knight;
	document.querySelector("#d12").dataset.name = Red.Knight_Name;
	document.querySelector("#d12").dataset.color = 1;

	document.getElementById("i13").src = Red.Bishop;
	document.querySelector("#d13").dataset.name = Red.Bishop_Name;
	document.querySelector("#d13").dataset.color = 1;

	document.getElementById("i14").src = Red.King;
	document.querySelector("#d14").dataset.name = Red.King_Name;
	document.querySelector("#d14").dataset.color = 1;
	
	document.getElementById("i15").src = Red.Queen;
	document.querySelector("#d15").dataset.name = Red.Queen_Name;
	document.querySelector("#d15").dataset.color = 1;

	document.getElementById("i16").src = Red.Bishop;
	document.querySelector("#d16").dataset.name = Red.Bishop_Name;
	document.querySelector("#d16").dataset.color = 1;

	document.getElementById("i17").src = Red.Knight;
	document.querySelector("#d17").dataset.name = Red.Knight_Name;
	document.querySelector("#d17").dataset.color = 1;

	document.getElementById("i18").src = Red.Rook;
	document.querySelector("#d18").dataset.name = Red.Rook_Name;
	document.querySelector("#d18").dataset.color = 1;


    // black
    for(var i = 1; i < 9; i++){
		document.getElementById("i7" + i).src = Black.Pawn;
		document.querySelector("#d7"+i).dataset.name = Black.Paw_Name;
		document.querySelector("#d7"+i).dataset.color = 2;
	}
	document.getElementById("i81").src = Black.Rook;
	document.querySelector("#d81").dataset.name = Black.Rook_Name;
	document.querySelector("#d81").dataset.color = 2;

	document.getElementById("i82").src = Black.Knight;
	document.querySelector("#d82").dataset.name = Black.Knight_Name;
	document.querySelector("#d82").dataset.color = 2;

	document.getElementById("i83").src = Black.Bishop;
	document.querySelector("#d83").dataset.name = Black.Bishop_Name;
	document.querySelector("#d83").dataset.color = 2;

	document.getElementById("i84").src = Black.Queen;
	document.querySelector("#d84").dataset.name = Black.Queen_Name;
	document.querySelector("#d84").dataset.color = 2;

	document.getElementById("i85").src = Black.King;
	document.querySelector("#d85").dataset.name = Black.King_Name;
	document.querySelector("#d85").dataset.color = 2;

	document.getElementById("i86").src = Black.Bishop;
	document.querySelector("#d86").dataset.name = Black.Bishop_Name;
	document.querySelector("#d86").dataset.color = 2;

	document.getElementById("i87").src = Black.Knight;
	document.querySelector("#d87").dataset.name = Black.Knight_Name;
	document.querySelector("#d87").dataset.color = 2;

	document.getElementById("i88").src = Black.Rook;
	document.querySelector("#d88").dataset.name = Black.Rook_Name;
	document.querySelector("#d88").dataset.color = 2;
}