var musique = new Audio()
var click = new Audio("../Effets Sonores/Click.ogg")
var annulclick = new Audio("../Effets Sonores/Annulclick.ogg")
var hover = new Audio("../Effets Sonores/hover.ogg")
var no_musique=0
var no_musique_rand=0
var rand=false

function play_pause() {
    var image = document.getElementById('play_pause');
    if (image.src.match("playbutton")) {
        click.cloneNode(true).play()
        image.src = "Textures Jukebox/pause.png";
        musique.play();
    }
    else {
        annulclick.cloneNode(true).play()
        image.src = "Textures Jukebox/playbutton.png";
        musique.pause();
    }
}

function next() {
    musique.pause()
    if (rand==true) {
        no_musique_rand=Math.floor(Math.random() * (3 - 1 + 1)) + 1
        if (no_musique_rand==no_musique) {
            no_musique=no_musique_rand+1
        }
        else{
            no_musique=no_musique_rand
        }

    }
    else{
        no_musique+=1
    }

    if (no_musique==1) {
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/commencing-simulation.mp3")
        document.getElementById('music_text').innerHTML = "Commencing Simulation"
        musique.play()

    }
    else if (no_musique==2){
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/every-day-is-night.mp3")
        musique.play()
        document.getElementById('music_text').innerHTML = "Every Day is Night"
    }
    else if (no_musique==3){
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/welcome-to-va-11-hall-a.mp3")
        document.getElementById('music_text').innerHTML = "Welcome to VA-11 HALL-A"
        musique.play()
    }
    else{
        no_musique=0
        next()
    }
}

function previous() {
    no_musique-=1
    musique.pause()
    if (no_musique==1) {
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/commencing-simulation.mp3")
        document.getElementById('music_text').innerHTML = "Commencing Simulation"
        musique.play()

    }
    else if (no_musique==2){
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/every-day-is-night.mp3")
        musique.play()
        document.getElementById('music_text').innerHTML = "Every Day is Night"
    }
    else if (no_musique==3){
        click.cloneNode(true).play()
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/welcome-to-va-11-hall-a.mp3")
        document.getElementById('music_text').innerHTML = "Welcome to VA-11 HALL-A"
        musique.play()
    }
    else {
        no_musique=4
        previous()
    }
}

function musique1() {
    no_musique=1
    click.cloneNode(true).play()
    document.getElementById('play_pause').src="Textures Jukebox/pause.png"
    musique.src = ("Songs/commencing-simulation.mp3")
    document.getElementById('music_text').innerHTML = "Commencing Simulation"
    musique.play()
}

function musique2() {
    no_musique=2
    click.cloneNode(true).play()
    document.getElementById('play_pause').src="Textures Jukebox/pause.png"
    musique.src = ("Songs/every-day-is-night.mp3")
    document.getElementById('music_text').innerHTML = "Every Day is Night"
    musique.play()

}

function musique3() {
    no_musique=3
    click.cloneNode(true).play()
    document.getElementById('play_pause').src="Textures Jukebox/pause.png"
    musique.src = ("Songs/welcome-to-va-11-hall-a.mp3")
    document.getElementById('music_text').innerHTML = "Welcome to VA-11 HALL-A"
    musique.play()

}

function musique_hover() {
    hover.cloneNode(true).play()
}


function random() {
    if (rand==true) {
        rand=false
        document.getElementById('random').src="Textures Jukebox/random.png"
    }
    else {
        rand=true
        document.getElementById('random').src="Textures Jukebox/random_on.png"
    }
}

musique.addEventListener("ended",function() {
    next()
})