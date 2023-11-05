# Car Rental Services

Welcome to the Car Rental Services project! This application allows users to explore and rent cars with ease.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- Explore a diverse fleet of cars
- Filter cars by brand, hourly rental price, or mileage
- Save favorite car listings
- View detailed information about each car
- Contact the rental company via phone

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Pnpm](https://pnpm.io/) (or any other package manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SalOne22/tt-car-rents.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tt-car-rents
    ```
3. Install dependencies:
    ```bash
    pnpm install
    ```

### Usage

1. Set up the `VITE_API_URL` environment variable in your `.env` file with the Mockapi URL.
    ```env
    VITE_API_URL=https://PROJECT_TOKEN.mockapi.io/ENDPOINT
    ```
2. Run the development server:
    ```
    pnpm dev
    ```
3. Open your browser and navigate to http://localhost:5173.

### Technologies Used

This project is built with the following technologies:

- React
- Vite
- Redux Toolkit
- Axios
- React Router
- Other dependencies listed in [package.json](package.json)