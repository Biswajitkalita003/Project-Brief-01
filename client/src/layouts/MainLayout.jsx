import "./MainLayout.css";

function MainLayout({ title, children }) {
  return (
    <div className="layout">
      <header className="header">
        <h2>University Management System</h2>
      </header>

      <main className="content">
        <h3>Page Title: {title}</h3>
        {children}
      </main>

      <footer className="footer">
        © 2026 University Management System
      </footer>
    </div>
  );
}

export default MainLayout;