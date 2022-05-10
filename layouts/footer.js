function Footer() {
  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/privacy" className="nav-link px-2 text-muted">
              Privacy & Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="/terms" className="nav-link px-2 text-muted">
              Terms & Conditions
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          © {new Date().getFullYear()} Dev-Toolkits
        </p>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainFooter")).render(<Footer />);
