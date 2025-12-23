# 🎧 Lo-Fi Coding Companion

A minimalist **lo-fi coding companion** designed to help developers focus and relax while coding.  
Built with **Next.js** and **Tailwind CSS**, this app combines ambient sounds, a Pomodoro timer, and a clean dark UI for distraction-free productivity.

---

## ✨ Features

- 🎵 **Ambient Lo-Fi Sounds** (lo-fi beats, rain, café, etc.)
- ⏱️ **Pomodoro Timer** (25/5 focus cycles)
- 🧠 **Today’s Focus** input (saved locally)
- 🌙 **Dark, aesthetic UI** for night coding
- 💻 Fully responsive and lightweight
- 🚀 No authentication, no backend — pure focus

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **React Hooks**
- **HTML Audio API**
- **LocalStorage**

---

## 📂 Project Structure

app/
├─ layout.jsx
├─ page.jsx
├─ globals.css
components/
├─ Timer.jsx
├─ AudioControls.jsx
├─ FocusInput.jsx
└─ Background.jsx
hooks/
└─ usePomodoro.js
public/
└─ sounds/

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/lofi-coding-companion.git
cd lofi-coding-companion
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the development server
bash
Copy code
npm run dev
Open http://localhost:3000 to view it in the browser.
