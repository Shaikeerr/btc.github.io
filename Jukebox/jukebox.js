var musique = new Audio()
var click = new Audio("../Effets Sonores/Click.ogg")
var annulclick = new Audio("../Effets Sonores/Annulclick.ogg")
var hover = new Audio("../Effets Sonores/hover.ogg")
var no_musique=0
var no_musique_rand=0
var rand=false
var boucle=false

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
    if (rand==true) {
        no_musique_rand=Math.floor(Math.random() * (28 - 1)) + 1
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
    choix_musique()
}
    
function previous() {
    no_musique-=1
    choix_musique()
}

function musique_bouton(x) {
    click.cloneNode(true).play()
    no_musique=x
    choix_musique()
}


function musique_hover() {
    hover.cloneNode(true).play()
}

function bouton_click() {
    click.cloneNode(true).play()
}

function loop() {
    if (boucle==true) {
        boucle=false
        document.getElementById('loop').src="Textures Jukebox/loop.png"
        annulclick.cloneNode(true).play()
    }
    else {
        boucle=true
        document.getElementById('loop').src="Textures Jukebox/loop_on.png"
        click.cloneNode(true).play()

    }
}

function random() {
    if (rand==true) {
        rand=false
        document.getElementById('random').src="Textures Jukebox/random.png"
        annulclick.cloneNode(true).play()
    }
    else {
        rand=true
        document.getElementById('random').src="Textures Jukebox/random_on.png"
        click.cloneNode(true).play()
    }
}

musique.addEventListener("ended",function() {
    if (boucle==true) {
        choix_musique()
    }
    else {
        next()
    }
})

function choix_musique() {

    if (no_musique==1){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/1.mp3")
        document.getElementById('music_text').innerHTML = "Hopes and Dreams"
        musique.play()

    }
    else if (no_musique==2){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/2.mp3")
        musique.play()
        document.getElementById('music_text').innerHTML = "A Neon Glow Lights the Way"
    }
    else if (no_musique==3){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/3.mp3")
        document.getElementById('music_text').innerHTML = "Welcome to VA-11 HALL-A"
        musique.play()
    }
    else if (no_musique==4){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/4.mp3")
        document.getElementById('music_text').innerHTML = "Every Day Is Night"
        musique.play()
    }
    else if (no_musique==5){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/5.mp3")
        document.getElementById('music_text').innerHTML = "Commencing Simulation"
        musique.play()
    }
    else if (no_musique==6){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/6.mp3")
        document.getElementById('music_text').innerHTML = "Drive Me Wild"
        musique.play()
    }
    else if (no_musique==7){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/7.mp3")
        document.getElementById('music_text').innerHTML = "Good for Health, Bad for Education"
        musique.play()
    }
    else if (no_musique==8){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/8.mp3")
        document.getElementById('music_text').innerHTML = "Who was I?"
        musique.play()
    }
    else if (no_musique==9){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/9.mp3")
        document.getElementById('music_text').innerHTML = "Troubling News"
        musique.play()
    }
    else if (no_musique==10){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/10.mp3")
        document.getElementById('music_text').innerHTML = "A Gaze That Invited Disaster"
        musique.play()
    }
    else if (no_musique==11){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/11.mp3")
        document.getElementById('music_text').innerHTML = "Friendly Conversation"
        musique.play()
    }
    else if (no_musique==12){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/12.mp3")
        document.getElementById('music_text').innerHTML = "You've Got Me"
        musique.play()
    }
    else if (no_musique==13){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/13.mp3")
        document.getElementById('music_text').innerHTML = "Umemoto"
        musique.play()
    }
    else if (no_musique==14){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/14.mp3")
        document.getElementById('music_text').innerHTML = "JC Elton's"
        musique.play()
    }
    else if (no_musique==15){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/15.mp3")
        document.getElementById('music_text').innerHTML = "All Systems, Go!"
        musique.play()
    }
    else if (no_musique==16){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/16.mp3")
        document.getElementById('music_text').innerHTML = "Where Do I Go from Here?"
        musique.play()
    }
    else if (no_musique==17){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/17.mp3")
        document.getElementById('music_text').innerHTML = "Everything Will Be Okay"
        musique.play()
    }
    else if (no_musique==18){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/18.mp3")
        document.getElementById('music_text').innerHTML = "March of the White Knights"
        musique.play()
    }
    else if (no_musique==19){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/19.mp3")
        document.getElementById('music_text').innerHTML = "A. Rene"
        musique.play()
    }
    else if (no_musique==20){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/20.mp3")
        document.getElementById('music_text').innerHTML = "Safe Haven"
        musique.play()
    }
    else if (no_musique==21){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/21.mp3")
        document.getElementById('music_text').innerHTML = "Neo Avatar"
        musique.play()
    }
    else if (no_musique==22){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/22.mp3")
        document.getElementById('music_text').innerHTML = "Those Who Dwell in Shadows"
        musique.play()
    }
    else if (no_musique==23){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/23.mp3")
        document.getElementById('music_text').innerHTML = "Nighttime Maneuvers"
        musique.play()
    }
    else if (no_musique==24){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/24.mp3")
        document.getElementById('music_text').innerHTML = "Your Love Is a Drug"
        musique.play()
    }
    else if (no_musique==25){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/25.mp3")
        document.getElementById('music_text').innerHTML = "Snowfall"
        musique.play()
    }
    else if (no_musique==26){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/26.mp3")
        document.getElementById('music_text').innerHTML = "Last Call"
        musique.play()
    }
    else if (no_musique==27){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/27.mp3")
        document.getElementById('music_text').innerHTML = "Believe in Me Who Believes in You"
        musique.play()
    }
    else if (no_musique==28){
        document.getElementById('play_pause').src="Textures Jukebox/pause.png"
        musique.src = ("Songs/28.mp3")
        document.getElementById('music_text').innerHTML = "Dawn Approaches"
        musique.play()
    }
    else{
        no_musique=0
        next()
    }
}
