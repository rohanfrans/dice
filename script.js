function rollDice() {
    const cube = document.getElementById("cube");
  
    // Random rotations to simulate a dice roll
    const randomX = Math.floor(Math.random() * 4) * 90;
    const randomY = Math.floor(Math.random() * 4) * 90;
  
    cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
  }
  