# GSAP Playground

A small React + Vite app to learn **GSAP** (GreenSock) by playing with real animations.

## Run the app

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## What's inside

- **gsap.to()** — Animate from the current state to the values you set (duration, delay, ease, x, y, rotation, scale, opacity). Tweak the controls and hit **Play**.
- **gsap.from()** — Animate from the values you set to the element's current state. Good for entrances.
- **gsap.fromTo()** — You define both start and end. Full control.
- **Timeline** — Chain several tweens in sequence (with overlap).

Each section has a **code preview** showing the equivalent GSAP call so you can copy and adapt it in your own code.

## Tips for beginners

1. Change **duration** and **ease** first to see how they affect the motion.
2. Try **power2.out**, **back.out(1.7)**, and **elastic.out(1, 0.3)** to compare easing.
3. Use **Reset** before **Play** to start from a clean state.
4. Edit the values in the playground, then replicate the same options in your own `gsap.to()` / `gsap.from()` / `gsap.fromTo()` calls.

Have fun animating.

# Mojito
