function SideBar() {
  return (
    <>
      <h4 className="mb-3">More Tools</h4>
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="pagez" href="/">
          Count Characters
        </a>
        <a
          className="nav-link"
          aria-current="pagez"
          href="/capitalize-sentenses"
        >
          Capitalize Sentences
        </a>
        <a className="nav-link" href="/javascript-to-json">
          Convert Javascript Object to JSON
        </a>
        <a className="nav-link" href="/file-to-buffer">
          Convert Files to Buffer
        </a>
        <a className="nav-link disabled">JSON to Params URL</a>
        <a className="nav-link" href="/utc-to-local-date">
          UTC date to Local date
        </a>
//         <a className="nav-link disabled">QR Code Generator</a>
        <a className="nav-link disabled">Password Generator</a>
//         <a className="nav-link disabled">Encrypt & Decrypt Text</a>
        {/* <div className="text-center mt-5">
          <img
            src="https://images.placeholders.dev/?width=350&height=550&text=&fontSize=36&bgColor=%23f7f6f6&textColor=%236d6e71"
            className="d-block mx-auto rounded text-center img-fluid"
            loading="lazy"
          />
        </div> */}
      </nav>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("LeftSideBar")).render(<SideBar />);
