let keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
//Heater Kit
let displayHKey = ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Clap", "Open HH", "Kick n Hat", "Kick", "Closed HH"];

//Piano Key
let displayPKeys = ["Chord 1", "Chord 2", "Chord 3", "Shaker", "Open HH", "Closed HH", "Punchy Kick", "Side Stick", "Snare"];

let selectionBool = true;
let powerOff = false; 

let music = [
    {
    //Q
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", 
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    "linkOff": "#"
    },
    {
        //W
        "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        "linkOff": "#"
    },
    {
        //E
        "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        "linkOff": "#"
    },    

    {
    //A
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    "linkOff": "#"
    },
    {
    //S
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    "linkOff": "#"
    },
    {
        //D
        "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        "linkOff": "#"
    },
    {
    //Z
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    "linkOff": "#"
    },
    {
    //X
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    "linkOff": "#"
    },
    {
    //C
    "linkHK": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "linkPK": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    "linkOff": "#"
    }

   
];

let onOffBtn = document.getElementById('onOff');
let musicSwitch = document.getElementById('bankBtn');
musicSwitch.disabled = false;
let volSlider = document.getElementById('slider');
volSlider.disabled = false;
let drumContainer = document.querySelector('.drum-pad-container');
let displayDiv = document.getElementById('display');

 
let drumPad = document.querySelectorAll('.drum-pad');
let tempArray = displayHKey;

function drawDrums(){


    keys.forEach((element, index) => {
        const drumpad = document.createElement('div');
        drumpad.classList.add('drum-pad');
        drumpad.setAttribute('id', keys[index]);
        drumpad.innerHTML = element;
        const audionode = document.createElement('audio');
        audionode.classList.add('clip');
        audionode.setAttribute("src", music[index].linkHK);
        drumpad.appendChild(audionode);
        drumContainer.appendChild(drumpad);
    });         
}


drawDrums();
setAudioID();
setPlay();

function setAudioID(){
    let audioSrc = document.querySelectorAll('audio');
    let theDrumPads = document.querySelectorAll('.drum-pad');

    audioSrc.forEach((element, index) =>{
        //Get the Letter and set the ID
        element.setAttribute("id", theDrumPads[index].innerHTML[0]);
    });
}
 

function setSource(linkEl){
    let audioSrc = document.querySelectorAll('audio');
    audioSrc.forEach((element, index ) => {
        
        element.setAttribute("src", music[index][linkEl]);
    });
}

function setPlay(){
    let theDrumPads = document.querySelectorAll('.drum-pad');
    //console.log(theDrumPads);
    let audioVar = document.querySelectorAll('audio');
                theDrumPads.forEach((element, index) => {
                    element.addEventListener('click',()=>{
                    if(powerOff === false){
                        let theVariable = audioVar[index];
                        displayTheNote(index);
                        theVariable.play();
                    }
                    
                });       
            });
}


function displayTheNote(key){
    console.log(key);
    displayDiv.innerHTML = tempArray[key];
}
    

this.addEventListener('keypress', event =>{
    
    makeSound(event.key.toUpperCase());
    
});

function makeSound(key){
    let audioVar = document.querySelectorAll('audio');
    switch(key){
        case "Q":
            audioVar[0].play();
            break;
        case "W":
            audioVar[1].play();
            break;
        case "E":
            audioVar[2].play();
            break;
        case "A":
            audioVar[3].play();
            break;
        case "S":
            audioVar[4].play();
            break;
        case "D":
            audioVar[5].play();
            break;
        case "Z":
            audioVar[6].play();
            break;
        case "X":
            audioVar[7].play();
            break;
        case "C":
            audioVar[8].play();
            break;
        default:
    }

}


onOffBtn.addEventListener('click', ()=>{
    if(onOffBtn.innerHTML === 'Off'){
        console.log("ON");
        onOffBtn.innerHTML = "On"
        musicSwitch.disabled = false;
        volSlider.disabled = false;
        powerOff = false;
        let theDrumPads = document.querySelectorAll('.drum-pad');
        theDrumPads.forEach(element => {
            element.classList.remove('disabled');
        });
        setSource("linkHK");
    }
    else{
        onOffBtn.innerHTML = 'Off';
        displayDiv.innerHTML = "";
        musicSwitch.disabled = true;
        volSlider.disabled = true;
        powerOff = true; 
        let theDrumPads = document.querySelectorAll('.drum-pad');
        theDrumPads.forEach(element => {
            element.classList.add('disabled');
        });
        
        setSource("linkOff");
        
        
    }
     
});


musicSwitch.addEventListener('click', function(){
    if(musicSwitch.disabled === false){
        if(selectionBool){
            displayDiv.innerHTML = "Smooth Piano Kit";
            selectionBool = false;
            setSource("linkPK");
            tempArray = displayPKeys;
        }
        else{
            displayDiv.innerHTML = "Heater Kit";
            selectionBool = true;
            setSource("linkHK");
            tempArray = displayHKey;
        }
    }
});

volSlider.addEventListener('input', function(){
    displayDiv.innerHTML = `Volume: ${this.value}`;
});

