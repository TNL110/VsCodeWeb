let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count +" - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// ===
//if()

// for(let count = 1; count < 10; count +=1){
// 
// }