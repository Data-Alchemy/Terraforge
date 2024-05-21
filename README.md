# TerraForge

TerraForge is a web application built with React, TypeScript, Vite, and Flask that leverages Ollama, a locally hosted LLM inference service, to enable users to create infrastructure and interact with a private language model. The app is hosted on Static Web Apps and can also run locally.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Infrastructure Creation**: Allows users to define and create infrastructure components.
- **Private LLM Chat**: Users can interact with a private language model for various queries and assistance.
- **Locally Hosted LLM**: Utilizes Ollama for local LLM inference, ensuring data privacy and quick response times.
- **Static Web App Hosting**: The app is hosted on Static Web Apps for easy deployment and scalability.
- **Local Development**: Can be run locally for development and testing.
- **React + Vite + TypeScript**
- **Tailwind CSS**
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [shadcn-ui](https://github.com/shadcn-ui/ui/)
- [radix-ui/icons](https://www.radix-ui.com/icons)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- Python (version 3.10 or higher)
- Flask

### Steps

1. **Clone the Repository**
    ```sh
    git clone
    cd terraforge
    ```

2. **Install Node.js Dependencies**
    ```sh
    npm install
    ```

3. **Install Python Dependencies**
    ```sh
    cd ./server
    pip install -r requirements.txt
    ```

4. **Start Flask Server**
    ```sh
    python app.py
    ```

5. **Start React App**
    ```sh
    npm run dev
    ```

## Usage

### Running Locally

- Ensure both the Flask server and the React app are running.
- Open your browser and navigate to `http://localhost:3000`.

### Hosting on Static Web Apps

- Follow the [Static Web Apps documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/) to deploy the app.



## Project Structure

```
Terraforge/
├── public/            # Public assets
├── src/               # Application source code
│   ├── components/    # React components
│   │   └── ui/        # shadc/ui components
│   │   └── layouts/   # layouts components
│   ├── context/       # contexts components
│   ├── config/        # Config data
│   ├── hook/          # Custom hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # pages/features components
│   ├── App.tsx        # Application entry point
│   ├── index.tsx      # Main rendering file
│   └── Router.tsx     # Routes component
├── index.html         # HTML entry point
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hayyi2/react-shadcn-starter/blob/main/LICENSE) file for details. 