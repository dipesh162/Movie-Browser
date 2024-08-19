Live link: https://movie-browser-dipesh162.vercel.app/

# Movie Browsing Web Application

A responsive and feature-rich movie browsing application built using Next.js 13. This application allows users to explore various movies with infinite scrolling, apply filters like Type, Sort, Year, Genre, and Rating, and view detailed information about each movie.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Overview](#project-overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- [Git](https://git-scm.com/)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/movie-browsing-app.git
Navigate to the project directory:

bash
Copy code
cd movie-browsing-app
Install the dependencies:

If you're using npm:

bash
Copy code
npm install
Or, if you're using yarn:

bash
Copy code
yarn install
Running the Application
Start the development server:

If you're using npm:

bash
Copy code
npm run dev
Or, if you're using yarn:

bash
Copy code
yarn dev
Open your browser and visit:

arduino
Copy code
http://localhost:3000
The application should now be running on your local machine.

Project Overview
Features
Infinite Scrolling: The application implements infinite scrolling to load more movies as the user scrolls down.
Filtering: Users can filter movies based on various criteria, such as Type, Sort, Year, Genre, and Rating. The rating filter includes a dual-slider with markers at 0.5 intervals.
Movie Details: Clicking on a movie opens a detailed view with more information about the movie.
Responsive Design: The application is fully responsive and optimized for both desktop and mobile devices.
Technologies Used
Next.js 13: For server-side rendering and static site generation.
React: For building the user interface.
Tailwind CSS: For styling the application with utility-first CSS.
TypeScript: For type-safe JavaScript code.
Directory Structure
php
Copy code
movie-browsing-app/
├── components/         # Reusable components
├── pages/              # Next.js pages (routes)
├── public/             # Static assets
├── styles/             # Global and component-specific styles
├── utils/              # Utility functions
└── package.json        # Project metadata and scripts
Custom Implementation Notes
Client and Server Components: The project separates client-side and server-side logic into different files for clarity.
No Third-Party Libraries for Infinite Scrolling: Infinite scrolling is implemented natively without third-party libraries.
Direct Data Storage: Movie data is stored directly without nesting under data.results to simplify data handling.
Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your changes.
