export class SnakeGame {
  private canvas: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private gridSize: number = 20;
  private snake: { x: number, y: number }[] = [];
  private food: { x: number, y: number } = { x: 0, y: 0 };
  private dx: number = 0;
  private dy: number = -1; 
  private score: number = 0;
  private gameLoop: number | null = null;
  private isGameOver: boolean = false;
  private gameSpeed: number = 100;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;
    
    this.canvas.width = 400;
    this.canvas.height = 400;

    this.init();
    
    document.addEventListener('keydown', this.handleInput.bind(this));
    
    this.canvas.addEventListener('click', () => {
      if (this.isGameOver) this.init();
    });
  }

  private init() {
    this.snake = [
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 }
    ];
    this.dx = 0;
    this.dy = -1;
    this.score = 0;
    this.isGameOver = false;
    this.spawnFood();
    
    if (this.gameLoop) clearInterval(this.gameLoop);
    this.gameLoop = window.setInterval(() => this.update(), this.gameSpeed);
  }

  private handleInput(e: KeyboardEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const isInView = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isInView && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
      e.preventDefault();
    }

    if (this.isGameOver && e.key === ' ') {
      this.init();
      return;
    }

    const goingUp = this.dy === -1;
    const goingDown = this.dy === 1;
    const goingRight = this.dx === 1;
    const goingLeft = this.dx === -1;

    if (e.key === 'ArrowLeft' && !goingRight) { this.dx = -1; this.dy = 0; }
    if (e.key === 'ArrowUp' && !goingDown) { this.dx = 0; this.dy = -1; }
    if (e.key === 'ArrowRight' && !goingLeft) { this.dx = 1; this.dy = 0; }
    if (e.key === 'ArrowDown' && !goingUp) { this.dx = 0; this.dy = 1; }
  }

  private spawnFood() {
    this.food = {
      x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)),
      y: Math.floor(Math.random() * (this.canvas.height / this.gridSize))
    };
    
    for (let segment of this.snake) {
      if (segment.x === this.food.x && segment.y === this.food.y) {
        this.spawnFood();
      }
    }
  }

  private update() {
    if (this.isGameOver) return;

    const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

    if (head.x < 0 || head.x >= this.canvas.width / this.gridSize ||
        head.y < 0 || head.y >= this.canvas.height / this.gridSize) {
      this.gameOver();
      return;
    }

    for (let segment of this.snake) {
      if (head.x === segment.x && head.y === segment.y) {
        this.gameOver();
        return;
      }
    }

    this.snake.unshift(head);

    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      this.spawnFood();
    } else {
      this.snake.pop();
    }

    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#38bdf8';
    for (let i = 0; i < this.snake.length; i++) {
      this.ctx.fillStyle = i === 0 ? '#38bdf8' : '#818cf8';
      this.ctx.fillRect(this.snake[i].x * this.gridSize, this.snake[i].y * this.gridSize, this.gridSize - 1, this.gridSize - 1);
    }

    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 1, this.gridSize - 1);

    this.ctx.fillStyle = '#f8fafc';
    this.ctx.font = '16px "Fira Code"';
    this.ctx.fillText(`Score: ${this.score}`, 10, 20);
  }

  private gameOver() {
    this.isGameOver = true;
    if (this.gameLoop) clearInterval(this.gameLoop);
    
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#f8fafc';
    this.ctx.font = '24px "Fira Code"';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 15);
    
    this.ctx.font = '14px "Fira Code"';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 15);
    this.ctx.fillText('Click or Space to restart', this.canvas.width / 2, this.canvas.height / 2 + 40);
    this.ctx.textAlign = 'left'; // reset
  }
}
