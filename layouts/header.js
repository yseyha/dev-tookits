function Header() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/dev-toolkits"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src="https://i.ibb.co/12ycjph/2022-05-05-22-37-57.jpg"
            height="30"
          />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/dev-toolkits" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a
              href="/dev-toolkits/privacy"
              className="nav-link px-2 link-secondary"
            >
              Privacy & Policy
            </a>
          </li>
          <li>
            <a
              href="/dev-toolkits/terms"
              className="nav-link px-2 link-secondary"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="/dev-toolkits/contact"
              className="nav-link px-2 link-secondary"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <a
            type="button"
            href="https://commerce.coinbase.com/checkout/0d03d616-6859-4592-9dd4-cdb7838fa252"
            target="_blank"
            className="btn btn-primary"
            style={{ backgroundColor: "#b16b28", border: "#b16b28" }}
          >
            Buy me a coffee
          </a>
        </div>
      </header>
      <div className="text-center mt-5 mb-5">
        <img
          src="https://images.placeholders.dev/?width=1080&height=150&text=Advertise%20here&bgColor=%23f7f6f6&textColor=%236d6e71"
          className="d-block mx-auto rounded text-center img-fluid"
          loading="lazy"
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainHeader")).render(<Header />);
