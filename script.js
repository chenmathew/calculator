document.getElementsByClassName("nums").addEventListener("click", append)

function append() {
    document.getElementsByClassName("result").innerHTML = document.getElementsByClassName("nums").innerText;
}