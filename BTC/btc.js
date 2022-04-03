var Adel = 0
var Karmo = 0
var Bron = 0
var Flaner = 0
var Delta = 0 
var Fermentation=false
var Glace=false
var Mixage=0
var success=0
var son_glace = new Audio("../Effets Sonores/ice.ogg")
var son_aged = new Audio("../Effets Sonores/age.ogg")
var son_click = new Audio("../Effets Sonores/Click.ogg")
var son_Annulclick = new Audio("../Effets Sonores/Annulclick.ogg")
var son_Drink = new Audio("../Effets Sonores/Drink.ogg")
var son_reset = new Audio("../Effets Sonores/reset.ogg")
var son_mixer = new Audio("../Effets Sonores/mixer.wav")
var total=0
var image_btc = 1
var anim=0
var temps = 5000; 
var Fin_Mixage=false


function Mixer() {
    if (total>=1) {
        document.getElementById("Bouton_Mixer_Gris").id="Bouton_Mixer"
    }
    else {
        document.getElementById("Bouton_Mixer").id="Bouton_Mixer_Gris"
    }
}

function Adelhyde() {
    if (Fin_Mixage==false) {
        if (success==0 & total<20) {
            total+=1
            Adel+=1
            son_Drink.cloneNode(true).play()
            document.getElementById("Nombre_Adelhyde").innerHTML=Adel
            
        }
    }
}

function Bronson() {
    if (Fin_Mixage==false) {
        if (success==0 & total<20) {
            total+=1  
            Bron+=1
            son_Drink.cloneNode(true).play()
            document.getElementById("Nombre_Bronson").innerHTML=Bron
        }
    }
}

function Karmotrine(){
    if (Fin_Mixage==false) {
        if (success==0 & total<20) {
            total+=1
            Karmo+=1
            son_Drink.cloneNode(true).play()
            document.getElementById("Nombre_Karmotrine").innerHTML=Karmo
        }
    }
}

function Flanergide(){
    if (Fin_Mixage==false) {
        if (success==0 & total<20) {
            total+=1
            Flaner+=1
            son_Drink.cloneNode(true).play()
            document.getElementById("Nombre_Flanergide").innerHTML=Flaner
        }
    }
}

function Powered(){
    if (Fin_Mixage==false) {
        if (success==0 & total<20) {
            total+=1
            Delta+=1
            son_Drink.cloneNode(true).play()
            document.getElementById("Nombre_Delta").innerHTML=Delta
        }
    }
}

function Age() {
    if (Fin_Mixage==false) {
        if (success==0) {
            if (Fermentation==true) {
                Fermentation=false
                document.getElementById("Age").src=("Textures BTC/age.png")
            }
            else {
                son_aged.cloneNode(true).play()
                Fermentation=true
                document.getElementById("Age").src=("Textures BTC/age_on.png")
            }
        }
    }
}

function Ice() {
    if (Fin_Mixage==false) {
        if (success==0) {
            if (Glace==true) {
                Glace=false
                document.getElementById("Ice").src=("Textures BTC/ice.png")
            }
            else {
                son_glace.cloneNode(true).play()
                Glace=true
                document.getElementById("Ice").src=("Textures BTC/ice_on.png")
            }
        }
    }
}

function Reset() {
    son_reset.cloneNode(true).play()
    Adel=0
    document.getElementById("Nombre_Adelhyde").innerHTML=Adel
    Bron=0
    document.getElementById("Nombre_Bronson").innerHTML=Bron
    Karmo=0
    document.getElementById("Nombre_Karmotrine").innerHTML=Karmo
    Flaner=0
    document.getElementById("Nombre_Flanergide").innerHTML=Flaner
    Delta=0
    total=0
    document.getElementById("Nombre_Delta").innerHTML=Delta
    Fermentation=false
    document.getElementById("Age").src=("Textures BTC/age.png")
    Glace=false
    document.getElementById("Ice").src=("Textures BTC/ice.png")
    document.getElementById("Bouton_Mixer").innerHTML="Mixer"
    success=0
    Mixage=0
    Fin_Mixage=false
    anim=1
    Mix()
    document.getElementById("Boisson").src=("Textures BTC/Drinks/Shaker.png")
    document.getElementById("drink_name_text").innerText=""
}


