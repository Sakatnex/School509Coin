const $circle = document.querySelector('#circle');
const $score = document.querySelector('#score');
const $energyText = document.querySelector('#energy-text');
const energyRegenRate = 1; 
const clickDelay = 50; 
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');

const tracks = [
    '3 Симфония.mp3',
    '40 Симфония.mp3',
    'Атань тёра.mp3',
    'Вальс 2.mp3',
    'Вальс 10.mp3',
    'Вальс В До Минор 7.mp3',
    'К Элизе.mp3',
    'Концерт 20.mp3',
    'Лакримоза.mp3',
    'Луганеся куленесь.mp3',
    'Лунная Соната.mp3',
    'Максимонь Варась.mp3',
    'Насту.mp3',
    'Ноктюрн 9.2.mp3',
    'Плясовая на вякшеме.mp3',
    'Турецкий марш.mp3',
];

let tap = 1;
let lastClickTime = 0; 
let currentEnergy = 1000; 
let maxEnergy = 1000;
let energyRegenInterval = 2500; 


function loadRandomTrack() {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const selectedTrack = tracks[randomIndex];

    audioSource.src = `./src/music/${selectedTrack}`;
    audioPlayer.load();
    
    const trackNameWithoutExtension = selectedTrack.replace('.mp3', '');
    trackTitle.textContent = trackNameWithoutExtension;
    audioPlayer.play();
}


function start() {
    setScore(getScore());
    loadEnergy(); 
    setImage();
    updateEnergyDisplay();
    setInterval(regenerateEnergy, energyRegenInterval); 
}

function setScore(score) {
    localStorage.setItem('score', score);
    $score.textContent = score;
}

function loadEnergy() {
    const savedEnergy = Number(localStorage.getItem('energy')) ?? 500;
    currentEnergy = (savedEnergy >= 0 && savedEnergy <= maxEnergy) ? savedEnergy : maxEnergy;
}

function saveEnergy() {
    localStorage.setItem('energy', currentEnergy);
}

