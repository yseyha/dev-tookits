function Footer() {
  return (
    <>
      <div className="text-center mt-5 mb-5">
        <img
          src="https://images.placeholders.dev/?width=1080&height=150&text=Advertise%20here&bgColor=%23f7f6f6&textColor=%236d6e71"
          className="d-block mx-auto rounded text-center img-fluid"
          loading="lazy"
        />
      </div>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/dev-toolkits" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/dev-toolkits/privacy.html"
              className="nav-link px-2 text-muted"
            >
              Privacy & Policy
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/dev-toolkits/terms.html"
              className="nav-link px-2 text-muted"
            >
              Terms & Conditions
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/dev-toolkits/contact.html"
              className="nav-link px-2 text-muted"
            >
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
