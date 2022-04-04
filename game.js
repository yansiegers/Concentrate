const game = {
  started: false,
  waterLevel: 0,
  slider: 100,

  onload() {
    this.initialize();
    setInterval(
      () => {
        if (this.started) {
          this.streamDisplay();
          if (this.waterLevel < 500) {
            this.fillUp();
          }
        }
      }, 100
    );
  },

  initialize() {
    this.initSlider();
    this.initGameToggle();
  },

  initGameToggle() {
    const toggleElement = document.getElementById('game-toggle');
    const streamElement = document.getElementById('stream');

    toggleElement.onclick = () => {
      this.started = !this.started;
      console.log(this.started);
      if (this.started) {
        toggleElement.value = 'Stop';
        streamElement.style.width = this.inPixels(this.slider);
      } else {
        toggleElement.value = 'Start';
        streamElement.style.width = this.inPixels(0);
      }
    };
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
    streamElement.style.width = this.inPixels(this.slider);
  },

  fillUp() {
    const waterElement = document.getElementById('water');
    const addition = this.slider/100;
    this.waterLevel += addition;
    waterElement.style.height = this.inPixels(this.waterLevel);
    waterElement.innerHTML = this.inPixels(this.waterLevel);

    const streamElement = document.getElementById('stream');
    streamElement.innerHTML = `+${addition}px`;
  },

  // Helper functions
  inPixels(amount) {
    return `${amount}px`;
  }
}

window.onload = game.onload.bind(game);
