//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AUDIO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! --------------------------------------INTERFACE
const click = new Audio; click.volume = 0.2; click.src = "Audio/button_click.mp4"
const enter = new Audio; enter.volume = 0.3; enter.src = "Audio/enter.mp3"

//! --------------------------------------MUSIC
const music = new Audio; music.volume = 0.25; music.loop = true; music.src = "Music/Game Theme_Dettankarmen - Instrumental.mp3"

//! --------------------------------------REK'SAI
const reksaiSelect = new Audio; reksaiSelect.volume = 0.2; reksaiSelect.src = "Champies/Rek'Sai/Audio/reksaiSelect.ogg"  // selection voice
const reksaiAttack = new Audio; reksaiAttack.volume = 0.2; reksaiAttack.src = "Champies/Rek'Sai/Audio/reksaiAttack.ogg"  // attack voice
const reksaiFuryAttack = new Audio; reksaiFuryAttack.volume = 0.8; reksaiFuryAttack.src = "Champies/Rek'Sai/Audio/reksaiFuryAttack.mp3"  // fury attack voice

const reksaiQ = new Audio; reksaiQ.volume = 0.45; reksaiQ.src = "Champies/Rek'Sai/Audio/reksaiQ.mp3"
const reksaiW = new Audio; reksaiW.volume = 0.45; reksaiW.src = "Champies/Rek'Sai/Audio/reksaiW.mp3"
const reksaiE = new Audio; reksaiE.volume = 0.45; reksaiE.src = "Champies/Rek'Sai/Audio/reksaiE.mp3"