let pointsH = 0
let pointsG = 0

let hScorer = document.getElementById("hscore-el")
let gScorer = document.getElementById("gscore-el")

let penaltyHBtn = document.getElementById("penaltyH-btn")
let dropHBtn = document.getElementById("dropH-btn")
let tryHBtn = document.getElementById("tryH-btn")
let missedHBtn = document.getElementById("missedH-btn")
let conversionHBtn = document.getElementById("conversionH-btn")

let penaltyGBtn = document.getElementById("penaltyG-btn")
let dropGBtn = document.getElementById("dropG-btn")
let tryGBtn = document.getElementById("tryG-btn")
let missedGBtn = document.getElementById("missedG-btn")
let conversionGBtn = document.getElementById("conversionG-btn")

let newGameBtn = document.getElementById("newgame-btn")

function disableButtons1H() {
    penaltyHBtn.disabled = true
    dropHBtn.disabled = true
    tryHBtn.disabled = true
}

function disableButtons2H() {
    missedHBtn.disabled = true
    conversionHBtn.disabled = true
}

function disableAllH() {
    disableButtons1H()
    disableButtons2H()
}

function disableButtons1G() {
    penaltyGBtn.disabled = true
    dropGBtn.disabled = true
    tryGBtn.disabled = true
}

function disableButtons2G() {
    missedGBtn.disabled = true
    conversionGBtn.disabled = true
}

function disableAllG() {
    disableButtons1G()
    disableButtons2G()
}

function disableAll() {
    disableAllH()
    disableAllG()
}

function enableButtons1H() {
    penaltyHBtn.disabled = false
    dropHBtn.disabled = false
    tryHBtn.disabled = false
}

function enableButtons2H() {
    missedHBtn.disabled = false
    conversionHBtn.disabled = false
}

function enableButtons1G() {
    penaltyGBtn.disabled = false
    dropGBtn.disabled = false
    tryGBtn.disabled = false
}

function enableButtons2G() {
    missedGBtn.disabled = false
    conversionGBtn.disabled = false
}

function newGame() {
    pointsH = 0
    pointsG = 0
    hScorer.textContent = pointsH
    gScorer.textContent = pointsG
    enableButtons1H()
    disableButtons2H()
    enableButtons1G()
    disableButtons2G()
}

function winning() {
    if (pointsH > pointsG) {
        hScorer.style.textDecoration = "underline"
        gScorer.style.textDecoration = "none"
    }
    else if (pointsH < pointsG) {
        gScorer.style.textDecoration = "underline"
        hScorer.style.textDecoration = "none"
    }
    else {
        hScorer.style.textDecoration = "none"
        gScorer.style.textDecoration = "none"
    }
}

function penaltyH() {
    pointsH += 3
    hScorer.textContent = pointsH
    winning()
}

function dropH() {
    pointsH += 3
    hScorer.textContent = pointsH
    winning()
}

function tryH() {
    pointsH += 5
    hScorer.textContent = pointsH
    disableButtons1H()
    enableButtons2H()
    disableAllG()
    winning()
    newGameBtn.disabled = true
}

function missedH() {
    enableButtons1H()
    disableButtons2H()
    enableButtons1G()
    winning()
    newGameBtn.disabled = false
}

function conversionH() {
    pointsH += 2
    hScorer.textContent = pointsH
    enableButtons1H()
    disableButtons2H()
    enableButtons1G()
    winning()
    newGameBtn.disabled = false
}

function penaltyG() {
    pointsG += 3
    gScorer.textContent = pointsG
    winning()
}

function dropG() {
    pointsG += 3
    gScorer.textContent = pointsG
    winning()
}

function tryG() {
    pointsG += 5
    gScorer.textContent = pointsG
    disableButtons1G()
    enableButtons2G()
    disableAllH()
    winning()
    newGameBtn.disabled = true
}

function missedG() {
    enableButtons1G()
    disableButtons2G()
    enableButtons1H()
    winning()
    newGameBtn.disabled = false
}

function conversionG() {
    pointsG += 2
    gScorer.textContent = pointsG
    enableButtons1G()
    disableButtons2G()
    enableButtons1H()
    winning()
    newGameBtn.disabled = false
}

disableAll()