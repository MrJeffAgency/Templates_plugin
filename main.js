(function () {
  const ID = "mrjeffagency.templates";

  const T = {};

  T.html = {
    name: "HTML5 Website",
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
    name: "PHP",
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
    name: "JavaScript",
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
    name: "Python",
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
    name: "C",
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
    name: "C++",
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
    name: "Java",
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
    name: "React + Vite",
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
    name: "Telegram Bot (Friendly)",
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
    name: "Telegram Movie Bot",
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
    name: "AI Website (Gemini Chat)",
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

  T.express = {
    name: "Express REST API",
    label: "🚂 Express REST API",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - REST API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT",
  "dependencies": {
    "express": "^4.19.2"
  }
}
`,
      ".env.example": `PORT=3000
`,
      ".gitignore": `node_modules
.env
`,
      "server.js": ENV_LOADER + `const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let nextId = 3;
const items = [
  { id: 1, name: "First item" },
  { id: 2, name: "Second item" }
];

app.get("/", (req, res) => {
  res.json({ name: "{{PROJECT_NAME}}", status: "ok" });
});

app.get("/api/items", (req, res) => res.json(items));

app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

app.post("/api/items", (req, res) => {
  const name = req.body && req.body.name;
  if (!name) return res.status(400).json({ error: "name is required" });
  const item = { id: nextId++, name: String(name) };
  items.push(item);
  res.status(201).json(item);
});

app.put("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  if (req.body && req.body.name) item.name = String(req.body.name);
  res.json(item);
});

app.delete("/api/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Not found" });
  items.splice(index, 1);
  res.status(204).end();
});

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

app.listen(PORT, () => console.log("{{PROJECT_NAME}} API running on port " + PORT));
`
    }
  };

  T.flask = {
    name: "Flask API",
    label: "🌶️ Flask API (Python)",
    files: {
      "app.py": `from flask import Flask, jsonify, request

app = Flask(__name__)

items = [
    {"id": 1, "name": "First item"},
    {"id": 2, "name": "Second item"},
]


@app.get("/")
def index():
    return jsonify(name="{{PROJECT_NAME}}", status="ok")


@app.get("/api/items")
def list_items():
    return jsonify(items)


@app.post("/api/items")
def create_item():
    data = request.get_json(silent=True) or {}
    name = data.get("name")
    if not name:
        return jsonify(error="name is required"), 400
    item = {"id": max([i["id"] for i in items], default=0) + 1, "name": str(name)}
    items.append(item)
    return jsonify(item), 201


@app.delete("/api/items/<int:item_id>")
def delete_item(item_id):
    for item in items:
        if item["id"] == item_id:
            items.remove(item)
            return "", 204
    return jsonify(error="Not found"), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
`,
      "requirements.txt": `Flask>=3.0
`,
      ".gitignore": `__pycache__/
