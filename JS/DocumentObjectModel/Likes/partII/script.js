var counter = [9, 12, 9]
console.log(counter[1]);

function incrementNeil() {
    var num = counter[0] + 1;
    document.querySelector("#neil").innerText = num + " like(s)"
}

function incrementNichole() {
    var num = counter[1] + 1;
    document.querySelector("#nichole").innerText = num + " like(s)"
}

function incrementJim() {
    var num = counter[2] + 1;
    document.querySelector("#jim").innerText = num + " like(s)"
}