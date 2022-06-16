const clockTitle = document.querySelector(".js-clock");

function countTime() {
  const currentDate = new Date();
  const christmasDate = new Date('December 25, 2022 00:00:00');
  const time = christmasDate - currentDate
  
  const days = Math.floor(time / (1000*60*60*24))
  const hours = Math.floor((time % (1000*60*60*24)) / (1000*60*60))
  const minutes = Math.floor((time % (1000*60*60)) / (1000*60))
  const seconds = Math.floor((time % (1000*60)) / 1000)

  String(hours).padStart(2, "0");
  String(minutes).padStart(2, "0");
  String(seconds).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

countTime();
setInterval(countTime, 1000);