const game = {
  waterLevel: 0,
  slider: 100,

  onload() {
    this.initialize();
    setInterval(
      () => {
        this.streamDisplay();
        if (this.waterLevel < 500) {
          this.fillUp();
        }
      }, 100
    );
  },

  initialize() {
    this.initSlider();
  },

  initSlider() {
    const sliderElement = document.getElementById('slider');
    const amountElement = document.getElementById('amount');

    sliderElement.value = this.slider;
    sliderElement.oninput = () => {
      this.slider = sliderElement.value;
      amountElement.innerHTML = sliderElement.value;
    };
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
