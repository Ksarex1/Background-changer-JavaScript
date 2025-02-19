const btn = document.querySelector(".btn")
const spanText = document.querySelector(".hex-color")
const body = document.body

const hexItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
btn.addEventListener("click", () => {
    let hexCode = '#' + generateHexCodes()
    body.style.backgroundColor = `${hexCode}`
    spanText.innerHTML = hexCode
})
function generateHexCodes() {
    let randomHexItem = []
    for (let i = 0; i <= 5; i++) {
        let indexHexMassive = Math.floor(Math.random() * hexItems.length)
        randomHexItem.push(hexItems[indexHexMassive])
    }
    randomHexItem = randomHexItem.join("")
    return randomHexItem
}