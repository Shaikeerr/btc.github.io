var gif=1

function next_gif() {
    gif+=1
    if (gif==1) {
        document.getElementById("Gif").src="Gifs/TV.gif"
    }
    else if (gif==2) {
        document.getElementById("Gif").src="Gifs/Protec.gif"
    }

    else if (gif==3) {
        document.getElementById("Gif").src="Gifs/Dollar.gif"
    }
}