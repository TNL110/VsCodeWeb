const left = document.querySelector('.box-left')
const right = document.querySelector('.box-right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('box-left-show'))
left.addEventListener('mouseleave', () => container.classList.remove('box-left-show'))

right.addEventListener('mouseenter', () => container.classList.add('box-right-show'))
right.addEventListener('mouseleave', () => container.classList.remove('box-right-show'))