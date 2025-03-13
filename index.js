let pointsH = 0
let pointsA = 0

let hScorer = document.aetElementById("hscore-el")
let gScorer = document.getElementById("ascore-el")

let penaltyHBtn = document.getElementById("penaltyH-btn")
let dropHBtn = document.getElementById("dropH-btn")
let tryHBtn = document.getElementById("tryH-btn")
let missedHBtn = document.getElementById("missedH-btn")
let conversionHBtn = document.getElementById("conversionH-btn")

let penaltyABtn = document.getElementById("penaltyA-btn")
let dropABtn = document.getElementById("dropA-btn")
let tryABtn = document.getElementById("tryA-btn")
let missedABtn = document.getElementById("missedA-btn")
let conversionABtn = document.getElementById("conversionA-btn")

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

function disableButtons1A() {
    penaltyABtn.disabled = true
    dropABtn.disabled = true
    tryABtn.disabled = true
}

function disableButtons2A() {
    missedABtn.disabled = true
    conversionABtn.disabled = true
}

function disableAllA() {
    disableButtons1A()
    disableButtons2A()
}

function disableAll() {
    disableAllH()
    disableAllA()
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

function enableButtons1A() {
    penaltyABtn.disabled = false
    dropABtn.disabled = false
    tryABtn.disabled = false
}

function enableButtons2A() {
    missedABtn.disabled = false
    conversionABtn.disabled = false
}

function newGame() {
    pointsH = 0
    pointsA = 0
    hScorer.textContent = pointsH
    gScorer.textContent = pointsA
    enableButtons1H()
    disableButtons2H()
    enableButtons1A()
    disableButtons2A()
}

function winning() {
    if (pointsH > pointsA) {
        hScorer.style.textDecoration = "underline"
        gScorer.style.textDecoration = "none"
    }
    else if (pointsH < pointsA) {
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
    disableAllA()
    winning()
    newGameBtn.disabled = true
}

function missedH() {
    enableButtons1H()
    disableButtons2H()
    enableButtons1A()
    winning()
    newGameBtn.disabled = false
}

function conversionH() {
    pointsH += 2
    hScorer.textContent = pointsH
    enableButtons1H()
    disableButtons2H()
    enableButtons1A()
    winning()
    newGameBtn.disabled = false
}

function penaltyA() {
    pointsA += 3
    gScorer.textContent = pointsA
    winning()
}

function dropA() {
    pointsA += 3
    gScorer.textContent = pointsA
    winning()
}

function tryA() {
    pointsA += 5
    gScorer.textContent = pointsA
    disableButtons1A()
    enableButtons2A()
    disableAllH()
    winning()
    newGameBtn.disabled = true
}

function missedA() {
    enableButtons1A()
    disableButtons2A()
    enableButtons1H()
    winning()
    newGameBtn.disabled = false
}

function conversionA() {
    pointsA += 2
    gScorer.textContent = pointsA
    enableButtons1A()
    disableButtons2A()
    enableButtons1H()
    winning()
    newGameBtn.disabled = false
}

disableAll()