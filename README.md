# SafeSpace 🌿

A calm, beautiful mental wellness web app built with React, Vite, and Tailwind CSS.

## Features

- **🌿 Home**: Daily mood check-ins with emoji chips to track emotional patterns
- **💬 Rant Room**: Private space to release thoughts with AI acknowledgment and optional community sharing
- **🛠️ Coping Toolkit**: Searchable collection of 12+ evidence-based coping techniques organized by category
- **🌸 Progress Garden**: Visualize your wellness journey with stats and a growing SVG flower garden

## Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side navigation

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Mood check-in dashboard
│   ├── RantRoom.jsx      # Safe space for venting
│   ├── CopingToolkit.jsx # Tool library with filters
│   └── ProgressGarden.jsx # Stats & visualizations
├── components/
│   └── Layout.jsx        # Navigation & layout wrapper
├── styles/
│   └── index.css         # Tailwind & custom styles
├── utils/                # Helper functions
├── App.jsx               # Router setup
└── main.jsx              # Entry point
```

## Color Scheme

The app uses a calming purple-toned palette:
- Primary: Purple (for safety, calm, wellness)
- Secondary: Soft pastels (pink, blue accents)
- Background: Light purple/white gradients

## Design Principles

- **Minimal**: No clutter, focus on what matters
- **Calm**: Soothing colors, generous spacing, smooth interactions
- **Private**: All data stays on your device (no backend required yet)
- **Inclusive**: Simple, accessible interface

## Future Enhancements

- Backend integration for persistent data
- Push notifications for check-in reminders
- Progress analytics and trends
- Shareable wellness goals
- Dark mode
- Offline support

## License

MIT

---

**SafeSpace** © 2024 • Take care of yourself ✨
