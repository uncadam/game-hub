import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Gamepad2, X, Fullscreen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Minimal UI helpers (shadcn-like without imports) ---
const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-gray-600 bg-white/60 border-gray-200">
    {children}
  </span>
);

const Modal = ({ open, onClose, children }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={onClose}
        />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="relative z-10 w-[min(1100px,95vw)] h-[min(750px,90vh)] bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Card = ({ children }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
    {children}
  </div>
);

const Button = ({ children, onClick, className = "", variant = "default", ...props }) => {
  const base = "inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition active:scale-[.98]";
  const styles = {
    default: "bg-gray-900 text-white hover:bg-black",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    outline: "border border-gray-300 hover:bg-gray-50",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

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
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-3 border-b bg-gray-50">
        <div className="font-semibold">Snake</div>
        <div className="flex items-center gap-3">
          <Chip>Score: {score}</Chip>
          <Button variant="outline" onClick={() => { setSnake([[10, 10]]); setDir([0, -1]); setFood(randomFood()); setScore(0); setSpeed(120); setRunning(true); }}>Restart</Button>
          <Button variant="default" onClick={() => setRunning((r) => !r)}>{running ? "Pause" : "Resume"}</Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <div
          className="relative bg-gray-100 rounded-xl border border-gray-200"
          style={{ width: boardPx, height: boardPx }}
        >
          {/* grid dots */}
          <svg width={boardPx} height={boardPx} className="absolute inset-0">
            {[...Array(size + 1)].map((_, i) => (
              <line key={i} x1={i * cellSize} y1={0} x2={i * cellSize} y2={boardPx} stroke="#eee" />
            ))}
            {[...Array(size + 1)].map((_, i) => (
              <line key={`r${i}`} x1={0} y1={i * cellSize} x2={boardPx} y2={i * cellSize} stroke="#eee" />
            ))}
          </svg>
          {/* food */}
          <div
            className="absolute rounded-sm"
            style={{
              left: food[0] * cellSize,
              top: food[1] * cellSize,
              width: cellSize,
              height: cellSize,
              background: "#ef4444",
            }}
          />
          {/* snake */}
          {snake.map(([x, y], i) => (
            <div
              key={`${x}-${y}-${i}`}
              className="absolute rounded-[4px]"
              style={{
                left: x * cellSize + 1,
                top: y * cellSize + 1,
                width: cellSize - 2,
                height: cellSize - 2,
                background: i === 0 ? "#111827" : "#4b5563",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Built-in Game #2: 2048 (compact implementation) ---
function useEventListener(event, handler) {
  useEffect(() => {
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, [event, handler]);
}

function slideAndMerge(row) {
  const filtered = row.filter((n) => n !== 0);
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] === filtered[i + 1]) {
      filtered[i] *= 2;
      filtered[i + 1] = 0;
    }
  }
  return [...filtered.filter((n) => n !== 0), ...Array(4 - filtered.filter((n) => n !== 0).length).fill(0)];
}

function rotateGrid(grid) {
  // rotate clockwise
  const g = grid.map((r) => [...r]);
  const n = g.length;
  const out = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) out[j][n - 1 - i] = g[i][j];
  }
  return out;
}

function addRandom(grid) {
  const empty = [];
  grid.forEach((r, i) => r.forEach((c, j) => { if (c === 0) empty.push([i, j]); }));
  if (!empty.length) return grid;
  const [i, j] = empty[Math.floor(Math.random() * empty.length)];
  grid[i][j] = Math.random() < 0.9 ? 2 : 4;
  return grid;
}

function clone(g) { return g.map((r) => [...r]); }

function Game2048() {
  const [grid, setGrid] = useState(() => addRandom(addRandom(Array.from({ length: 4 }, () => Array(4).fill(0)))));
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem("best2048") || 0));
  const [over, setOver] = useState(false);

  const move = (times) => {
    setGrid((g) => {
      let grid = clone(g);
      // rotate to reuse left-merge logic
      for (let t = 0; t < times; t++) grid = rotateGrid(grid);
      const before = JSON.stringify(grid);
      let gained = 0;
      grid = grid.map((row) => {
        const merged = slideAndMerge(row);
        gained += merged.reduce((a, b) => a + b, 0) - row.reduce((a, b) => a + b, 0);
        return merged;
      });
      // rotate back
      for (let t = 0; t < (4 - times) % 4; t++) grid = rotateGrid(grid);
      if (JSON.stringify(grid) !== before) {
        grid = addRandom(grid);
        const newScore = score + Math.max(gained, 0);
        setScore(newScore);
        if (newScore > best) { setBest(newScore); localStorage.setItem("best2048", String(newScore)); }
      }
      // check game over
      const canMove = () => {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) return true;
            if (i < 3 && grid[i][j] === grid[i + 1][j]) return true;
            if (j < 3 && grid[i][j] === grid[i][j + 1]) return true;
          }
        }
        return false;
      };
      setOver(!canMove());
      return grid;
    });
  };

  useEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (k.includes("arrow") || ["w","a","s","d"].includes(k)) e.preventDefault();
    if (k === "arrowleft" || k === "a") move(0);
    if (k === "arrowup" || k === "w") move(1);
    if (k === "arrowright" || k === "d") move(2);
    if (k === "arrowdown" || k === "s") move(3);
  });

  const reset = () => {
    setScore(0); setOver(false);
    setGrid(addRandom(addRandom(Array.from({ length: 4 }, () => Array(4).fill(0)))));
  };

  const tileClass = (n) => {
    const map = {
      0: "bg-gray-100 text-transparent",
      2: "bg-amber-50 text-amber-900",
      4: "bg-amber-100 text-amber-900",
      8: "bg-orange-200 text-orange-900",
      16: "bg-orange-300 text-orange-900",
      32: "bg-orange-400 text-white",
      64: "bg-orange-500 text-white",
      128: "bg-yellow-400 text-yellow-950",
      256: "bg-yellow-500 text-yellow-950",
      512: "bg-yellow-600 text-white",
      1024: "bg-lime-500 text-white",
      2048: "bg-green-500 text-white",
    };
    return map[n] || "bg-green-600 text-white";
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-3 border-b bg-gray-50">
        <div className="font-semibold">2048</div>
        <div className="flex items-center gap-3">
          <Chip>Score: {score}</Chip>
          <Chip>Best: {best}</Chip>
          <Button variant="outline" onClick={reset}>Restart</Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="grid grid-cols-4 gap-2 p-3 bg-gray-200 rounded-2xl shadow-inner select-none">
          {grid.map((row, i) => row.map((n, j) => (
            <div key={`${i}-${j}`} className={`w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold ${tileClass(n)} transition`}>{n || ""}</div>
          )))}
        </div>
      </div>
      {over && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 shadow-2xl text-center space-y-3">
            <div className="text-xl font-semibold">Game Over</div>
            <div className="text-gray-600">Your score: {score}</div>
            <Button onClick={reset}>Play again</Button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Config for games ---
const BUILTIN = {
  snake: { component: SnakeGame, tags: ["Arcade", "Classic"] },
  g2048: { component: Game2048, tags: ["Puzzle", "Numbers"] },
};

const EXTERNAL_GAMES = [
  // Replace sample embeds with games you have permission to embed.
  {
    id: "scratch-platformer",
    title: "Scratch Platformer (sample)",
    source: "Scratch",
    tags: ["Platformer", "Community"],
    type: "embed",
    // Many Scratch projects can be embedded like this (replace project ID)
    embedUrl: "https://scratch.mit.edu/projects/569985346/embed",
  },
  {
    id: "itch-sample",
    title: "Itch.io HTML5 (sample)",
    source: "Itch.io",
    tags: ["Action", "Indie"],
    type: "embed",
    // Replace with a creator who allows embedding
    embedUrl: "https://itch.io/embed-upload/1234567?color=333333",
  },
];

const ALL_GAMES = [
  { id: "snake", title: "Snake", type: "builtin", tags: BUILTIN.snake.tags },
  { id: "g2048", title: "2048", type: "builtin", tags: BUILTIN.g2048.tags },
  ...EXTERNAL_GAMES,
];

function GameModal({ game, onClose }) {
  const isBuiltin = game?.type === "builtin";
  const BuiltinComponent = isBuiltin ? BUILTIN[game.id === "g2048" ? "g2048" : game.id]?.component : null;
  return (
    <Modal open={!!game} onClose={onClose}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Gamepad2 className="w-5 h-5" /> {game?.title}
          </div>
          <div className="flex items-center gap-2">
            {!isBuiltin && (
              <a href={game.embedUrl} target="_blank" rel="noreferrer" className="text-sm underline text-gray-600 flex items-center gap-1">
                Open original <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Button variant="ghost" onClick={onClose}><X className="w-5 h-5" /></Button>
          </div>
        </div>
        <div className="flex-1 bg-white">
          {isBuiltin ? (
            <BuiltinComponent />
          ) : (
            <iframe title={game.title} src={game.embedUrl} className="w-full h-full" allow="fullscreen; gamepad; xr-spatial-tracking; accelerometer; magnetometer; gyroscope" />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default function GameHub() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return ALL_GAMES;
    return ALL_GAMES.filter((g) =>
      g.title.toLowerCase().includes(term) || g.tags?.some((t) => t.toLowerCase().includes(term))
    );
  }, [q]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center shadow">🎮</div>
            GameHub
          </div>
          <div className="ml-auto relative w-[min(520px,100%)]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Search className="w-4 h-4" /></div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Search games (e.g., Snake, Puzzle, Platformer)"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="rounded-3xl bg-black text-white p-8 md:p-10 shadow-xl">
          <div className="text-2xl md:text-3xl font-bold">Play free browser games</div>
          <p className="mt-2 text-white/80 max-w-2xl">A clean, ad-free starter site inspired by CrazyGames. Add your own games (or embeds you have permission to use), organize by tags, and share with friends.</p>
          <div className="mt-4 flex items-center gap-3">
            <Button onClick={() => setOpen({ id: "snake", title: "Snake", type: "builtin" })}>Quick Play: Snake</Button>
            <Button variant="outline" onClick={() => setOpen({ id: "g2048", title: "2048", type: "builtin" })}>Play 2048</Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((g) => (
            <Card key={g.id}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-5xl">{g.type === "builtin" ? "🕹️" : "🌐"}</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="font-semibold flex items-center gap-2">
                  {g.title}
                  <Chip>{g.type === "builtin" ? "Built-in" : g.source}</Chip>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(g.tags || []).map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => setOpen(g)} className="flex-1">Play</Button>
                  {g.type !== "builtin" && (
                    <a href={g.embedUrl} target="_blank" rel="noreferrer" className="flex-0">
                      <Button variant="outline" title="Open original"><ExternalLink className="w-4 h-4" /></Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 pb-12 text-sm text-gray-500">
        <div className="rounded-2xl border bg-white p-5">
          <div className="font-semibold text-gray-700">Add more games</div>
          <p className="mt-1">You can add built-in games (coded here) or embedded games that the creators allow you to embed. To add an embed, push a new object into <code>EXTERNAL_GAMES</code> with a title, tags, and <code>embedUrl</code>. For built-ins, add a component and register it in <code>BUILTIN</code> + <code>ALL_GAMES</code>.</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Respect licenses and creators’ permissions when embedding.</li>
            <li>To host fully yourself (like CrazyGames), deploy this to GitHub Pages or Netlify.</li>
            <li>You can organize by categories using the <em>tags</em> array, and the search bar filters by title or tag.</li>
          </ul>
        </div>
      </footer>

      <GameModal game={open} onClose={() => setOpen(null)} />
    </div>
  );
}
