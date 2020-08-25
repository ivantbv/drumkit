let keys = document.querySelectorAll('.key')
let audio = document.getElementsByTagName('audio')

function playClap(url) {
  new Audio('sounds/clap.wav').play();
}
function playHiHat(url) {
  new Audio('sounds/hihat.wav').play();
}
function playKick(url) {
  new Audio('sounds/kick.wav').play();
}
function playOpenHat(url) {
  new Audio('sounds/openhat.wav').play();
}
function playBoom(url) {
  new Audio('sounds/boom.wav').play();
}
function playRide(url) {
  new Audio('sounds/ride.wav').play();
}
function playSnare(url) {
  new Audio('sounds/snare.wav').play();
}
function playTom(url) {
  new Audio('sounds/tom.wav').play();
}
function playTink(url) {
  new Audio('sounds/tink.wav').play();
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.which == 65) { 
 let cssAdd = document.getElementById('A')
    cssAdd.classList.toggle('playing');
    playClap();
  } else if (e.which == 83) {
    let cssAdd = document.getElementById('S')
    cssAdd.classList.toggle('playing');
    playHiHat();
  } else if (e.which == 68) {
    let cssAdd = document.getElementById('D')
    cssAdd.classList.toggle('playing');
    playKick();
  } else if (e.which == 70) {
    let cssAdd = document.getElementById('F')
    cssAdd.classList.toggle('playing');
    playOpenHat();
  } else if (e.which == 71) {
    let cssAdd = document.getElementById('G')
    cssAdd.classList.toggle('playing');
    playBoom();
  } else if (e.which == 72) {
    let cssAdd = document.getElementById('H')
    cssAdd.classList.toggle('playing');
    playRide();
  } else if (e.which == 74) {
    let cssAdd = document.getElementById('J')
    cssAdd.classList.toggle('playing');
    playSnare();
  } else if (e.which == 75) {
    let cssAdd = document.getElementById('K')
    cssAdd.classList.toggle('playing');
    playTom();
  } else if (e.which == 76) {
    let cssAdd = document.getElementById('L')
    cssAdd.classList.toggle('playing');
    playTink();
  }
})
document.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.which == 65) {
    let cssAdd = document.getElementById('A')
       cssAdd.classList.remove('playing');
     } else if (e.which == 83) {
    let cssAdd = document.getElementById('S')
    cssAdd.classList.remove('playing');
  } else if (e.which == 68) {
    let cssAdd = document.getElementById('D')
    cssAdd.classList.remove('playing');
  } else if (e.which == 70) {
    let cssAdd = document.getElementById('F')
    cssAdd.classList.remove('playing');
  } else if (e.which == 71) {
    let cssAdd = document.getElementById('G')
    cssAdd.classList.remove('playing');
  } else if (e.which == 72) {
    let cssAdd = document.getElementById('H')
    cssAdd.classList.remove('playing');
  } else if (e.which == 74) {
    let cssAdd = document.getElementById('J')
    cssAdd.classList.remove('playing');
  } else if (e.which == 75) {
    let cssAdd = document.getElementById('K')
    cssAdd.classList.remove('playing');
  } else if (e.which == 76) {
    let cssAdd = document.getElementById('L')
    cssAdd.classList.remove('playing');
  }
})
//click support

keys.forEach(key => key.addEventListener('click', (e) => {
    let cssA = document.getElementById('A')
    let cssS = document.getElementById('S')
    let cssD = document.getElementById('D')
    let cssF = document.getElementById('F')
    let cssG = document.getElementById('G')
    let cssH = document.getElementById('H')
    let cssJ = document.getElementById('J')
    let cssK = document.getElementById('K')
    let cssL = document.getElementById('L')
    
    if (e.target == cssA) {
    playClap();
} else if (e.target == cssS) {
    playHiHat()
} else if (e.target == cssD) {
    playKick();
} else if (e.target == cssF) {
    playOpenHat();
} else if (e.target == cssG) {
    playBoom();
} else if (e.target == cssH) {
    playRide();
} else if (e.target == cssJ) {
    playSnare();
} else if (e.target == cssK) {
    playTom();
} else if (e.target == cssL) {
    playTink();
}
}))
