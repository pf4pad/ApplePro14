
const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
const timer = (deadline) => {

  const unitDay = document.querySelector('.timer__unit_day')
  const unitHour = document.querySelector('.timer__unit_hour')
  const unitMin = document.querySelector('.timer__unit_min')
  const unitSec = document.querySelector('.timer__unit_sec')

  const descriptionDay = document.querySelector('.timer__unit-decription_day')
  const descriptionHour = document.querySelector('.timer__unit-decription_hour')
  const descriptionMin = document.querySelector('.timer__unit-decription_min')
  const descriptionSec = document.querySelector('.timer__unit-decription_sec')

  const getTimerRemaning = () => {
    const dateStop = new Date(deadline).getTime()
    const dateNow = Date.now();
    const timeRemaning = dateStop - dateNow;

    const seconds = Math.floor(timeRemaning / 1000 % 60);
    const minutes = Math.floor(timeRemaning / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaning / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaning / 1000 / 60 / 60 / 24);


    return { timeRemaning, seconds, minutes, hours, days }
  }

  const start = () => {
    const timer = getTimerRemaning()

    unitDay.textContent = timer.days;
    unitHour.textContent = timer.hours;
    unitMin.textContent = timer.minutes;
    unitSec.textContent = timer.seconds;

    descriptionDay.textContent = declOfNum(timer.days, ['день', 'дня', 'дней'])
    descriptionHour.textContent = declOfNum(timer.hours, ['час', 'часа', 'часов'])
    descriptionMin.textContent = declOfNum(timer.minutes, ['минута', 'минуты', 'минут'])
    descriptionSec.textContent = declOfNum(timer.seconds, ['сек.', 'сек.', 'сек.'])

    const timerId = setTimeout(start, 1000);
    console.log(timer.timeRemaning);
    if (timer.timeRemaning < 0) {
      clearTimeout(timerId);
      unitDay.textContent = '0';
      unitHour.textContent = '0';
      unitMin.textContent = '0';
      unitSec.textContent = '0';
    }
  }
  start();
}

timer('2023/09/07 20:00')