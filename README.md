# ThreadStocks Web

The frontend part of the ThreadStocks application, built with Vue 3, Vite, and Tailwind CSS. This application interacts with the [ThreadStocks-API](https://github.com/Kae-Tempest/ThreadStocks-API) to help users manage their stock of embroidery threads for cross-stitch projects.

## 🚀 Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Pinia](https://pinia.vuejs.org/) with [persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kae-Tempest/ThreadStocks-API
   cd ThreadStocks-API/web
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Development

Run the development server:
```bash
yarn dev
# or
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build

To build the project for production:
```bash
yarn build
# or
npm run build
```

## 📂 Project Structure

- `src/view`: Page components (Home, Login, Register).
- `src/components`: Reusable UI components.
- `src/router.ts`: Application routing configuration.
- `src/main.ts`: Application entry point.
- `src/style.css`: Global styles and Tailwind imports.

## 🔗 Backend Integration

This frontend is designed to work with the [ThreadStocks-API](https://github.com/Kae-Tempest/ThreadStocks-API). Ensure the backend server is running for full functionality.

## 📝 License

This project is licensed under the MIT License.