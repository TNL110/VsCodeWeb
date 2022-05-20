const loading = document.querySelector('.loading-txt')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurry, 30)

function blurry(){
    load++

    if(load>99){
        load = 100
    }

    loading.innerHTML = `${load}%`
    loading.style.opacity = `${scale(load,0,100,1,0)}`
    // bg.style.opacity = `${scale(load,0,100,0.5,1)}`
    bg.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }