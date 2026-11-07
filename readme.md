# Templates

A professional project template generator for Acode.

Create complete, ready-to-use project structures directly inside Acode in seconds.

## Usage

1. Open Acode and create a new project.
2. Pick a template from the list (HTML5 Website, PHP, JavaScript, Python, C, C++, Java, React + Vite, Telegram Bot, Telegram Movie Bot, AI Website, Express API, Flask API, Discord Bot, Telegram Bot (Python), Portfolio, PWA, Vue + Vite, Go, Rust, Next.js, Tailwind Landing Page, Kotlin, Android WebView App, Termux Bot Starter).
3. Enter the project name.
4. Enter the author name.
5. The project files are generated automatically.

## Features

- Generate complete projects in seconds
- Automatically create project directories and multiple files
- Dynamic project variables
- Automatic README for every project
- Templates appear directly in the Acode New Project list

## Templates

| Template | Creates |
|---|---|
| HTML5 | `index.html`, `style.css`, `script.js`, `assets/` |
| PHP | `index.php`, `config.php`, `includes/functions.php`, `assets/style.css` |
| JavaScript | `package.json`, `src/index.js` |
| Python | `src/main.py`, `requirements.txt` |
| C | `src/main.c`, `include/` |
| C++ | `src/main.cpp`, `include/` |
| Java | `src/Main.java` |
| Telegram Bot (Friendly) | `bot.js`, `package.json`, `.env.example`, `.gitignore` |
| Telegram Movie Bot | `bot.js` (TMDB search, trending, popular, random, trailers), `package.json`, `.env.example` |
| AI Website (Gemini Chat) | `server.js`, `public/` chat UI, `package.json`, `.env.example` |
| Express REST API | `server.js`, `package.json`, `.env.example` |
| Flask API | `app.py`, `requirements.txt` |
| Discord Bot | `bot.js`, `package.json`, `.env.example` |
| Telegram Bot (Python) | `bot.py`, `requirements.txt`, `.env.example` |
| Portfolio Website | `index.html`, `style.css`, `script.js`, `assets/` |
| PWA (Installable App) | `index.html`, `manifest.json`, `sw.js`, `app.js`, `icons/` |
| Vue + Vite | `index.html`, `package.json`, `src/App.vue`, `src/main.js` |
| Go | `go.mod`, `main.go` |
| Rust | `Cargo.toml`, `src/main.rs` |
| Next.js | `package.json`, `app/layout.jsx`, `app/page.jsx`, `next.config.js` |
| Tailwind Landing Page | `index.html` |
| Kotlin | `src/Main.kt` |
| Android WebView App | Gradle project, `MainActivity.kt`, `assets/index.html` |
| Termux Bot Starter | `bot.js`, `setup.sh`, `run.sh`, `package.json` |
| React + Vite | `index.html`, `package.json`, `vite.config.js`, `src/App.jsx`, `src/main.jsx`, `src/style.css` |

Every project also gets a `README.md`.

## Variables

```
{{PROJECT_NAME}}
{{PROJECT_NAME_SLUG}}
{{AUTHOR}}
{{YEAR}}
```

Example: the project name `My Awesome App` gives the slug `my-awesome-app`.

## React project

After creating a React project, run these in a terminal:

```
npm install
```

```
npm run dev
```

```
npm run build
```

Templates only generates the files. Installing packages is done separately.

## Requirements

- Acode
- Node.js and npm for JavaScript and React projects

## Author

MrJeffAgency

## Source code

https://github.com/MrJeffAgency/Templates_plugin

## License

MIT License