function Boissons(){
    if (success==0) {
        if (Adel==0 & Bron==0 & Delta==0 & Flaner==0 & Karmo==0) {
            success=0
        }
        else {
            son_mixer.cloneNode(true).play()
            Mix()
            if (Fin_Mixage==true) {
                Fin_Mixage=false
                if (Adel==0 & Bron==2 & Delta==2 & Flaner==2 & Karmo==4 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==0 & Bron==4 & Delta==4 & Flaner==4 & Karmo==8 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Bad_Touch.png")
                    document.getElementById("drink_name_text").innerHTML="Bad Touch"
                }
                else if (Adel==1 & Bron==2 & Delta==1 & Flaner==2 & Karmo==4 & Fermentation==false & Glace==false & Mixage==1 ||
                        Adel==2 & Bron==4 & Delta==2 & Flaner==4 & Karmo==8 & Fermentation==false & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Beer.png")
                    document.getElementById("drink_name_text").innerHTML="Biere"
                }
                else if (Adel==0 & Bron==1 & Delta==3 & Flaner==3 & Karmo==0 & Fermentation==false & Glace==false & Mixage==2 ||
                        Adel==0 & Bron==2 & Delta==6 & Flaner==6 & Karmo==0 & Fermentation==false & Glace==false & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Bleed_Jane.png")
                    document.getElementById("drink_name_text").innerHTML="Bleed Jane"
                }
                else if (Adel==4 & Bron==0 & Delta==1 & Flaner==2 & Karmo==3 & Fermentation==true & Glace==true & Mixage==1 ||
                        Adel==8 & Bron==0 & Delta==2 & Flaner==4 & Karmo==6 & Fermentation==true & Glace==true & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Bloom_Lght.png")
                    document.getElementById("drink_name_text").innerHTML="Bloom Lght"
                }
                else if (Adel==4 & Bron==0 & Delta==0 & Flaner==1 & Karmo>=0 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==8 & Bron==0 & Delta==0 & Flaner==2 & Karmo>=0 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Blue_Fairy.png")
                    document.getElementById("drink_name_text").innerHTML="Blue Fairy"
                }
                else if (Adel==6 & Bron==0 & Delta==3 & Flaner==0 & Karmo==1 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==12 & Bron==0 & Delta==6 & Flaner==0 & Karmo==2 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Brandtini.png")
                    document.getElementById("drink_name_text").innerHTML="Brandtini"
                }
                else if (Adel==2 & Bron==0 & Delta==0 & Flaner==3 & Karmo==5 & Fermentation==false & Glace==true & Mixage==1 ||
                        Adel==4 & Bron==0 & Delta==0 & Flaner==6 & Karmo==10 & Fermentation==false & Glace==true & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Coblt_Vlvt.png")
                    document.getElementById("drink_name_text").innerHTML="Coblt Vlvt"
                }
                else if (Adel==0 & Bron==0 & Delta==2 & Flaner==4 & Karmo>=0 & Fermentation==false & Glace==false & Mixage==2||
                        Adel==0 & Bron==0 & Delta==4 & Flaner==8 & Karmo>=0 & Fermentation==false & Glace==false & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Crv_Spike.png")
                    document.getElementById("drink_name_text").innerHTML="Crv Spike"
                }
                else if (Adel==3 & Bron==0 & Delta==3 & Flaner==0 & Karmo>=0 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==6 & Bron==0 & Delta==6 & Flaner==0 & Karmo>=0 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Flff_Dream.png")
                    document.getElementById("drink_name_text").innerHTML="Flff Dream"
                }
                else if (Adel==1 & Bron==0 & Delta==0 & Flaner==0 & Karmo==9 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==2 & Bron==0 & Delta==0 & Flaner==0 & Karmo==18 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Frng_Weavr.png")
                    document.getElementById("drink_name_text").innerHTML="Frng Weavr"
                }
                else if (Adel==1 & Bron==1 & Delta==1 & Flaner==1 & Karmo==0 & Fermentation==true & Glace==false & Mixage==1||
                        Adel==2 & Bron==2 & Delta==2 & Flaner==2 & Karmo==0 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Frothy_Wtr.png")
                    document.getElementById("drink_name_text").innerHTML="Frothy Wtr"
                }
                else if (Adel==3 & Bron==3 & Delta==3 & Flaner==0 & Karmo==1 & Fermentation==false & Glace==false & Mixage==2||
                        Adel==6 & Bron==6 & Delta==6 & Flaner==0 & Karmo==2 & Fermentation==false & Glace==false & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Grizz_Tmpl.png")
                    document.getElementById("drink_name_text").innerHTML="Grizz Tmpl"
                }
                else if (Adel==0 & Bron==5 & Delta==0 & Flaner==1 & Karmo >=0 & Fermentation==true & Glace==false & Mixage==1 ||
                        Adel==0 & Bron==10 & Delta==0 & Flaner==2 & Karmo >=0 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Gut_Punch.png")
                    document.getElementById("drink_name_text").innerHTML="Gut Punch"
                }
                else if (Adel==0 & Bron==6 & Delta==1 & Flaner==4 & Karmo==2 & Fermentation==false & Glace==false & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Marsblast.png")
                    document.getElementById("drink_name_text").innerHTML="Marsblast"
                }
                else if (Adel==1 & Bron==1 & Delta==3 & Flaner==3 & Karmo==2 & Fermentation==false & Glace==true & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Mercryblst.png")
                    document.getElementById("drink_name_text").innerHTML="Mercryblst"
                }
                else if (Adel==6 & Bron==0 & Delta==1 & Flaner==1 & Karmo==2 & Fermentation==false & Glace==true & Mixage==2 ||
                        Adel==12 & Bron==0 & Delta==2 & Flaner==2 & Karmo==4 & Fermentation==false & Glace==true & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Moonblast.png")
                    document.getElementById("drink_name_text").innerHTML="Moonblast"
                }
                else if (Adel==2 & Bron==3 & Delta==5 & Flaner==5 & Karmo==3 & Fermentation==false & Glace==true & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Piano_Man.png")
                    document.getElementById("drink_name_text").innerHTML="Piano Man"
                }
                else if (Adel==5 & Bron==5 & Delta==2 & Flaner==3 & Karmo==3 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/P_Woman.png")
                    document.getElementById("drink_name_text").innerHTML="P. Woman"
                }
                else if (Adel==0 & Bron==3 & Delta==0 & Flaner==3 & Karmo==4 & Fermentation==false & Glace==false & Mixage==1||
                        Adel==0 & Bron==6 & Delta==0 & Flaner==6 & Karmo==8 & Fermentation==false & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Piledriver.png")
                    document.getElementById("drink_name_text").innerHTML="Piledriver"
                }
                else if (Adel==2 & Bron==0 & Delta==1 & Flaner==0 & Karmo >=0 & Fermentation==true & Glace==false & Mixage==1||
                        Adel==4 & Bron==0 & Delta==2 & Flaner==0 & Karmo >=0 & Fermentation==true & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Spark_Star.png")
                    document.getElementById("drink_name_text").innerHTML="Spark Star"
                }
                else if (Adel==2 & Bron==0 & Delta==1 & Flaner==0 & Karmo >=0 & Fermentation==false & Glace==false & Mixage==1 ||
                        Adel==4 & Bron==0 & Delta==2 & Flaner==0 & Karmo >=0 & Fermentation==false & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Sugar_Rush.png")
                    document.getElementById("drink_name_text").innerHTML="Sugar Rush"
                }
                else if (Adel==2 & Bron==2 & Delta==0 & Flaner==0 & Karmo>=0 & Fermentation==false & Glace==true & Mixage==2 ||
                        Adel==4 & Bron==4 & Delta==0 & Flaner==0 & Karmo>=0 & Fermentation==false & Glace==true & Mixage==2) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Sun_Cloud.png")
                    document.getElementById("drink_name_text").innerHTML="Sun Cloud"
                }
                else if (Adel==0 & Bron==4 & Delta==0 & Flaner==3 & Karmo==3 & Fermentation==false & Glace==true & Mixage==1 ||
                        Adel==0 & Bron==8 & Delta==0 & Flaner==6 & Karmo==6 & Fermentation==false & Glace==true & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Suplex.png")
                    document.getElementById("drink_name_text").innerHTML="Suplex"
                }
                else if (Adel==4 & Bron==4 & Delta==4 & Flaner==4 & Karmo==4 & Fermentation==false & Glace==true & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Zen_Star.png")
                    document.getElementById("drink_name_text").innerHTML="Zen Star"
                }
                else if (Adel==1 & Bron==1 & Delta==2 & Flaner==3 & Karmo==5 & Fermentation==false & Glace==false & Mixage==1) {
                    success=1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Flmng_Moai.png") /*Insérer flamming moai*/
                    document.getElementById("drink_name_text").innerHTML="Flmng Moai"
                }
                else {
                    success=-1
                    document.getElementById("Boisson").src=("Textures BTC/Drinks/Missed.png")
                    document.getElementById("drink_name_text").innerHTML='Inbuvable..'
                }
                document.getElementById("Bouton_Mixer").innerHTML="Serv."
        }
        Fin_Mixage=true
        }
    }
}

