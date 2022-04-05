const game = {
  started: false,
  waterLevel: 0,
  slider: 100,
  classTime: 0,
  freeTime: 0,
  timeLeft: 0,

  onload() {
    this.initialize();
    setInterval(
      () => {
        if (this.started) {
          this.streamDisplay();
          if (this.waterLevel < 500) {
            this.timerDisplay();
            this.fillUp();
          }
        }
      }, 100
    );
  },

  initialize() {
    this.initFormData();
    this.initSlider();
    this.initGameToggle();
  },

  initFormData() {
    const classTimeElement = document.getElementById('class-time');
    const freeTimeElement = document.getElementById('free-time');

    this.classTime = classTimeElement.value;
    this.freeTime = freeTimeElement.value;
    this.timeLeft = this.classTime;
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
        this.disableFormElements(true);
      } else {
        toggleElement.value = 'Start';
        streamElement.style.width = this.inPixels(0);
        // this.disableFormElements(false);
      }
    };
  },

  disableFormElements(boolean) {
    const classTimeElement = document.getElementById('class-time');
    const freeTimeElement = document.getElementById('free-time');

    classTimeElement.disabled = boolean;
    freeTimeElement.disabled = boolean;
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

  timerDisplay() {
    const timerElement = document.getElementById('timer');
    this.timeLeft--;
    console.log(this.timeLeft);
    timerElement.innerHTML = this.timeLeft;
  },

  fillUp() {
    const waterElement = document.getElementById('water');
    const multiplier = this.slider / 100;
    const addition = 500 / (this.classTime - this.freeTime);
    const addWater = addition * multiplier;

    this.waterLevel += addWater;
    waterElement.style.height = this.inPixels(this.waterLevel);
    waterElement.innerHTML = this.inPixels(this.waterLevel);

    const streamElement = document.getElementById('stream');
    streamElement.innerHTML = `+${this.inPixels(addWater)}`;
  },

  // Helper functions
  inPixels(amount) {
    return `${amount}px`;
  }
}

window.onload = game.onload.bind(game);
