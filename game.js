const sliderElement = document.getElementById('slider');
sliderElement.value = 100;
sliderElement.oninput = () => {
  game.slider = sliderElement.value;
  document.getElementById('amount').innerHTML = sliderElement.value;
};

const game = {
  waterLevel: 0,
  slider: 100,

  onload() {
    setInterval(
      () => {
        this.streamDisplay();
        if (this.waterLevel < 500) {
          this.fillUp();
        }
      }, 100
    );
  },

  streamDisplay() {
    const streamElement = document.getElementById('stream');
    streamElement.style.width = `${this.slider}px`;
  },

  fillUp() {
    const waterElement = document.getElementById('water');
    const addition = this.slider/100;
    this.waterLevel += addition;
    waterElement.style.height = `${this.waterLevel}px`;
    waterElement.innerHTML = `${this.waterLevel}px`;

    const streamElement = document.getElementById('stream');
    streamElement.innerHTML = `+${addition}`;
  }
}

window.onload = game.onload.bind(game);
