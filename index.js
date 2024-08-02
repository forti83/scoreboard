let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

console.log(countHome)
console.log(countGuest)

let count1 = 0
let count2 = 0

function add1() {
    count1 = count1 + 1
    countHome.textContent = count1
}

function add2() {
    count1 = count1 + 2
    countHome.textContent = count1
    console.log(countHome.textContent)
}

function add3() {
    count1 = count1 + 3
    countHome.textContent = count1
    console.log(countHome.textContent)
}

    function sum1() {
    count2 = count2 + 1
    countGuest.textContent = count2
}

function sum2() {
    count2 = count2 + 2
    countGuest.textContent = count2
}

function sum3() {
    count2 = count2 + 3
    countGuest.textContent = count2
}