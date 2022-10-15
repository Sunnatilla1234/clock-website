// !Selectors

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const updateData = () => {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();
  let hourRotation = hours * 30 + minutes / 2;
  let minuteRotation = minutes * 6;
  let secondRotation = seconds * 6;
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
};

setInterval(updateData, 1000);