.venv/
.env
`
    }
  };

  T.discord = {
    name: "Discord Bot",
    label: "👾 Discord Bot",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - Discord bot",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js"
  },
  "author": "{{AUTHOR}}",
  "license": "MIT",
  "dependencies": {
    "discord.js": "^14.16.0"
  }
}
`,
      ".env.example": `DISCORD_TOKEN=put_your_bot_token_here
`,
      ".gitignore": `node_modules
.env
`,
      "bot.js": ENV_LOADER + `const { Client, GatewayIntentBits } = require("discord.js");

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error("Missing DISCORD_TOKEN. Copy .env.example to .env and add your token.");
  process.exit(1);
}

const PREFIX = "!";

// Enable "Message Content Intent" for your bot in the Discord Developer Portal.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("{{PROJECT_NAME}} is online as " + client.user.tag);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") {
    await message.reply("Pong! 🏓");
  } else if (cmd === "hello") {
    await message.reply("Hello " + message.author.username + "! 👋");
  } else if (cmd === "say") {
    const text = args.join(" ");
    if (text) await message.channel.send(text);
  } else if (cmd === "help") {
    await message.reply("Commands: !ping, !hello, !say <text>, !help");
  }
});

client.login(token);
`
    }
  };

  T.pytgbot = {
    name: "Telegram Bot (Python)",
    label: "🐍 Telegram Bot (Python)",
    files: {
      "bot.py": `import os

from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    name = update.effective_user.first_name
    await update.message.reply_text("Hi " + name + "! I'm {{PROJECT_NAME}}. Try /help")


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("/start - say hello\\n/help - this message\\n\\nSend any text and I will echo it.")


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("You said: " + update.message.text)


def main():
    if not TOKEN:
        raise SystemExit("Missing BOT_TOKEN. Copy .env.example to .env and add your token.")
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))
    print("{{PROJECT_NAME}} is running...")
    app.run_polling()


if __name__ == "__main__":
    main()
`,
      "requirements.txt": `python-telegram-bot>=21.0
python-dotenv>=1.0
`,
      ".env.example": `BOT_TOKEN=put_your_token_from_BotFather_here
`,
      ".gitignore": `__pycache__/
.venv/
.env
`
    }
  };

  T.portfolio = {
    name: "Portfolio Website",
    label: "💼 Portfolio Website",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{PROJECT_NAME}} - portfolio of {{AUTHOR}}">
  <title>{{AUTHOR}} | {{PROJECT_NAME}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="top">
    <a class="brand" href="#home">{{AUTHOR}}</a>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button id="theme" aria-label="Toggle theme">🌓</button>
    </nav>
  </header>

  <section id="home" class="hero">
    <p class="hello">Hi, I'm</p>
    <h1>{{AUTHOR}}</h1>
    <p class="tag">Developer & creator. Welcome to {{PROJECT_NAME}}.</p>
    <a class="btn" href="#contact">Hire me</a>
  </section>

  <section id="about" class="section">
    <h2>About</h2>
    <p>Write a short introduction about yourself, your skills and what you love to build.</p>
    <ul class="skills">
      <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Node.js</li><li>Python</li>
    </ul>
  </section>

  <section id="projects" class="section">
    <h2>Projects</h2>
    <div class="grid">
      <article class="card"><h3>Project One</h3><p>Short description of your first project.</p><a href="#">View</a></article>
      <article class="card"><h3>Project Two</h3><p>Short description of your second project.</p><a href="#">View</a></article>
      <article class="card"><h3>Project Three</h3><p>Short description of your third project.</p><a href="#">View</a></article>
    </div>
  </section>

  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
  </section>

  <footer>&copy; {{YEAR}} {{AUTHOR}}</footer>
  <script src="script.js"></script>
</body>
</html>
`,
      "style.css": `:root { --bg: #ffffff; --text: #1f2937; --card: #f3f4f6; --accent: #4f46e5; }
:root[data-theme="dark"] { --bg: #0f172a; --text: #e2e8f0; --card: #1e293b; --accent: #38bdf8; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
a { color: var(--accent); }
.top { position: sticky; top: 0; display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; background: var(--bg); border-bottom: 1px solid var(--card); }
.brand { font-weight: 700; text-decoration: none; }
nav a { margin-right: 14px; text-decoration: none; }
#theme { background: none; border: 0; font-size: 1.1rem; cursor: pointer; }
.hero { text-align: center; padding: 100px 20px; }
.hero h1 { font-size: 2.6rem; }
.hero .tag { margin: 10px 0 20px; opacity: .8; }
.btn { display: inline-block; padding: 10px 22px; background: var(--accent); color: #fff; border-radius: 8px; text-decoration: none; }
.section { max-width: 900px; margin: auto; padding: 50px 20px; }
.section h2 { margin-bottom: 14px; }
.skills { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin-top: 14px; }
.skills li { background: var(--card); padding: 6px 12px; border-radius: 999px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
.card { background: var(--card); padding: 18px; border-radius: 12px; }
footer { text-align: center; padding: 24px; opacity: .6; }
`,
      "script.js": `var root = document.documentElement;
var saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);

document.getElementById("theme").addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
`,
      "assets/.gitkeep": ""
    }
  };

  T.pwa = {
    name: "PWA (Installable App)",
    label: "📲 PWA (Installable App)",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#4f46e5">
  <title>{{PROJECT_NAME}}</title>
  <link rel="manifest" href="manifest.json">
  <link rel="icon" href="icons/icon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>{{PROJECT_NAME}}</h1>
    <p>This app works offline and can be installed on your phone.</p>
    <button id="counter">Clicked 0 times</button>
    <button id="install" hidden>Install app</button>
  </main>
  <script src="app.js"></script>
</body>
</html>
`,
      "manifest.json": `{
  "name": "{{PROJECT_NAME}}",
  "short_name": "{{PROJECT_NAME}}",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4f46e5",
  "icons": [
    { "src": "icons/icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" }
  ]
}
`,
      "sw.js": `var CACHE = "{{PROJECT_NAME_SLUG}}-v1";
var ASSETS = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json", "./icons/icon.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  e.respondWith(caches.match(e.request).then(function (hit) { return hit || fetch(e.request); }));
});
`,
      "app.js": `if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

var count = Number(localStorage.getItem("count") || 0);
var btn = document.getElementById("counter");
btn.textContent = "Clicked " + count + " times";
btn.addEventListener("click", function () {
  count++;
  localStorage.setItem("count", count);
  btn.textContent = "Clicked " + count + " times";
});

var deferred = null;
var installBtn = document.getElementById("install");
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferred = e;
  installBtn.hidden = false;
});
installBtn.addEventListener("click", function () {
  if (!deferred) return;
  deferred.prompt();
  deferred = null;
  installBtn.hidden = true;
});
`,
      "style.css": `body { margin: 0; font-family: system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
main { max-width: 480px; margin: 0 auto; padding: 60px 20px; text-align: center; }
button { margin: 8px; padding: 12px 22px; border: 0; border-radius: 10px; background: #4f46e5; color: #fff; font-size: 1rem; cursor: pointer; }
`,
      "icons/icon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="96" fill="#4f46e5"/><text x="256" y="330" font-family="Arial,sans-serif" font-size="260" font-weight="700" text-anchor="middle" fill="#fff">P</text></svg>
`
    }
  };

  T.vue = {
    name: "Vue + Vite",
    label: "💚 Vue + Vite",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{PROJECT_NAME}}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
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
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.4.0"
  }
}
`,
      "vite.config.js": `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
`,
      "src/main.js": `import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

createApp(App).mount("#app");
`,
      "src/App.vue": `<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="app">
    <h1>{{PROJECT_NAME}}</h1>
    <p>By {{AUTHOR}} &copy; {{YEAR}}</p>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>
`,
      "src/style.css": `body { margin: 0; font-family: system-ui, sans-serif; background: #0f172a; color: #fff; }
.app { text-align: center; padding: 60px 20px; }
button { margin-top: 16px; padding: 10px 22px; border: 0; border-radius: 8px; background: #42b883; color: #0f172a; font-weight: 600; cursor: pointer; }
`
    }
  };

  T.go = {
    name: "Go",
    label: "🐹 Go (HTTP server)",
    files: {
      "go.mod": `module {{PROJECT_NAME_SLUG}}

go 1.21
`,
      "main.go": `package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello from {{PROJECT_NAME}}!")
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})

	log.Println("Listening on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
`,
      ".gitignore": `*.exe
bin/
`
    }
  };

  T.rust = {
    name: "Rust",
    label: "🦀 Rust",
    files: {
      "Cargo.toml": `[package]
name = "{{PROJECT_NAME_SLUG}}"
version = "0.1.0"
edition = "2021"
authors = ["{{AUTHOR}}"]

[dependencies]
`,
      "src/main.rs": `fn main() {
    println!("Hello from {{PROJECT_NAME}}!");
}
`,
      ".gitignore": `target/
`
    }
  };

  T.next = {
    name: "Next.js",
    label: "▲ Next.js",
    files: {
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "private": true,
  "author": "{{AUTHOR}}",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
`,
      "next.config.js": `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
`,
      ".gitignore": `node_modules
.next
.env
`,
      "app/layout.jsx": `import "./globals.css";

export const metadata = {
  title: "{{PROJECT_NAME}}",
  description: "{{PROJECT_NAME}} by {{AUTHOR}}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`,
      "app/page.jsx": `export default function Home() {
  return (
    <main className="main">
      <h1>{{PROJECT_NAME}}</h1>
      <p>By {{AUTHOR}} &copy; {{YEAR}}</p>
      <p>Edit app/page.jsx and save to see changes.</p>
    </main>
  );
}
`,
      "app/globals.css": `body { margin: 0; font-family: system-ui, sans-serif; background: #000; color: #fff; }
.main { text-align: center; padding: 80px 20px; }
`
    }
  };

  T.tailwind = {
    name: "Tailwind Landing Page",
    label: "🎨 Tailwind Landing Page",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{PROJECT_NAME}}</title>
  <!-- Tailwind via CDN for quick prototyping. Use the Tailwind CLI for production. -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100">
  <header class="flex items-center justify-between px-6 py-4 border-b border-slate-800">
    <span class="text-xl font-bold">{{PROJECT_NAME}}</span>
    <nav class="space-x-4 text-sm">
      <a href="#features" class="hover:text-sky-400">Features</a>
      <a href="#pricing" class="hover:text-sky-400">Pricing</a>
      <a href="#contact" class="hover:text-sky-400">Contact</a>
    </nav>
  </header>

  <section class="text-center px-6 py-24 bg-gradient-to-br from-indigo-600 to-sky-500">
    <h1 class="text-4xl md:text-5xl font-extrabold">Build something people love</h1>
    <p class="mt-4 max-w-xl mx-auto text-lg opacity-90">A clean, responsive landing page for {{PROJECT_NAME}}.</p>
    <a href="#contact" class="inline-block mt-8 px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold">Get started</a>
  </section>

  <section id="features" class="max-w-5xl mx-auto px-6 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">Features</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="p-6 rounded-xl bg-slate-900"><h3 class="font-semibold mb-2">Fast</h3><p class="text-slate-400">Lightweight and quick to load.</p></div>
      <div class="p-6 rounded-xl bg-slate-900"><h3 class="font-semibold mb-2">Responsive</h3><p class="text-slate-400">Looks great on any screen.</p></div>
      <div class="p-6 rounded-xl bg-slate-900"><h3 class="font-semibold mb-2">Easy to edit</h3><p class="text-slate-400">Change the text and ship it.</p></div>
    </div>
  </section>

  <section id="pricing" class="max-w-5xl mx-auto px-6 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">Pricing</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="p-6 rounded-xl border border-slate-800 text-center"><h3 class="font-semibold">Free</h3><p class="text-3xl font-bold my-3">$0</p><p class="text-slate-400">For trying it out</p></div>
      <div class="p-6 rounded-xl border-2 border-sky-500 text-center"><h3 class="font-semibold">Pro</h3><p class="text-3xl font-bold my-3">$9</p><p class="text-slate-400">For individuals</p></div>
      <div class="p-6 rounded-xl border border-slate-800 text-center"><h3 class="font-semibold">Team</h3><p class="text-3xl font-bold my-3">$29</p><p class="text-slate-400">For growing teams</p></div>
    </div>
  </section>

  <section id="contact" class="max-w-md mx-auto px-6 py-16">
    <h2 class="text-2xl font-bold text-center mb-6">Contact</h2>
    <form class="space-y-3" onsubmit="event.preventDefault(); alert('Thanks!'); this.reset();">
      <input class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700" type="email" placeholder="Your email" required>
      <textarea class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700" rows="4" placeholder="Message" required></textarea>
      <button class="w-full p-3 rounded-lg bg-sky-500 text-slate-950 font-semibold" type="submit">Send</button>
    </form>
  </section>

  <footer class="text-center text-sm text-slate-500 py-8">&copy; {{YEAR}} {{AUTHOR}}</footer>
</body>
</html>
`
    }
  };

  T.kotlin = {
    name: "Kotlin",
    label: "🟣 Kotlin",
    files: {
      "src/Main.kt": `fun main() {
    println("Hello from {{PROJECT_NAME}}!")
}
`
    }
  };

  T.webview = {
    name: "Android WebView App",
    label: "🤖 Android WebView App",
    files: {
      "settings.gradle.kts": `pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "{{PROJECT_NAME_SLUG}}"
include(":app")
`,
      "build.gradle.kts": `plugins {
    id("com.android.application") version "8.5.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.24" apply false
}
`,
      "gradle.properties": `org.gradle.jvmargs=-Xmx2048m
android.useAndroidX=true
`,
      ".gitignore": `.gradle/
build/
local.properties
.idea/
*.apk
`,
      "app/build.gradle.kts": `plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.example.webviewapp"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.webviewapp"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}
`,
      "app/src/main/AndroidManifest.xml": `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:label="@string/app_name"
        android:theme="@android:style/Theme.DeviceDefault.NoActionBar">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
`,
      "app/src/main/res/values/strings.xml": `<resources>
    <string name="app_name">{{PROJECT_NAME}}</string>
</resources>
`,
      "app/src/main/java/com/example/webviewapp/MainActivity.kt": `package com.example.webviewapp

import android.app.Activity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : Activity() {

    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        webView = WebView(this)
        setContentView(webView)

        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.webViewClient = WebViewClient()
        webView.loadUrl("file:///android_asset/index.html")
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }
}
`,
      "app/src/main/assets/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{PROJECT_NAME}}</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; background: #0f172a; color: #fff; text-align: center; padding: 60px 20px; }
    button { margin-top: 16px; padding: 12px 24px; border: 0; border-radius: 10px; background: #38bdf8; color: #0f172a; font-weight: 600; }
  </style>
</head>
<body>
  <h1>{{PROJECT_NAME}}</h1>
  <p>By {{AUTHOR}} &copy; {{YEAR}}</p>
  <button onclick="this.textContent = 'Hello from WebView!'">Tap me</button>
</body>
</html>
`
    }
  };

  T.termux = {
    name: "Termux Bot Starter",
    label: "📱 Termux Bot Starter",
    files: {
      "setup.sh": `#!/data/data/com.termux/files/usr/bin/bash
# One-time setup for Termux
pkg update -y
pkg install -y nodejs git
npm install
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env - edit it and add your BOT_TOKEN."
fi
echo "Setup done. Start the bot with: bash run.sh"
`,
      "run.sh": `#!/data/data/com.termux/files/usr/bin/bash
# Keeps the bot running and restarts it if it crashes.
termux-wake-lock 2>/dev/null
while true; do
  node bot.js
  echo "Bot stopped. Restarting in 5 seconds... (Ctrl+C to quit)"
  sleep 5
done
`,
      "package.json": `{
  "name": "{{PROJECT_NAME_SLUG}}",
  "version": "1.0.0",
  "description": "{{PROJECT_NAME}} - Telegram bot for Termux",
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
  console.error("Missing BOT_TOKEN. Edit .env and add your token.");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/^\\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hi! {{PROJECT_NAME}} is running on Termux 📱");
});

bot.on("message", (msg) => {
  if (!msg.text || msg.text.startsWith("/")) return;
  bot.sendMessage(msg.chat.id, "You said: " + msg.text);
});

bot.on("polling_error", (err) => console.error("Polling error:", err.message));

console.log("{{PROJECT_NAME}} is running...");
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
    express: "Run: npm install, then npm start. Open http://localhost:3000/api/items",
    flask: "Run: pip install -r requirements.txt, then python app.py. Open http://localhost:5000/api/items",
    discord: "1. Copy `.env.example` to `.env` and add your `DISCORD_TOKEN`.\n2. Enable Message Content Intent in the Discord Developer Portal.\n3. Run: npm install, then npm start",
    pytgbot: "1. Copy `.env.example` to `.env` and add your `BOT_TOKEN`.\n2. Run: pip install -r requirements.txt\n3. Run: python bot.py",
    portfolio: "Open index.html in a browser. Edit the text, projects and contact details.",
    pwa: "Serve over HTTP (service workers need it), e.g. python3 -m http.server 8000, then open http://localhost:8000 and install the app.",
    vue: "Run: npm install, then npm run dev (build with npm run build).",
    go: "Run: go run main.go. Open http://localhost:8080",
    rust: "Run: cargo run",
    next: "Run: npm install, then npm run dev (build with npm run build). Open http://localhost:3000",
    tailwind: "Open index.html in a browser. Tailwind loads from a CDN, so you need internet.",
    kotlin: "Compile: kotlinc src/Main.kt -include-runtime -d app.jar, then run: java -jar app.jar",
    webview: "Open this folder in Android Studio, let Gradle sync, then Run. Put your web app in app/src/main/assets/. Change the package name `com.example.webviewapp` before publishing.",
    termux: "In Termux: run `bash setup.sh`, edit `.env` and add your `BOT_TOKEN`, then run `bash run.sh`.",
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

  const ICONS = {
    html: ["#e44d26", "H5"], php: ["#777bb3", "PHP"], js: ["#f7df1e", "JS"],
    python: ["#3776ab", "PY"], c: ["#5c6bc0", "C"], cpp: ["#00599c", "C++"],
    java: ["#e76f00", "JV"], react: ["#20232a", "RE"], tgbot: ["#229ed9", "TG"],
    moviebot: ["#c62828", "MV"], aisite: ["#7c3aed", "AI"],
    express: ["#2e7d32", "EX"], flask: ["#455a64", "FL"], discord: ["#5865f2", "DC"],
    pytgbot: ["#1e88e5", "TP"], portfolio: ["#ec407a", "PF"], pwa: ["#5a0fc8", "PWA"],
    vue: ["#42b883", "VU"], go: ["#00acd7", "GO"], rust: ["#b7410e", "RS"],
    next: ["#000000", "NX"], tailwind: ["#0ea5e9", "TW"], kotlin: ["#7f52ff", "KT"],
    webview: ["#3ddc84", "AND"], termux: ["#212121", "TM"]
  };

  function iconFor(key) {
    const c = ICONS[key] || ["#4f46e5", "T"];
    const dark = key === "js";
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" rx="14" fill="' + c[0] + '"/>' +
      '<text x="32" y="40" font-family="Arial,sans-serif" font-size="' + (c[1].length > 2 ? 20 : 26) + '" font-weight="700" text-anchor="middle" fill="' + (dark ? "#111" : "#fff") + '">' + c[1] + "</text></svg>";
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  async function askVars() {
    const prompt = acode.require("prompt");
    let saved = "";
    try { saved = localStorage.getItem(ID + ".author") || ""; } catch (e) {}

    const name = await prompt("Project name", "My Awesome App", "text", { required: true });
    const author = await prompt("Author name", saved, "text");
    try { localStorage.setItem(ID + ".author", author || ""); } catch (e) {}

    const projectName = (name && name.trim()) || "My Awesome App";
    return {
      PROJECT_NAME: projectName,
      PROJECT_NAME_SLUG: slugify(projectName),
      AUTHOR: (author && author.trim()) || "Unknown",
      YEAR: String(new Date().getFullYear())
    };
  }

  function filesFor(key) {
    return async function () {
      const vars = await askVars();
      const files = Object.assign({}, T[key].files, { "README.md": readme(key) });
      const out = {};
      Object.keys(files).forEach(function (path) {
        out[path] = fill(files[path], vars);
      });
      return out;
    };
  }

  function register() {
    const projects = acode.require("projects");
    Object.keys(T).forEach(function (key) {
      projects.set(T[key].name, filesFor(key), iconFor(key));
    });
  }

  if (window.acode) {
    acode.setPluginInit(ID, async () => { register(); });
    acode.setPluginUnmount(ID, () => {});
  }
})();