function copyText() {
    const textToCopy = document.getElementById('copy-container').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function copyText1() {
    const textToCopy = document.getElementById('copy-container1').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function copyText2() {
    const textToCopy = document.getElementById('copy-container2').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function copyText3() {
    const textToCopy = document.getElementById('copy-container3').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function copyText4() {
    const textToCopy = document.getElementById('copy-container4').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}


function setImage() {
    if (getScore() >= 500) {
        $circle.setAttribute('src', './src/img/ALM.png')
        tap = 1
        energyRegenInterval = 2400
    }
    if (getScore() >= 1000) {
        $circle.setAttribute('src', './src/img/KDV.png')
        tap = 1.5
        energyRegenInterval = 2350
    }
    if (getScore() >= 2500) {
        $circle.setAttribute('src', './src/img/PVV.png')
        tap = 2
        energyRegenInterval = 2300
    }
    if (getScore() >= 5000) {
        $circle.setAttribute('src', './src/img/SYV.png')
        tap = 3
        energyRegenInterval = 2250
    }
    if (getScore() >= 6969) {
        $circle.setAttribute('src', './src/img/NPV.png')
        tap = 10
        energyRegenInterval = 1488
    }
    if (getScore() >= 6970) {
        $circle.setAttribute('src', './src/img/SYV.png')
        tap = 3
        energyRegenInterval = 2250
    }
    if (getScore() >= 7500) {
        $circle.setAttribute('src', './src/img/MMA.png')
        tap = 4
        energyRegenInterval = 2200
    }
    if (getScore()  >= 25000) {
        $circle.setAttribute('src', './src/img/ALV.png')
        tap = 5
        energyRegenInterval = 2150
    }
    if (getScore() >= 35000) {
        $circle.setAttribute('src', './src/img/ELA.png')
        tap = 6
        energyRegenInterval = 2100
    }
    if (getScore() >= 50000) {
        $circle.setAttribute('src', './src/img/PIV.png')
        tap = 7
        energyRegenInterval = 2050
    }
    if (getScore() >= 100000) {
        $circle.setAttribute('src', './src/img/KDN.png')
        tap = 7.5
        energyRegenInterval = 2000
    }
    if (getScore() >= 150000) {
        $circle.setAttribute('src', './src/img/OAS.png')
        tap = 8
        energyRegenInterval = 1900
    }
    if (getScore() >= 200000) {
        $circle.setAttribute('src', './src/img/BED.png')
        tap = 9
        energyRegenInterval = 1800
    }
    if (getScore() >= 250000) {
        $circle.setAttribute('src', './src/img/KEA.png')
        tap = 10
        energyRegenInterval = 1600
    }
    if (getScore() >= 300000) {
        $circle.setAttribute('src', './src/img/CMY.png')
        tap = 12.5
        energyRegenInterval = 1500
    }
    if (getScore() >= 350000) {
        $circle.setAttribute('src', './src/img/GVV.png')
        tap = 13
        energyRegenInterval = 1300
    }
    if (getScore() >= 400000) {
        $circle.setAttribute('src', './src/img/TSS.png')
        tap = 14
        energyRegenInterval = 1250
    }
    if (getScore() >= 450000) {
        $circle.setAttribute('src', './src/img/SEA.png')
        tap = 15
        energyRegenInterval = 1200
    }
    if (getScore() >= 500000) {
        $circle.setAttribute('src', './src/img/MVO.png')
        tap = 20
        energyRegenInterval = 1000
    }
    if (getScore() >= 650000) {
        $circle.setAttribute('src', './src/img/IMV.png')
        tap = 25
        energyRegenInterval = 750
    }
    if (getScore() >= 694200) {
        $circle.setAttribute('src', './src/img/SRA.png')
        tap = 69
        energyRegenInterval = 69
    }
    if (getScore() >= 694201) {
        $circle.setAttribute('src', './src/img/IMV.png')
        tap = 25
        energyRegenInterval = 500
    }
    if (getScore() >= 750000) {
        $circle.setAttribute('src', './src/img/MMG.png')
        tap = 30
        energyRegenInterval = 250
    }
    if (getScore() >= 1000000) {
        $circle.setAttribute('src', './src/img/NNU.png')
        tap = 35
        energyRegenInterval = 100
    }
    if (getScore() >= 2500000) {
        $circle.setAttribute('src', './src/img/KVO.png')
        tap = 40
        energyRegenInterval = 75
    }
    if (getScore() >= 5000000) {
        $circle.setAttribute('src', './src/img/SDI.png')
        tap = 45
        energyRegenInterval = 50
    }
    if (getScore() >= 10000000) {
        $circle.setAttribute('src', './src/img/ZMG.png')
        tap = 50
        energyRegenInterval = 25
    }
    if (getScore() >= 100000000) {
        $circle.setAttribute('src', './src/img/favicon.png')
        tap = 100
        energyRegenInterval = 10
    }
}

function getScore() {
    return Number(localStorage.getItem('score')) ?? 0;
}

function addOne() {
    if (currentEnergy >= tap) {
        setScore(getScore() + tap);
        currentEnergy -= tap; 
        saveEnergy(); 
        updateEnergyDisplay();
    }
}

function updateEnergyDisplay() {
    $energyText.textContent = `Энергия: ${currentEnergy}/${maxEnergy}`; 
    if (currentEnergy <= 0) {
        $circle.classList.add('gray-out'); 
    } else {
        $circle.classList.remove('gray-out');
    }
}

function regenerateEnergy() {
    if (currentEnergy < maxEnergy) {
        currentEnergy = Math.min(currentEnergy + energyRegenRate, maxEnergy);
        saveEnergy();
        updateEnergyDisplay();
    }
}

$circle.addEventListener('click', (event) => {
    if (currentEnergy < tap) {
        return;
    }

    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < clickDelay) {
        return;
    }

    lastClickTime = currentTime;

    const rect = $circle.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    const deg = 40;
    const tiltX = (offsetY / rect.height) * deg;
    const tiltY = (offsetX / rect.width) * -deg;

    $circle.style.setProperty('--tiltX', `${tiltX}deg`);
    $circle.style.setProperty('--tiltY', `${tiltY}deg`);

    setTimeout(() => {
        $circle.style.setProperty('--tiltX', `0deg`);
        $circle.style.setProperty('--tiltY', `0deg`);
    }, 300);

    const plusOne = document.createElement('div');
    plusOne.classList.add('plus-one');
    plusOne.textContent = '+' + tap;
    plusOne.style.left = `${event.clientX - rect.left}px`;
    plusOne.style.top = `${event.clientY - rect.top}px`;
    $circle.parentElement.appendChild(plusOne);

    addOne(); 
    setImage();

    setTimeout(() => {
        plusOne.remove();
    }, 2000);
});

document.getElementById('next-track').addEventListener('click', function() {
    loadRandomTrack();
});

window.onload = loadRandomTrack;

start();