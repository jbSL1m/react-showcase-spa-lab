# React Showcase SPA Lab

A React single-page application built with Vite and React Router.

## Features

- Home, Catalog, and Admin routes
- Navigation using React Router
- GET requests to fetch coffee catalog data
- POST requests to add new coffee items in admin
- Responsive UI with cards and forms
- Vitest setup for unit testing

## Project Structure

- `src/App.jsx`: Main application route definitions
- `src/components/Navbar.jsx`: Route navigation bar
- `src/components/Home.jsx`: Landing page content
- `src/components/Catalog.jsx`: Coffee catalog loaded from backend
- `src/components/Admin.jsx`: Add new coffee products
- `db.json`: Mock backend data served via JSON Server
- `src/__tests__/App.test.jsx`: Basic navigation rendering tests

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the mock backend
   ```bash
   npm run server
   ```
3. Start the React app
   ```bash
   npm run dev
   ```
4. Open the Vite URL in your browser

## Testing

Run the unit tests with:

```bash
npm test
```

## Notes

- The application fetches data from `http://localhost:6001/coffee`.
- Admin adds new coffee items using a POST request to the same endpoint.
- React Router handles client-side navigation between pages.


