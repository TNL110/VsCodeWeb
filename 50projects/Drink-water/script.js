const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

setTimeout(()=>{
    console.log("hello")
},5000)

updateBigCup()

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
})

function highlightCups(idx) {
    if(idx == 7 && smallCups[idx].classList.contains('full')){
        idx--
    } 
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup,idx1)=>{
        if(idx1<=idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups===0){
        percentage.style.height = 0
        percentage.innerText = ''
    }
    else{
        percentage.style.height = `${fullCups/totalCups *330}px`
        percentage.innerText = `${fullCups/totalCups*100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        remained.style.height = `${(1 - fullCups/totalCups) *330}px`
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}