import { Outlet } from "react-router-dom";

import Navigation from "./navigation";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img src="/vite.svg" className="App-logo" alt="logo" />
        <h1>Willkommen beim WISS-Quiz!</h1>
      </header>

      <main className="layout-main-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>© 2025 WISS-Quiz. All rights reserved.</p>
        <p>Made with ❤️ by WISS</p>
      </footer>
    </div>
  );
};

export default Layout;
