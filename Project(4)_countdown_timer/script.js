const tillDate = new Date('Jan 31, 2021 00:00:00').getTime();

setInterval(countdownTimer, 1000);

function countdownTimer() {
    const currentDate = new Date().getTime();
    const remainingTime = tillDate - currentDate;

    if(remainingTime < 0) {
        document.querySelector('.counter').innerHTML='00:00:00:00';
        return;
    }

    const days = Math.floor(remainingTime/(1000*60*60*24));
    const hours = Math.floor((remainingTime%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor(((remainingTime%(1000*60*60*24))%(1000*60*60))/(1000*60)) ;
    const seconds = Math.floor((((remainingTime%(1000*60*60*24))%(1000*60*60))%(1000*60))/1000);

    document.querySelector('.counter').innerHTML=`${days}:${hours}:${minutes}:${seconds}`;
}