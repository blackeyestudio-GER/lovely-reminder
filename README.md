# Lovely Reminder

Weekly tasks with reactive timers. Complete a task and it reappears after your chosen interval.

- **PWA** with local storage (no server, no data saved remotely)
- Add tasks with a **reactive timer** (days until it reappears)
- Check off tasks → they get crossed out → auto-uncheck after X days
- **4 themes**: Dark Gothic / Dracula / Business / Lovely Pastel Red Pink
- **Export/Import** settings as JSON (theme preferences only, no task data)

Built with Nuxt 3, Vue 3, Tailwind CSS, and @vite-pwa/nuxt.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Runs at `http://127.0.0.1:8002` (or next available port if in use)

## PWA Icons

Add `public/pwa-192x192.png` and `public/pwa-512x512.png` for PWA install icons. The app works without them.
