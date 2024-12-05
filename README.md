# My Portfolio

## Summary

This is my personal portfolio website, built with HTML, Tailwind CSS, and a bit of JavaScript. The website showcases my skills, education, tech stack, and projects. It features a clean and responsive design with a fixed navigation bar, sections for about me, education, and tech stack, as well as a mobile-friendly menu. The site also includes language toggle functionality for multilingual support.

## Features

Key features included in this project:

- **Responsive Design**: The layout adjusts seamlessly across all screen sizes, from mobile to desktop.
- **Language Toggle**: Ability to switch between English and other languages (i18n support).
- **Tech Stack Showcase**: Displays different technologies I work with, including HTML, CSS, JavaScript, Python, Angular, Vue, and more.
- **Profile Section**: Includes my photo, a brief bio, and links to my social media profiles (GitHub, LinkedIn).
- **Smooth Animations**: Tailwind CSS for smooth animations and transitions when interacting with the site.

## Framework & Tools

This project was built using the following technologies:

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework used for styling.
- **HTML5 & CSS3**: Core technologies for building the structure and design of the site.
- **JavaScript**: For implementing interactive features like the tech stack filter and language toggle.
- **[i18n](https://www.i18next.com/)**: Internationalization support for handling multiple languages.

## Setup

To get started with this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    ```

2. Navigate into the project directory:
    ```bash
    cd my-portfolio
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the project with live-server:
    ```bash
    npm start
    ```

    This will start a local server and open the website in your browser. The website will be live at `http://localhost:8080`.

## Building the App

To build the CSS using Tailwind and PostCSS, run:

```bash
npm run build:css
```

## Dependencies

The following packages are used in this project:

- **autoprefixer**: Adds vendor prefixes to CSS rules.
- **live-server**: A simple development server with live reload support.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework for styling.

## Scripts

These are the available NPM scripts for running and building the project:

- `npm run build:css`: Generates the `main.css` file by processing the Tailwind CSS file and includes any custom styles.
- `npm start`: Starts the live-server for local development and opens the project in the browser.
- `npm install`: Installs the dependencies listed in `package.json`.
