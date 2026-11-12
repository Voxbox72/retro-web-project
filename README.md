# Retro Web Project

A retro-themed multi-page e-commerce style website showcasing Apple and Samsung products. Built with HTML, CSS, JavaScript, and PHP form handlers (replaced with static placeholders for GitHub Pages).

## Date
Completed: December 2022

## Features
- Multi-page layout (Home, About, Apple, Samsung)
- Product showcase pages with product cards
- Custom CSS styling with Font Awesome icons
- JavaScript interactivity
- Responsive design elements

## How to Run (Static)
Open index.html directly in a browser, or serve with any static server. GitHub Pages compatible.

## Notes
PHP form handlers (device.php, personal.php) are static placeholders. Full checkout functionality requires a PHP/MySQL backend.

## Docker
Build and run locally:

`ash
docker build -t retro-web-project .
docker run -p 8080:80 retro-web-project
``r

Visit http://localhost:8080. The container runs until you stop it (docker stop <container_id>).

