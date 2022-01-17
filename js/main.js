const dayEl  = document.getElementById('days'); 
const hourEl = document.getElementById('hours');  
const minEl  = document.getElementById('mins');  
const secEl  = document.getElementById('seconds');  

const dayEl2  = document.getElementById('days2'); 
const hourEl2 = document.getElementById('hours2');  
const minEl2  = document.getElementById('mins2');  
const secEl2  = document.getElementById('seconds2');
const month  = document.getElementById('month2');

const releaseDay = '1 Mar 2022'

function countdown(){
    const releaseDate = new Date(releaseDay)
    const currentDate = new Date();

    const totalSeconds = (releaseDate - currentDate) / 1000;
    

    const days = Math.floor(totalSeconds / 3600 / 24);
    
    const hours =  Math.floor(totalSeconds / 3600 % 24);
    
    const mins = Math.floor(totalSeconds / 60 % 60);
    
    const seconds = Math.floor(totalSeconds % 60);
    

    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(seconds);

}

countdown()

setInterval(countdown, 1000);


// function formatTime(time) {
//     return time < 10 ? (`0${time}`) : time;
// }


// XMAS COUNTDOWN

function christmasCountdown(){
    const currentDate = new Date();

    const christmasDay = new Date(currentDate.getFullYear(), 11, 25);

    // Calculate next christmas if passed

        if(currentDate.getMonth() == 11 
        && currentDate.getDate() > 25){
            christmasDay.setFullYear(christmasDay.getFullYear() + 1)
        }

        totalSeconds = Math.round(christmasDay.getTime() - currentDate.getTime()) / 1000;
        console.log(totalSeconds)

        const months = (christmasDay.getMonth() - currentDate.getMonth());
      ;
        console.log(months)

        
      
        const days = Math.floor(totalSeconds / 3600 / 24 % 28
        );
        // console.log(days)
        const hours = Math.floor(totalSeconds / 3600 % 24
            );
        console.log(hours)
        const mins = Math.floor(totalSeconds / 60 % 60 
            );
        console.log(mins)
        const secs = Math.floor(totalSeconds % 60
            );
        console.log(secs)

        month.innerHTML = formatTime(months);
        dayEl2.innerHTML = formatTime(days);
        hourEl2.innerHTML = formatTime(hours);
        minEl2.innerHTML = formatTime(mins);
        secEl2.innerHTML = formatTime(secs);
}

christmasCountdown()

setInterval(christmasCountdown, 1000);

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}