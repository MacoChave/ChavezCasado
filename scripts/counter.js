// Establece la fecha objetivo para el conteo regresivo (formato: año, mes - 1, día, hora, minuto, segundo)
var targetDate = new Date('2024-11-09T14:00:00');

function getTimeRemaining(endTime) {
    var currentTime = new Date();
    var timeDifference = endTime - currentTime;

    if (timeDifference < 0) {
        return { total: timeDifference, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    var seconds = Math.floor((timeDifference / 1000) % 60);
    var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return { total: timeDifference, days: days, hours: hours, minutes: minutes, seconds: seconds };
}

function updateCountdown() {
    var timeRemaining = getTimeRemaining(targetDate);
    let countdownElemet = document.querySelector('#countdown')

    if (timeRemaining.total <= 0) {
        clearInterval(countdownInterval);
        countdownElemet.innerHTML = '¡El evento ha empezado 🎉!';
    } else {
        // countdownElemet.classList.add('opacity-0', 'scale-90', 'transition-all', 'duration-500')

        let daySpan = `<p class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.days}</p>`
        let hoursSpan = `<p class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.hours}</p>`
        let minSpan = `<p class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.minutes}</p>`
        let secSpan = `<p class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.seconds}</p>`

        countdownElemet.innerHTML = `
            <div class="flex flex-col place-columns-center place-items-center">
                <p class="text-xl">${daySpan}</p>
                <p class="text-xs">Dias</p>
            </div>
            <div class="flex flex-col place-columns-center place-items-center">
                <p class="text-xl">${hoursSpan}</p>
                <p class="text-xs">Hrs</p>
            </div>
            <div class="flex flex-col place-columns-center place-items-center">
                <p class="text-xl">${minSpan}</p>
                <p class="text-xs">Min</p>
            </div>
            <div class="flex flex-col place-columns-center place-items-center">
                <p class="text-xl">${secSpan}</p>
                <p class="text-xs">Seg</p>
            </div>`
        
        // countdownInterval.classList.remove('opacity-0', 'scale-90')
        // countdownInterval.classList.remove('opacity-100', 'scale-100')
    }
}

// Actualiza el contador cada segundo
var countdownInterval = setInterval(updateCountdown, 1000);