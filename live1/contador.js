window.addEventListener('load', () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    let seconds = 180;

    const timerDiv = document.getElementById('timer');

    const timeReduction = () => {
      let minutes = Math.floor(seconds / 60);
      let secondsLeft = seconds % 60;

      if (secondsLeft < 10) {
        secondsLeft = '0' + secondsLeft;
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      timerDiv.innerHTML = minutes + ':' + secondsLeft;

      if (seconds > 0) {
        seconds -= 1;
      }
      else {
        timerDiv.innerHTML = 'Acabou!';
        clearInterval(countDown);
      }
    };

    const countDown = setInterval(() => timeReduction(), 1000);
  });
});
