const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

let scoreH = 0
let scoreG = 0

const addOneHome = () => {
    scoreH++
    homeScore.textContent = scoreH
}
const addTwoHome = () => {
    scoreH += 2
    homeScore.textContent = scoreH
}
const addThreeHome = () => {
    scoreH += 3
    homeScore.textContent = scoreH
}


const addOneGuest = () => {
    scoreG++
    guestScore.textContent = scoreG
}
const addTwoGuest = () => {
    scoreG += 2
    guestScore.textContent = scoreG
}
const addThreeGuest = () => {
    scoreG += 3
    guestScore.textContent = scoreG
}

const newGame = () => {
    homeScore.textContent = 0
    guestScore.textContent = 0
    scoreH = 0
    scoreG = 0
}