function image_suivante() {
    son_click.cloneNode(true).play()
    image_btc+=1
    choix_image()
}

function image_précédente() {
    son_click.cloneNode(true).play()
    image_btc-=1
    choix_image()
}

function choix_image () {
    if (image_btc==1) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/0.png"
    }
    else if (image_btc==2) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/1.png"
    }
    else if (image_btc==3) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/2.png"
    }
    else if (image_btc==4) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/3.png"
    }
    else if (image_btc==5) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/4.png"
    }
    else if (image_btc==6) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/5.png"
    }
    else if (image_btc==7) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/6.png"
    }
    else if (image_btc==8) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/7.png"
    }
    else if (image_btc==9) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/8.png"
    }
    else if (image_btc==10) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/9.png"
    }
    else if (image_btc==11) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/10.png"
    }
    else if (image_btc==12) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/11.png"
    }
    else if (image_btc==13) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/12.png"
    }
    else if (image_btc==14) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/13.png"
    }
    else if (image_btc==15) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/14.png"
    }
    else if (image_btc==16) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/15.png"
    }
    else if (image_btc==17) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/16.png"
    }
    else if (image_btc==18) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/17.png"
    }
    else if (image_btc==19) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/18.png"
    }
    else if (image_btc==20) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/19.png"
    }
    else if (image_btc==21) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/20.png"
    }
    else if (image_btc==22) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/21.png"
    }
    else if (image_btc==23) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/22.png"
    }
    else if (image_btc==24) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/23.png"
    }
    else if (image_btc==25) {
        document.getElementById("B_T_C").src="Textures BTC/B.T.C/24.png"
    }
    else if (image_btc > 24) {
        image_btc=1
        choix_image()
    }
    else {
        image_btc=25
        choix_image()
    }
    document.getElementById("Page_BTC").innerHTML=image_btc+"/25"
}

function Mix() {
    if (anim==0) {
        document.getElementById("Bouton_Mixer").innerHTML="Stop."
        Mixage=1
        document.getElementById("Boisson").classList.remove("stop");
        anim=1
        document.getElementById("Boisson").classList.add("mixing");
        Chrono=setTimeout(() => {Mixage=2
            document.getElementById("Boisson").classList.remove("mixing");
            anim=2
            document.getElementById("Boisson").classList.add("blending");}, temps);
    }
    
    else if (anim==1) {
        clearTimeout(Chrono)
        temps=5000
        document.getElementById("Boisson").classList.remove("mixing");
        document.getElementById("Boisson").classList.add("stop");
        anim=0;
    }

    else if (anim==2) {
        clearTimeout(Chrono)
        document.getElementById("Boisson").classList.remove("blending");
        document.getElementById("Boisson").classList.add("stop");
        anim=0;
    }
}



