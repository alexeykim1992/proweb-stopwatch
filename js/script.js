const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursElectronic = document.querySelector('.hours'),
    minutesElectronic = document.querySelector('.minutes');

function clock() {

    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30

    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

    hoursElectronic.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesElectronic.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}

clock();

const links = document.querySelectorAll('.tabsItem'),
    tab = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (let ix = 0; ix < tab.length; ix++) {
            links[ix].classList.remove('active');
            tab[ix].classList.remove('active');
        }
        tabs(links[i], tab[i])
    })
}

function tabs(el, arr) {

    el.classList.add('active');
    arr.classList.add('active');
}

// Таймер
const stopwatchHours = document.querySelector('.stopwatch__hours'),
      stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
      stopwatchSeconds = document.querySelector('.stopwatch__seconds');
      
let startDate,
    prevSeconds = 0,
    allSeconds = 0,
    isCounting = false,
    isPaused = false;

const startButton = document.querySelector('.stopwatch__start'),
      pauseButton = document.querySelector('.stopwatch__pause'),
      stopButton = document.querySelector('.stopwatch__stop');

startButton.addEventListener('click', () => {
    startDate = new Date();
    isCounting = true;
    isPaused = false;

    startButton.style.display = "none";
    pauseButton.style.display = "inline";
    stopButton.style.display = "inline";
    counting();
});

pauseButton.addEventListener('click', () => {
    prevSeconds = allSeconds;
    isCounting = false;
    isPaused = true;
    startButton.style.display = "inline";
    pauseButton.style.display = "none";
});

stopButton.addEventListener('click', () => {
    isCounting = false;
    isPaused = false;
    prevSeconds = 0;
    startButton.style.display = "inline";
    pauseButton.style.display = "none";
    stopButton.style.display = "none";    
    stopwatchHours.innerHTML = "0";
    stopwatchMinutes.innerHTML = "0";
    stopwatchSeconds.innerHTML = "0";
});

function counting() {
    if (isCounting) {
        allSeconds = prevSeconds + Math.floor((new Date() - startDate) / 1000);    
        stopwatchHours.innerHTML = Math.floor(allSeconds / 3600);
        stopwatchMinutes.innerHTML = Math.floor(allSeconds % 3600 / 60);
        stopwatchSeconds.innerHTML = allSeconds % 60;

        setTimeout(() => counting(), 1000);
    }
}