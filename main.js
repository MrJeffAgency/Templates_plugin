(function () {
  const ID = "mrjeffagency.templates";

  const T = {};

  T.html = {
    label: "🌐 HTML5 Website",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{PROJECT_NAME}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="nav">
    <h1 class="logo">{{PROJECT_NAME}}</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="home" class="hero">
    <h2>Welcome to {{PROJECT_NAME}}</h2>
    <p>Build something amazing today.</p>
    <a href="#contact" class="btn">Get Started</a>
  </section>

  <section id="services" class="section">
    <h2>Services</h2>
    <div class="grid">
      <div class="card"><h3>Design</h3><p>Clean, modern design.</p></div>
      <div class="card"><h3>Development</h3><p>Fast and reliable code.</p></div>
      <div class="card"><h3>Support</h3><p>Help whenever you need it.</p></div>
    </div>
  </section>

  <section id="contact" class="section">
    <h2>Contact</h2>
    <form id="contactForm">
      <input type="text" placeholder="Your name" required>
      <input type="email" placeholder="Your email" required>
      <textarea placeholder="Message" rows="4" required></textarea>
      <button class="btn" type="submit">Send</button>
    </form>
  </section>

  <footer>&copy; {{YEAR}} {{AUTHOR}}. All rights reserved.</footer>
  <script src="script.js"></script>
</body>
</html>
`,
      "style.css": `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; line-height: 1.6; color: #222; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; background: #111; color: #fff; flex-wrap: wrap; }
.nav a { color: #fff; margin-left: 14px; text-decoration: none; }
.hero { text-align: center; padding: 90px 20px; background: linear-gradient(135deg, #4f46e5, #06b6d4); color: #fff; }
.hero h2 { font-size: 2rem; margin-bottom: 10px; }
.btn { display: inline-block; margin-top: 16px; padding: 10px 22px; background: #fff; color: #4f46e5; border: 0; border-radius: 8px; font-weight: 600; text-decoration: none; cursor: pointer; }
.section { padding: 50px 20px; max-width: 900px; margin: auto; }
.section h2 { margin-bottom: 18px; text-align: center; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.card { padding: 20px; border-radius: 12px; background: #f3f4f6; }
form { display: grid; gap: 12px; }
input, textarea { padding: 10px; border: 1px solid #ccc; border-radius: 8px; font: inherit; }
form .btn { background: #4f46e5; color: #fff; }
footer { text-align: center; padding: 20px; background: #111; color: #aaa; }
`,
      "script.js": `document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message was received.");
  e.target.reset();
});
`,
      "assets/.gitkeep": ""
    }
  };

  T.php = {
    label: "🐘 PHP",
    files: {
      "index.php": `<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= e(APP_NAME) ?></title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <main>
    <h1>Welcome to <?= e(APP_NAME) ?></h1>
    <p>Today is <?= date('l, F j, Y') ?>.</p>
  </main>
  <footer>&copy; <?= date('Y') ?> <?= e(APP_AUTHOR) ?></footer>
</body>
</html>
`,
      "config.php": `<?php
define('APP_NAME', '{{PROJECT_NAME}}');
define('APP_AUTHOR', '{{AUTHOR}}');
define('APP_DEBUG', true);

if (APP_DEBUG) {
    ini_set('display_errors', '1');
    error_reporting(E_ALL);
}
`,
      "includes/functions.php": `<?php
/** Escape output for HTML. */
function e($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}

/** Redirect to a URL and stop. */
function redirect($url) {
    header('Location: ' . $url);
    exit;
}

/** Read a POST value safely. */
function post($key, $default = '') {
    return isset($_POST[$key]) ? trim($_POST[$key]) : $default;
}
`,
      "assets/style.css": `body { font-family: system-ui, sans-serif; margin: 0; background: #f9fafb; color: #222; }
main { max-width: 700px; margin: 60px auto; padding: 0 20px; }
footer { text-align: center; padding: 20px; color: #777; }
`
    }
  };

  T.js = {
    label: "🟨 JavaScript",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}}",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT"
}
`,
      "src/index.js": `function main() {
  console.log("Hello from {{PROJECT_NAME}}!");
}

main();
`
    }
  };

  T.python = {
    label: "🐍 Python",
    files: {
      "src/main.py": `def main():
    print("Hello from {{PROJECT_NAME}}!")


if __name__ == "__main__":
    main()
`,
      "requirements.txt": `# Add your dependencies here, one per line
`
    }
  };

  T.c = {
    label: "🇨 C",
    files: {
      "src/main.c": `#include <stdio.h>

int main(void) {
    printf("Hello from {{PROJECT_NAME}}!\\n");
    return 0;
}
`,
      "include/.gitkeep": ""
    }
  };

  T.cpp = {
    label: "🇨 C++",
    files: {
      "src/main.cpp": `#include <iostream>

int main() {
    std::cout << "Hello from {{PROJECT_NAME}}!" << std::endl;
    return 0;
}
`,
      "include/.gitkeep": ""
    }
  };

  T.java = {
    label: "☕ Java",
    files: {
      "src/Main.java": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from {{PROJECT_NAME}}!");
    }
}
`
    }
  };

  T.react = {
    label: "⚛️ React + Vite",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{PROJECT_NAME}}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "author": "{{AUTHOR}}",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}
`,
      "vite.config.js": `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`,
      "src/main.jsx": `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
      "src/App.jsx": `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>{{PROJECT_NAME}}</h1>
      <p>By {{AUTHOR}} &copy; {{YEAR}}</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
`,
      "src/style.css": `body { margin: 0; font-family: system-ui, sans-serif; background: #0f172a; color: #fff; }
.app { text-align: center; padding: 60px 20px; }
button { margin-top: 16px; padding: 10px 22px; border: 0; border-radius: 8px; background: #38bdf8; color: #0f172a; font-weight: 600; cursor: pointer; }
`
    }
  };

  const ENV_LOADER = `const fs = require("fs");
try {
  fs.readFileSync(".env", "utf8").split("\\n").forEach((line) => {
    const t = line.trim();
    const i = t.indexOf("=");
    if (!t || t.startsWith("#") || i < 1) return;
    process.env[t.slice(0, i).trim()] = t.slice(i + 1).trim();
  });
} catch (e) {}
`;

  T.tgbot = {
    label: "🤖 Telegram Bot (Friendly)",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - a friendly Telegram bot",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT",
  "dependencies": {
    "node-telegram-bot-api": "^0.66.0"
  }
}
`,
      ".env.example": `BOT_TOKEN=put_your_token_from_BotFather_here
`,
      ".gitignore": `node_modules
.env
`,
      "bot.js": ENV_LOADER + `const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("Missing BOT_TOKEN. Copy .env.example to .env and add your token.");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I would tell you a UDP joke, but you might not get it.",
  "There are 10 kinds of people: those who understand binary and those who don't.",
  "A SQL query walks into a bar, walks up to two tables and asks: can I join you?"
];

const facts = [
  "Honey never spoils. Edible honey has been found in ancient tombs.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries are not.",
  "A day on Venus is longer than a year on Venus."
];

const pick = (list) => list[Math.floor(Math.random() * list.length)];

const menu = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "😂 Joke", callback_data: "joke" }, { text: "🧠 Fun fact", callback_data: "fact" }],
      [{ text: "🕒 Time", callback_data: "time" }, { text: "ℹ️ About", callback_data: "about" }]
    ]
  }
};

bot.setMyCommands([
  { command: "start", description: "Say hello" },
  { command: "help", description: "Show what I can do" },
  { command: "joke", description: "Tell me a joke" },
  { command: "fact", description: "Random fun fact" },
  { command: "time", description: "Current server time" },
  { command: "about", description: "About this bot" }
]);

function answer(kind, name) {
  switch (kind) {
    case "start":
      return "Hi " + name + "! 👋 I'm {{PROJECT_NAME}}. Nice to meet you! Tap a button or type /help.";
    case "help":
      return "Here is what I can do:\\n/joke - a joke\\n/fact - a fun fact\\n/time - the time\\n/about - about me\\n\\nOr just say hi!";
    case "joke":
      return pick(jokes);
    case "fact":
      return pick(facts);
    case "time":
      return "🕒 " + new Date().toUTCString();
    case "about":
      return "I'm {{PROJECT_NAME}}, made by {{AUTHOR}} in {{YEAR}}. 💙";
    default:
      return null;
  }
}

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const name = (msg.from && msg.from.first_name) || "friend";

  if (msg.new_chat_members) {
    msg.new_chat_members.forEach((u) => {
      bot.sendMessage(chatId, "Welcome, " + u.first_name + "! 🎉");
    });
    return;
  }

  const text = (msg.text || "").trim();
  if (!text) return;

  if (text.startsWith("/")) {
    const cmd = text.split(" ")[0].split("@")[0].slice(1).toLowerCase();
    const reply = answer(cmd, name);
    if (reply) bot.sendMessage(chatId, reply, menu);
    else bot.sendMessage(chatId, "I don't know that command. Try /help 🙂");
    return;
  }

  const lower = text.toLowerCase();
  if (["hi", "hello", "hey", "yo"].some((w) => lower === w || lower.startsWith(w + " "))) {
    bot.sendMessage(chatId, "Hey " + name + "! 😊 How can I help?", menu);
  } else if (lower.includes("thank")) {
    bot.sendMessage(chatId, "You're welcome! 🤗");
  } else if (lower.includes("bye")) {
    bot.sendMessage(chatId, "Bye " + name + "! See you soon 👋");
  } else {
    bot.sendMessage(chatId, "You said: " + text + "\\n\\nTry /help to see what I can do.", menu);
  }
});

bot.on("callback_query", (q) => {
  const name = (q.from && q.from.first_name) || "friend";
  bot.answerCallbackQuery(q.id);
  const reply = answer(q.data, name);
  if (reply) bot.sendMessage(q.message.chat.id, reply, menu);
});

bot.on("polling_error", (err) => console.error("Polling error:", err.message));

console.log("{{PROJECT_NAME}} is running...");
`
    }
  };

  T.moviebot = {
    label: "🎬 Telegram Movie Bot",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - a Telegram movie bot powered by TMDB",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT",
  "dependencies": {
    "node-telegram-bot-api": "^0.66.0"
  }
}
`,
      ".env.example": `BOT_TOKEN=put_your_token_from_BotFather_here
TMDB_API_KEY=put_your_tmdb_api_key_here
`,
      ".gitignore": `node_modules
.env
`,
      "bot.js": ENV_LOADER + `const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const TMDB_KEY = process.env.TMDB_API_KEY;
if (!token || !TMDB_KEY) {
  console.error("Missing BOT_TOKEN or TMDB_API_KEY. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });
const API = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

async function tmdb(path, params) {
  const url = new URL(API + path);
  url.searchParams.set("api_key", TMDB_KEY);
  Object.entries(params || {}).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url);
  if (!res.ok) throw new Error("TMDB error " + res.status);
  return res.json();
}

const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function listKeyboard(movies) {
  return {
    reply_markup: {
      inline_keyboard: movies.slice(0, 8).map((m) => [{
        text: m.title + (m.release_date ? " (" + m.release_date.slice(0, 4) + ")" : ""),
        callback_data: "m:" + m.id
      }])
    }
  };
}

async function sendList(chatId, title, movies) {
  if (!movies.length) return bot.sendMessage(chatId, "No movies found 😕");
  return bot.sendMessage(chatId, title, listKeyboard(movies));
}

async function sendMovie(chatId, id) {
  const m = await tmdb("/movie/" + id, { append_to_response: "videos" });
  const year = m.release_date ? m.release_date.slice(0, 4) : "N/A";
  const genres = (m.genres || []).map((g) => g.name).join(", ") || "N/A";
  const overview = (m.overview || "No description.").slice(0, 650);
  const caption =
    "🎬 <b>" + esc(m.title) + "</b> (" + year + ")\\n" +
    "⭐ " + (m.vote_average ? m.vote_average.toFixed(1) : "N/A") + "/10" +
    (m.runtime ? "  ·  ⏱ " + m.runtime + " min" : "") + "\\n" +
    "🎭 " + esc(genres) + "\\n\\n" + esc(overview);

  const trailer = ((m.videos && m.videos.results) || []).find((v) => v.site === "YouTube" && v.type === "Trailer");
  const opts = { parse_mode: "HTML" };
  if (trailer) {
    opts.reply_markup = { inline_keyboard: [[{ text: "▶️ Trailer", url: "https://www.youtube.com/watch?v=" + trailer.key }]] };
  }

  if (m.poster_path) return bot.sendPhoto(chatId, IMG + m.poster_path, Object.assign({ caption: caption }, opts));
  return bot.sendMessage(chatId, caption, opts);
}

bot.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "How to use" },
  { command: "search", description: "Search a movie: /search inception" },
  { command: "trending", description: "Trending this week" },
  { command: "popular", description: "Popular movies" },
  { command: "toprated", description: "Top rated movies" },
  { command: "random", description: "Random movie suggestion" }
]);

const HELP =
  "🍿 <b>{{PROJECT_NAME}}</b>\\n\\n" +
  "/search &lt;title&gt; - find a movie\\n" +
  "/trending - trending this week\\n" +
  "/popular - popular right now\\n" +
  "/toprated - all-time top rated\\n" +
  "/random - surprise me\\n\\n" +
  "Or just type a movie name!";

async function handle(chatId, cmd, arg) {
  switch (cmd) {
    case "start":
    case "help":
      return bot.sendMessage(chatId, HELP, { parse_mode: "HTML" });
    case "search": {
      if (!arg) return bot.sendMessage(chatId, "Type a title, e.g. /search inception");
      const data = await tmdb("/search/movie", { query: arg });
      return sendList(chatId, "Results for: " + arg, data.results);
    }
    case "trending": {
      const data = await tmdb("/trending/movie/week");
      return sendList(chatId, "🔥 Trending this week", data.results);
    }
    case "popular": {
      const data = await tmdb("/movie/popular");
      return sendList(chatId, "🍿 Popular now", data.results);
    }
    case "toprated": {
      const data = await tmdb("/movie/top_rated");
      return sendList(chatId, "🏆 Top rated", data.results);
    }
    case "random": {
      const page = 1 + Math.floor(Math.random() * 10);
      const data = await tmdb("/movie/popular", { page: page });
      const m = data.results[Math.floor(Math.random() * data.results.length)];
      return sendMovie(chatId, m.id);
    }
    default:
      return bot.sendMessage(chatId, "Unknown command. Try /help");
  }
}

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = (msg.text || "").trim();
  if (!text) return;
  try {
    if (text.startsWith("/")) {
      const parts = text.split(" ");
      const cmd = parts[0].split("@")[0].slice(1).toLowerCase();
      await handle(chatId, cmd, parts.slice(1).join(" ").trim());
    } else {
      await handle(chatId, "search", text);
    }
  } catch (err) {
    console.error(err.message);
    bot.sendMessage(chatId, "Something went wrong. Please try again later.");
  }
});

bot.on("callback_query", async (q) => {
  bot.answerCallbackQuery(q.id);
  if (!q.data || !q.data.startsWith("m:")) return;
  try {
    await sendMovie(q.message.chat.id, q.data.slice(2));
  } catch (err) {
    console.error(err.message);
    bot.sendMessage(q.message.chat.id, "Could not load that movie.");
  }
});

bot.on("polling_error", (err) => console.error("Polling error:", err.message));

console.log("{{PROJECT_NAME}} is running...");
`
    }
  };

  T.aisite = {
    label: "🧠 AI Website (Gemini Chat)",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - an AI chat website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT"
}
`,
      ".env.example": `GEMINI_API_KEY=put_your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
PORT=3000
`,
      ".gitignore": `node_modules
.env
`,
      "server.js": ENV_LOADER + `const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 3000;
const KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const PUBLIC = path.join(__dirname, "public");

if (!KEY) {
  console.error("Missing GEMINI_API_KEY. Copy .env.example to .env and add your key.");
  process.exit(1);
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "application/json" });
  res.end(typeof body === "string" ? body : JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => {
      data += c;
      if (data.length > 1000000) { reject(new Error("Too large")); req.destroy(); }
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

async function chat(messages) {
  const contents = messages.slice(-20).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content || "").slice(0, 8000) }]
  }));
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + MODEL + ":generateContent";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: "You are the friendly assistant of {{PROJECT_NAME}}. Be helpful and concise." }] },
      contents: contents
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error((data.error && data.error.message) || "AI request failed");
  const parts = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
  return (parts || []).map((p) => p.text || "").join("") || "(no answer)";
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "POST" && req.url === "/api/chat") {
      const body = JSON.parse(await readBody(req));
      if (!Array.isArray(body.messages) || !body.messages.length) {
        return send(res, 400, { error: "messages required" });
      }
      const reply = await chat(body.messages);
      return send(res, 200, { reply: reply });
    }

    if (req.method !== "GET") return send(res, 405, { error: "Method not allowed" });

    let file = req.url.split("?")[0];
    if (file === "/") file = "/index.html";
    const full = path.normalize(path.join(PUBLIC, file));
    if (!full.startsWith(PUBLIC)) return send(res, 403, "Forbidden", "text/plain");

    fs.readFile(full, (err, content) => {
      if (err) return send(res, 404, "Not found", "text/plain");
      send(res, 200, content, TYPES[path.extname(full)] || "application/octet-stream");
    });
  } catch (err) {
    console.error(err.message);
    send(res, 500, { error: err.message });
  }
});

server.listen(PORT, () => console.log("{{PROJECT_NAME}} running at http://localhost:" + PORT));
`,
      "public/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{PROJECT_NAME}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app">
    <header>
      <h1>{{PROJECT_NAME}}</h1>
      <button id="clear" title="New chat">New chat</button>
    </header>
    <main id="messages">
      <div class="msg bot">Hi! I'm the {{PROJECT_NAME}} assistant. Ask me anything.</div>
    </main>
    <div class="composer">
      <textarea id="input" rows="1" placeholder="Type a message..."></textarea>
      <button id="send">Send</button>
    </div>
    <footer>&copy; {{YEAR}} {{AUTHOR}}</footer>
  </div>
  <script src="script.js"></script>
</body>
</html>
`,
      "public/style.css": `* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body { font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; }
.app { display: flex; flex-direction: column; height: 100%; max-width: 760px; margin: auto; }
header { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; border-bottom: 1px solid #1e293b; }
header h1 { font-size: 1.1rem; }
header button { background: #1e293b; color: #e2e8f0; border: 0; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
main { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
.msg { max-width: 85%; padding: 10px 14px; border-radius: 14px; white-space: pre-wrap; word-wrap: break-word; line-height: 1.5; }
.msg.user { align-self: flex-end; background: #4f46e5; color: #fff; }
.msg.bot { align-self: flex-start; background: #1e293b; }
.msg.error { background: #7f1d1d; }
.composer { display: flex; gap: 8px; padding: 12px 16px; border-top: 1px solid #1e293b; }
textarea { flex: 1; resize: none; padding: 10px; border-radius: 10px; border: 1px solid #334155; background: #0b1220; color: #e2e8f0; font: inherit; max-height: 120px; }
#send { background: #06b6d4; color: #0f172a; font-weight: 600; border: 0; padding: 0 18px; border-radius: 10px; cursor: pointer; }
#send:disabled { opacity: .5; }
footer { text-align: center; font-size: .75rem; color: #64748b; padding: 6px; }
`,
      "public/script.js": `var messagesEl = document.getElementById("messages");
var inputEl = document.getElementById("input");
var sendBtn = document.getElementById("send");
var history = [];

function addMessage(text, cls) {
  var div = document.createElement("div");
  div.className = "msg " + cls;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

async function send() {
  var text = inputEl.value.trim();
  if (!text) return;
  inputEl.value = "";
  addMessage(text, "user");
  history.push({ role: "user", content: text });
  sendBtn.disabled = true;
  var typing = addMessage("Thinking...", "bot");

  try {
    var res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");
    typing.textContent = data.reply;
    history.push({ role: "assistant", content: data.reply });
  } catch (err) {
    typing.className = "msg error";
    typing.textContent = "Error: " + err.message;
    history.pop();
  }
  sendBtn.disabled = false;
  inputEl.focus();
}

sendBtn.addEventListener("click", send);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
});
document.getElementById("clear").addEventListener("click", function () {
  history = [];
  messagesEl.innerHTML = "";
  addMessage("New chat started. How can I help?", "bot");
});
`
    }
  };

  const RUN = {
    html: "Open index.html in a browser (or use a preview plugin).",
    php: "Run: php -S localhost:8000",
    js: "Run: npm start",
    python: "Run: python src/main.py",
    c: "Compile: gcc src/main.c -Iinclude -o app && ./app",
    cpp: "Compile: g++ src/main.cpp -Iinclude -o app && ./app",
    java: "Compile: javac src/Main.java && java -cp src Main",
    tgbot: "1. Copy `.env.example` to `.env` and add your `BOT_TOKEN` from @BotFather.\n2. Run: npm install\n3. Run: npm start",
    moviebot: "1. Copy `.env.example` to `.env`, add `BOT_TOKEN` (@BotFather) and `TMDB_API_KEY` (themoviedb.org).\n2. Run: npm install\n3. Run: npm start (Node 18+ required)",
    aisite: "1. Copy `.env.example` to `.env` and add your `GEMINI_API_KEY`.\n2. Run: npm start (Node 18+ required)\n3. Open http://localhost:3000",
    react: "Run: npm install, then npm run dev (build with npm run build)."
  };

  function readme(key) {
    return `# {{PROJECT_NAME}}

Author: {{AUTHOR}}
Year: {{YEAR}}

Generated with the Templates plugin for Acode.

## Getting started

${RUN[key]}

## License

MIT
`;
  }

  function slugify(s) {
    return String(s).toLowerCase().trim()
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "project";
  }

  function fill(text, vars) {
    return text.replace(/\{\{(PROJECT_NAME_SLUG|PROJECT_NAME|AUTHOR|YEAR)\}\}/g, (_, k) => vars[k]);
  }

  async function generate(key, name, author, destUrl) {
    const fs = acode.require("fs");
    const vars = {
      PROJECT_NAME: name,
      PROJECT_NAME_SLUG: slugify(name),
      AUTHOR: author || "Unknown",
      YEAR: String(new Date().getFullYear())
    };

    const files = Object.assign({}, T[key].files, { "README.md": readme(key) });
    const dirs = { "": null };
    const root = await fs(destUrl).createDirectory(vars.PROJECT_NAME_SLUG);
    dirs[""] = root;

    async function ensureDir(path) {
      if (dirs[path] !== undefined) return dirs[path];
      const i = path.lastIndexOf("/");
      const parent = await ensureDir(i === -1 ? "" : path.slice(0, i));
      const folderName = i === -1 ? path : path.slice(i + 1);
      const url = await fs(parent).createDirectory(folderName);
      dirs[path] = url;
      return url;
    }

    for (const path of Object.keys(files)) {
      const i = path.lastIndexOf("/");
      const dirPath = i === -1 ? "" : path.slice(0, i);
      const fileName = i === -1 ? path : path.slice(i + 1);
      const parent = await ensureDir(dirPath);
      await fs(parent).createFile(fileName, fill(files[path], vars));
    }
    return vars.PROJECT_NAME_SLUG;
  }

  async function run(preKey) {
    const select = acode.require("select");
    const prompt = acode.require("prompt");
    const fileBrowser = acode.require("fileBrowser");

    try {
      const key = preKey || await select("Select a template", Object.keys(T).map(k => [k, T[k].label]));
      if (!key) return;

      const name = await prompt("Project name", "My Awesome App", "text", { required: true });
      if (!name || !name.trim()) return;

      let saved = "";
      try { saved = localStorage.getItem(ID + ".author") || ""; } catch (e) {}
      const author = await prompt("Author name", saved, "text");
      if (author === null || author === undefined) return;
      try { localStorage.setItem(ID + ".author", author); } catch (e) {}

      const dest = await fileBrowser("folder", "Select destination folder");
      if (!dest || !dest.url) return;

      window.toast("Generating project...", 2000);
      const slug = await generate(key, name.trim(), author.trim(), dest.url);
      window.toast("Created " + slug, 3500);
    } catch (err) {
      acode.alert("Templates", "Failed: " + (err && err.message ? err.message : err));
    }
  }

  const command = {
    name: "templates",
    description: "Templates",
    exec: run
  };

  function addCmd() {
    try {
      const cmds = acode.require("commands");
      if (cmds && cmds.addCommand) { cmds.addCommand(command); return; }
    } catch (e) {}
    try { editorManager.editor.commands.addCommand(command); } catch (e) {}
  }

  function removeCmd() {
    try {
      const cmds = acode.require("commands");
      if (cmds && cmds.removeCommand) { cmds.removeCommand("templates"); return; }
    } catch (e) {}
    try { editorManager.editor.commands.removeCommand("templates"); } catch (e) {}
  }

  const SVG = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M5 3h14a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2zm-2 7h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9zm4 2v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>'
  );

  let styleEl = null;
  function addStyle() {
    styleEl = document.createElement("style");
    styleEl.id = "templates-plugin-style";
    styleEl.textContent =
      ".icon.templates-icon{background-color:currentColor;-webkit-mask:url(\"" + SVG + "\") center/60% no-repeat;mask:url(\"" + SVG + "\") center/60% no-repeat;}" +
      ".icon.templates-icon::before{content:none!important;}" +
      ".templates-panel{padding:8px;display:flex;flex-direction:column;gap:8px;}" +
      ".templates-panel .t-title{font-weight:600;padding:6px 4px;opacity:.8;}" +
      ".templates-panel button{text-align:left;padding:12px;border:0;border-radius:10px;background:var(--secondary-color);color:var(--secondary-text-color);font-size:15px;}";
    document.head.appendChild(styleEl);
  }

  function addSidebar() {
    try {
      const sideBarApps = acode.require("sidebarApps");
      if (!sideBarApps || !sideBarApps.add) return;
      sideBarApps.add("templates-icon", ID, "Templates", function (container) {
        const panel = document.createElement("div");
        panel.className = "templates-panel";
        const title = document.createElement("div");
        title.className = "t-title";
        title.textContent = "Create a new project";
        panel.appendChild(title);
        Object.keys(T).forEach(function (k) {
          const b = document.createElement("button");
          b.textContent = T[k].label;
          b.onclick = function () { run(k); };
          panel.appendChild(b);
        });
        container.appendChild(panel);
      }, false);
    } catch (e) { console.error("Templates sidebar", e); }
  }

  function removeSidebar() {
    try { acode.require("sidebarApps").remove(ID); } catch (e) {}
  }

  if (window.acode) {
    acode.setPluginInit(ID, async () => { addStyle(); addSidebar(); addCmd(); });
    acode.setPluginUnmount(ID, () => {
      removeCmd(); removeSidebar();
      if (styleEl) styleEl.remove();
    });
  }
})();
