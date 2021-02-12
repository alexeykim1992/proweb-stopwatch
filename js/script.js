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
    isCounting = false;

const startButton = document.querySelector('.stopwatch__btn');

startButton.addEventListener('click', () => {
    if (isCounting) {
        isCounting = false;
        startButton.innerHTML = 'start';
    } else {
        startDate = new Date();
        isCounting = true;
        startButton.innerHTML = 'stop';
        counting();
    }
});

function counting() {
    if (isCounting) {
        let allSeconds = Math.floor((new Date() - startDate) / 1000);    
        
        stopwatchHours.innerHTML = Math.floor(allSeconds / 3600);
        stopwatchMinutes.innerHTML = Math.floor(allSeconds % 3600 / 60);
        stopwatchSeconds.innerHTML = allSeconds % 60;

        setTimeout(() => counting(), 1000);
    }
}