# Templates

A professional project template generator for Acode.

Create complete, ready-to-use project structures directly inside Acode in seconds.

## Run the command

Open the command palette and run:

```
Templates
```

Or tap the **Templates** icon in the left sidebar and pick a template.

## Usage

1. Open Acode.
2. Open the command palette and run `Templates`.
3. Select a project template.
4. Enter the project name.
5. Enter the author name.
6. Select the destination folder.
7. The project is generated automatically.

## Features

- Generate complete projects in seconds
- Automatically create project directories and multiple files
- Dynamic project variables
- Automatic README for every project
- Sidebar panel and command palette support

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

## License

MIT License
