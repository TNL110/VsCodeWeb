const text = document.getElementById('text')
const tags = document.querySelector('.tags')

text.focus()

text.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    const tagsEl = input.split(',').filter(tag => tag.trim() !== ' ').map(tag => tag.trim())

    tags.innerHTML = ''

    tagsEl.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.innerHTML = tag
        tagEl.classList.add('tag')
        tags.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if(randomTag !== undefined){
            hightlightTag(randomTag)
            setTimeout(() => {
                unHightlightTag(randomTag)
            }, 100)
        }
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            hightlightTag(randomTag)
        }, 100)
    }, times*100)
}

function pickRandomTag(){
    const tagsEl = document.querySelectorAll('.tag')
    return tagsEl[Math.floor(Math.random()*tagsEl.length)]
}

function hightlightTag(tag){
    tag.classList.add('hightlight')
}

function unHightlightTag(tag){
    tag.classList.remove('hightlight')
}
