const sliderElement = document.getElementById('slider');
sliderElement.value = 90;
sliderElement.oninput = () => {
  game.slider = sliderElement.value;
  document.getElementById('amount').innerHTML = sliderElement.value;
};

const game = {
  waterLevel: 0,
  slider: 90,

  onload() {
    setInterval(
      () => {
        this.streamDisplay();
        if (this.waterLevel < 500) {
          this.fillUp();
        }
      }, 10
    );
  },

  streamDisplay() {
    const streamElement = document.getElementById('stream');
    streamElement.style.width = `${this.slider}px`;
  },

  fillUp() {
    const waterElement = document.getElementById('water');
    this.waterLevel++;
    waterElement.style.height = `${this.waterLevel}px`;
  }
}

window.onload = game.onload.bind(game);
