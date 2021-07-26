let nums = document.getElementsByClassName("nums");
let ops = document.getElementsByClassName("ops");


for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", append);
}

for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", append);
}

function append() {
    document.getElementById("results").append(this.innerText);
}

function add() {
    console.log("+");
}

function subtract() {
    console.log("sub");
}

function multiply() {
    console.log("mult")

}

function divide() {
    console.log("divide")
}

function equals() {
    const curr = document.getElementById("results");
    const div = document.createElement("div");
    const newContent = curr.innerHTML;
    div.appendChild(newContent);
    curr.appendChild(div);

    document.getElementById("results").innerHTML = eval(document.getElementById("results").innerText);
}

function clear() {
    
}

document.getElementById("add").addEventListener("click", add)
document.getElementById("sub").addEventListener("click", subtract)
document.getElementById("divide").addEventListener("click", divide)
document.getElementById("equals").addEventListener("click", equals)
document.getElementById("mult").addEventListener("click", multiply)
document.getElementById("clear").addEventListener("click", clear)