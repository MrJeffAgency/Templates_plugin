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

  const RUN = {
    html: "Open index.html in a browser (or use a preview plugin).",
    php: "Run: php -S localhost:8000",
    js: "Run: npm start",
    python: "Run: python src/main.py",
    c: "Compile: gcc src/main.c -Iinclude -o app && ./app",
    cpp: "Compile: g++ src/main.cpp -Iinclude -o app && ./app",
    java: "Compile: javac src/Main.java && java -cp src Main",
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
