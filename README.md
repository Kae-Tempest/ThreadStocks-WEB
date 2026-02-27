# ThreadStocks Web

The frontend part of the ThreadStocks application, built with Vue 3, Vite, and Tailwind CSS. This application interacts with the [threadStocks API](../api) to help users manage their stock of embroidery threads for cross-stitch projects.

## 🚀 Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Pinia](https://pinia.vuejs.org/) with [persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Internationalization:** [Vue I18n](https://vue-i18n.intlify.dev/)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kae-Tempest/threadStocks.git
   cd threadStocks/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   Create a `.env` file in the `web` directory and set the API URL:
   ```
   VITE_API_URL=http://localhost:8080
   ```

### Development

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build

To build the project for production:
```bash
npm run build
```

## 📂 Project Structure

- `src/view`: Page components (Home, App, Login, Register, Features, Contact, ResetPassword).
- `src/components`: Reusable UI components.
- `src/stores`: Pinia state management.
- `src/composable`: Reusable logic (composables).
- `src/interfaces`: TypeScript interfaces.
- `src/enums`: TypeScript enums.
- `src/i18n.ts`: Internationalization configuration.
- `src/router.ts`: Application routing configuration.
- `src/main.ts`: Application entry point.

## 🔗 Backend Integration

This frontend is designed to work with the [threadStocks API](../api). Ensure the backend server is running for full functionality.

## 📝 License

This project is licensed under the MIT License.