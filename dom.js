console.log(document)

// exercise 17

var bands = ['Dire Straits', 'Kansas', 'Steely Dan']
console.log(bands)


function createBandList() {
    document.getElementById("bandlist").innerHTML = ""
    for (var i = 0; i < bands.length; i++) {
        var liBand = document.createElement("li")
        liBand.innerText = bands[i]
        console.log('liBand', liBand)
        document.getElementById("bandlist").appendChild(liBand)
    }
}

createBandList(bands)


