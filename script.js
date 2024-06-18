document.addEventListener('DOMContentLoaded', (event) => {
  const gameArea = document.getElementById('gameArea');
  const gameWidth = gameArea.offsetWidth;
  const gameHeight = gameArea.offsetHeight;
  const snakeSize = 20;
  let snake = [{x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200}];
  let food = {x: 300, y: 200};
  let direction = 'right';
  let score = 0;

  function createFood() {
    food.x = Math.floor(Math.random() * (gameWidth/snakeSize)) * snakeSize;
    food.y = Math.floor(Math.random() * (gameHeight/snakeSize)) * snakeSize;
  }

  function drawFood() {
    const foodElement = document.createElement('div');
    foodElement.style.left = food.x + 'px';
    foodElement.style.top = food.y + 'px';
    foodElement.classList.add('food');
    gameArea.appendChild(foodElement);
  }

  // ... rest of the drawSnake, moveSnake, checkCollision functions ...

  function changeDirection(event) {
    // ... existing changeDirection code ...
  }

  document.addEventListener('keydown', changeDirection);

  function gameLoop() {
    if (checkCollision()) {
      alert(`Game Over. Your score is ${score}`);
      // Reset the game
      snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}];
      createFood();
      score = 0;
      direction = 'right';
    } else {
      moveSnake();
      drawSnake();
    }
  }

  createFood(); // Create initial food
  setInterval(gameLoop,100);
});
