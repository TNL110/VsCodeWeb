// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]');
// const minuteHand = document.querySelector('[data-minute-hand]');
// const secondHand = document.querySelector('[data-second-hand]');

// function setClock(){
//     const currentDate = new Date();
//     const currentSeconds = currentDate.getSeconds() / 60;
//     const currentMinutes = (currentSeconds + currentDate.getMinutes()) / 60;
//     const currentHours = (currentMinutes + currentDate.getHours()) / 12;

//     setRotation(hourHand, currentHours);
//     setRotation(minuteHand, currentMinutes);
//     setRotation(secondHand, currentSeconds);
    
// }

// function setRotation(element, rotationRatio){
//     element.style.setProperty('--rotation', rotationRatio *360)
// }


const inputs = document.querySelectorAll('#input')
const vms = document.querySelectorAll('.vm')
const btn = document.querySelector('#btn')

btn.addEventListener('click',(e) => {
    e.preventDefault()
    inputs.forEach((input,index)=>{
        console.log(input.value)
        console.log(index)
        if(input.value == ''){
            console.log(vms.item(index))
            vms.item(index).classList.add('vm1')

        }
    })
})

