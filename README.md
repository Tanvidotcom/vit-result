# VIT Semester Result Calculator

A responsive web application built to help VIT students calculate their semester result quickly using the standard weighted formula:

- MSE contributes 30%
- ESE contributes 70%
- The app calculates total marks, percentage, and overall grade for four subjects

## Problem Statement

Students often need to manually calculate semester results using weighted marks for internal and external examinations. This process is time-consuming and prone to mistakes. The goal of this project is to simplify result computation by providing a user-friendly calculator that instantly processes marks and displays the final outcome.

## Tech Stack

| Technology | Version |
| --- | --- |
| React | 18.2.0 |
| Vite | 5.0.0 |
| JavaScript | ES6+ |
| HTML5 | Latest |
| CSS3 | Latest |

## Features

- Input marks for four subjects
- Supports MSE and ESE marks separately
- Automatic weighted calculation based on the university pattern
- Displays total marks and percentage
- Calculates overall grade
- Responsive layout for desktop and smaller screens
- Simple and clean user interface

## How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/vit-result.git
   cd vit-result
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173
   ```

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```bash
vit-result/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       └── ResultCalculator.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
```

## Screenshot

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/8957f001-a039-4c18-9ae0-62521696f10e" />
