<div align="center">
  <img src="https://img.shields.io/badge/DevPilot-AI_IDE-6366f1?style=for-the-badge&logo=react&logoColor=white" alt="DevPilot Logo" />
  <h1>🚀 DevPilot</h1>
  <p><strong>An AI-Native, Browser-Based Full-Stack Development Environment</strong></p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#architecture">Architecture</a>
  </p>
</div>

---

## 💡 What is DevPilot?

**DevPilot** is a next-generation browser-based IDE built around the powerful ASI-1 API. It aims to eliminate context switching by combining world-class code editing, AI-assisted development, live previews, and terminal execution into a single, unified workspace.

Whether you're scaffolding a new React app or debugging a backend server, DevPilot's integrated AI agents are there to review your code, suggest completions, and write documentation on the fly.

## ✨ Key Features

- **🤖 Integrated AI Assistant:** Chat with ASI-1 directly inside your editor. Generate boilerplate, refactor functions, or ask architectural questions without leaving your code.
- **⚡ Smart Code Completion:** Context-aware inline suggestions powered by AI to increase your coding velocity.
- **🕵️ Multi-Agent Review System:** Dedicated AI agents for Security, Performance, Style, and Documentation review your codebase before you ship.
- **💻 Pro-Grade Editor Engine:** Built on Monaco Editor (the same engine powering VS Code) featuring syntax highlighting for 20+ languages.
- **🖥️ Integrated Terminal:** Fully functional browser terminal backed by WebSockets for direct Node/Python/Java execution.
- **🌐 Live Preview:** Real-time HTML/CSS/JS rendering loop to instantly visualize frontend changes.
- **🐙 GitHub Integration:** Seamlessly import repositories, generate fixes, and create Pull Requests straight from the IDE.

## 🛠️ Tech Stack

DevPilot is engineered as a modern, type-safe Monorepo:

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Monaco Editor, Zustand |
| **Backend** | Node.js, Express.js, Socket.io |
| **AI Integration** | ASI-1 API (Streaming & Orchestration) |
| **Infrastructure** | Docker, Docker Compose, Redis |

## 🚀 Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Docker** (Highly recommended for Redis & safe execution)

### 1. Clone & Install

```bash
git clone https://github.com/kiyansh13karan/DevPilot-.git
cd DevPilot-
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory (you can copy `.env.example`):

```bash
cp .env.example .env
```

Open `.env` and add your essential API keys:

```ini
# Required for AI features
ASI1_API_KEY=your_asi1_api_key_here

# Optional: For importing/pushing repos
GITHUB_TOKEN=your_github_token_here
```

### 3. Start the Services

Start a local Redis instance (required for WebSocket pub/sub):

```bash
docker run -d --name devpilot-redis -p 6379:6379 redis
```

Boot up both the frontend and backend servers concurrently:

```bash
npm run dev:all
```

Your IDE is now live at: **[http://localhost:5173](http://localhost:5173)** 🎉

## 🏗️ Architecture Overview

DevPilot uses an **npm workspaces** monorepo structure:

- **`packages/client/`**: The React SPA frontend. Handles UI, editor state, and WebSocket connections.
- **`packages/server/`**: The Node.js Express backend. Acts as a secure proxy to the ASI-1 AI, manages WebSocket terminal sessions, and runs the Multi-Agent orchestrator.
- **`packages/shared/`**: Contains shared TypeScript interfaces, constants, and utility functions to ensure strict end-to-end type safety.

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev:all` | Run both client and server development processes concurrently |
| `npm run build` | Build all workspace packages (`shared`, `server`, `client`) |
| `npm run typecheck` | Run TypeScript compilation checks across the monorepo |

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <i>Built with ❤️ by Karan Nayal</i>
</div>
