# My Portfolio Website 🚀

A personal portfolio website built with **React**, **TypeScript**, **GSAP**, **Three.js**, and **Vite**.

![Portfolio-Preview](public/images/preview.png)

---

## Tech Stack 🛠️

- **Frontend** — React 18, TypeScript
- **3D / WebGL** — Three.js, React Three Fiber, React Three Drei
- **Animations** — GSAP (GreenSock)
- **Build Tool** — Vite
- **Styling** — CSS

---

## Prerequisites ✅

Make sure you have the following installed before getting started:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | v18 or higher | [nodejs.org](https://nodejs.org/) |
| **npm** | v9 or higher (comes with Node.js) | — |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

---

## Getting Started — Step by Step 📝

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will start and be available at **http://localhost:5173** (default Vite port).  
It is also accessible over the network via the URL shown in the terminal.

### 4. Build for Production

```bash
npm run build
```

This compiles TypeScript and generates an optimized production bundle in the `dist/` folder.

### 5. Preview the Production Build

```bash
npm run preview
```

Serves the production build locally so you can verify everything works before deploying.

### 6. Lint the Code

```bash
npm run lint
```

Runs ESLint to check for code quality and style issues.

---

## GSAP Plugin Note ⚠️

This project uses **GSAP trial plugins** (`gsap-trial`). The trial plugins work in local development but **cannot be used in a hosted/production deployment**.

For production, you need the official GSAP Club plugins:  
👉 [GSAP Installation Guide](https://gsap.com/docs/v3/Installation/)

---

## Project Structure 📂

```
├── public/             # Static assets (images, 3D models, etc.)
├── src/
│   ├── components/     # React components
│   └── ...
├── index.html          # Entry HTML file
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies & scripts
```

---

## License 📄

This project is open source and available under the [MIT License](LICENSE).
