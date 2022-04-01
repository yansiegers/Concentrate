const game = {
  waterLevel: 0,

  onload() {
    setInterval(
      () => {
        if (this.waterLevel < 500) {
          this.fillUp();
        }
      }, 10
    );
  },

  fillUp() {
    const waterElement = document.getElementById('water');
    this.waterLevel++;
    waterElement.style.height = `${this.waterLevel}px`;
  }
}

window.onload = game.onload.bind(game);
