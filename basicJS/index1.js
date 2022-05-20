let myleads = ["www.google.com", "www.facebook.com"]
const inputBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += `
        <li>
            <a target='blank' href='${inputEl.value} '> ${inputEl.value} </a>
            </li>
        `
    }
    ulEl.innerHTML += listItems
}