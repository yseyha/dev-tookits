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
        <a className="nav-link" href="/json-to-url-param">
          JSON to Params URL
        </a>
        <a className="nav-link" href="/utc-to-local-date">
          UTC date to Local date
        </a>
        <a className="nav-link" href="/text-to-speech">
          Convert Text to Speech
        </a>
      </nav>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("LeftSideBar")).render(<SideBar />);
