import React, { useState, useEffect, useRef } from "react";

// --- Built-in Game #1: Snake ---
function SnakeGame() {
  const size = 20; // grid size (20x20)
  const [snake, setSnake] = useState([[10, 10]]);
  const [dir, setDir] = useState([0, -1]);
  const [food, setFood] = useState([5, 5]);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(120);
  const loopRef = useRef(null);

  const randomFood = () => [
    Math.floor(Math.random() * size),
    Math.floor(Math.random() * size),
  ];

  useEffect(() => {
    const onKey = (e) => {
      const k = e.key.toLowerCase();
      const map = {
        arrowup: [0, -1], w: [0, -1],
        arrowdown: [0, 1], s: [0, 1],
        arrowleft: [-1, 0], a: [-1, 0],
        arrowright: [1, 0], d: [1, 0],
      };
      if (map[k]) {
        const next = map[k];
        if (snake.length > 1 && next[0] === -dir[0] && next[1] === -dir[1]) return;
        setDir(next);
      }
      if (k === " ") setRunning((r) => !r);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dir, snake.length]);

  useEffect(() => {
    if (!running) return;
    loopRef.current = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = [
          (head[0] + dir[0] + size) % size,
          (head[1] + dir[1] + size) % size,
        ];
        // self collision
        if (prev.some(([x, y]) => x === newHead[0] && y === newHead[1])) {
          setRunning(false);
          return prev;
        }
        const ate = newHead[0] === food[0] && newHead[1] === food[1];
        const body = [newHead, ...prev];
        if (!ate) body.pop();
        else {
          setFood(randomFood());
          setScore((s) => s + 1);
          setSpeed((sp) => Math.max(60, sp - 4));
        }
        return body;
      });
    }, speed);
    return () => clearInterval(loopRef.current);
  }, [dir, running, food, speed]);

  const cellSize = 18;
  const boardPx = size * cellSize;

  return (
    <div>
      <h2>Snake</h2>
      <p>Score: {score}</p>
      <button onClick={() => {
        setSnake([[10, 10]]);
        setDir([0, -1]);
        setFood(randomFood());
        setScore(0);
        setSpeed(120);
        setRunning(true);
      }}>Restart</button>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? "Pause" : "Resume"}
      </button>

      <div style={{
        position: "relative",
        width: boardPx, height: boardPx,
        background: "#eee", marginTop: 10
      }}>
        {snake.map(([x, y], i) => (
          <div key={i} style={{
            position: "absolute",
            left: x * cellSize, top: y * cellSize,
            width: cellSize, height: cellSize,
            background: i === 0 ? "green" : "lime"
          }} />
        ))}
        <div style={{
          position: "absolute",
          left: food[0] * cellSize, top: food[1] * cellSize,
          width: cellSize, height: cellSize,
          background: "red"
        }} />
      </div>
    </div>
  );
}

// --- Built-in Game #2: 2048 ---
function Game2048() {
  return (
    <div>
      <h2>2048</h2>
      <p>(2048 game placeholder – you can add full logic here later)</p>
    </div>
  );
}

// --- Main App ---
export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: "snake", title: "Snake", component: <SnakeGame /> },
    { id: "2048", title: "2048", component: <Game2048 /> },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Mini Game Hub</h1>
      {!selectedGame ? (
        <div>
          <h3>Pick a game:</h3>
          {games.map((g) => (
            <button key={g.id} onClick={() => setSelectedGame(g)}>
              {g.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedGame(null)}>← Back</button>
          {selectedGame.component}
        </div>
      )}
    </div>
  );
}
