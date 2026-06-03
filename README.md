# Weather App

A lightweight, professional Weather App that delivers current conditions and short-term forecasts for locations worldwide. This repository contains a simple, front-end focused implementation designed for clarity, accessibility, and easy local development. An optional backend proxy can be added to protect API keys and provide caching.

**Key highlights**

- Fast, responsive UI with accessible controls
- Configurable API provider (example: OpenWeatherMap)
- Unit switching (°C / °F)
- Graceful error handling and keyboard accessibility

**Contents**

- **`index.html`**: Single-page frontend UI
- **`script.js`**: Main client logic and API integration
- **`style.css`**: Styles and responsive layout
- **`config.js`**: Simple configuration file (API keys, defaults)

**Live Demo**
Open `index.html` in a browser or serve the folder with a static server (recommended). See Quick Start below for commands.

**Features**

- Current weather for searched locations
- Short-term forecast summary
- Units toggle (metric / imperial)
- Clear error states for network and invalid input

**Quick Start (Local Development)**

1. Clone or download this repository.
2. Option A — Open locally (simple):
   - Double-click `index.html` to open in your default browser. Some browsers block API calls from `file://` origins; if you see failed requests, use Option B.

   - Option B — Run a local static server (recommended):

   ```bash
   # Python 3
   python -m http.server 8000

   # or using npm (serve)
   npx serve .  # installs temporarily if not present
   ```

   Then open: http://localhost:8000

**Configuration**

The application reads configuration from `config.js`. At minimum, set your API provider and API key. Example `config.js`:

```js
const CONFIG = {
  API_PROVIDER: "openweathermap",
  API_KEY: "YOUR_OPENWEATHERMAP_API_KEY",
  UNITS: "metric", // 'metric' or 'imperial'
};

export default CONFIG; // or window.CONFIG = CONFIG; depending on the project setup
```

Notes:

- Replace `YOUR_OPENWEATHERMAP_API_KEY` with a valid key from OpenWeatherMap or your chosen provider.
- Keep API keys secret. For production, use an optional backend proxy to avoid exposing keys in client bundles.

**Optional Backend Proxy**

For production deployments, or to avoid exposing API keys, implement a small proxy that forwards client requests to the weather API using a server-side API key. A minimal Node/Express example:

```js
// server.js (example)
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const API_KEY = process.env.WEATHER_API_KEY;

app.get("/api/weather", async (req, res) => {
  const { q, units } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&units=${units}&appid=${API_KEY}`;
  const r = await fetch(url);
  const data = await r.json();
  res.json(data);
});

app.listen(3000);
```

Then point the client to `/api/weather` instead of the third-party endpoint.

**Deployment**

- Static hosting (Netlify, Vercel, GitHub Pages): Deploy the project as a static site. If using a backend proxy, deploy the proxy to a server or serverless function (Heroku, Render, Vercel Serverless Functions).

**Project Structure**

- [index.html](index.html): Application entry point
- [script.js](script.js): Client-side code and API integration
- [style.css](style.css): Visual styles and responsive layout
- [config.js](config.js): App configuration and API key placeholder

**Troubleshooting**

- If the app shows network errors when opened as a file, serve via HTTP as shown above.
- Ensure `config.js` contains a valid API key and the provider matches the code in `script.js`.
- Check the browser console for detailed error messages.

**Contributing**

- Fork the repo, create a feature branch, and open a Pull Request with a clear description.
- Keep changes small and focused; include screenshots for UI changes.

**License & Attribution**
This project is provided under the MIT License. Replace or adapt license information as needed for your organization.

**Contact / Support**
For questions or support, open an issue or contact the maintainer.

---

_This README provides a concise, production-oriented overview and setup instructions for the Weather App frontend. If you want, I can expand sections with API examples, environment templates, or CI/CD deployment steps._
