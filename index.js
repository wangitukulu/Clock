//We bring the elements here so that we can manipulate them
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateWatch() {
    const currentDate = new Date(); //it ll give us an object with current hours,minute and second
setTimeout(updateWatch, 1000)// we use settime out to execute the function every second
// we want to get hours, minute, and second
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const hourDeg = (hour / 12) * 360; // we re changing hour to degree
hourEl.style.transform = `rotate(${hourDeg}deg)`;// we re changing transform dynamic
const minuteDeg = (minute /60) * 360 ;
minuteEl.style.transform = `rotate(${minuteDeg}deg)`;//
const secondDeg = (second / 60) * 360;
secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
updateWatch();// function was called here 