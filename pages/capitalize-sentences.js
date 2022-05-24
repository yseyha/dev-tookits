function Content() {
  const [chars, setChars] = React.useState("");
  const [result, setResult] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [textCase, setTextCase] = React.useState("");

  const capitalizeCase = (e) => {
    e.preventDefault();
    // Method 2
    var string = chars
      .trim()
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setResult(string);

    // Method 3 : using CSS text-transform
    setTextCase("text-capitalize");
  };

  const toSentense = (word) => {
    if (word.startsWith(" ")) {
      return " " + word.charAt(1).toUpperCase() + word.slice(2);
    } else if (word.startsWith("\n\n\n")) {
      return "\n\n\n" + word.charAt(2).toUpperCase() + word.slice(3);
    } else if (word.startsWith("\n\n")) {
      return "\n\n" + word.charAt(2).toUpperCase() + word.slice(3);
    } else if (word.startsWith("\n")) {
      return "\n" + word.charAt(2).toUpperCase() + word.slice(3);
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  const sentenceCase = (e) => {
    e.preventDefault();
    // Method 1
    var string = chars
      .trim()
      .toLowerCase()
      .split(".")
      .map((w) => toSentense(w))
      .join(".");

    string = string
      .split("?")
      .map((w) => toSentense(w))
      .join("?");

    setResult(string);
    setTextCase("");
  };

  const upperCase = (e) => {
    e.preventDefault();
    setResult(chars.toUpperCase());
    // Method 2 : using CSS text-transform
    setTextCase("text-uppercase");
  };

  const lowerCase = (e) => {
    e.preventDefault();
    setResult(chars.toLowerCase());
    // Method 2 : using CSS text-transform
    setTextCase("text-lowercase");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  return (
    <>
      <h2 className="mb-3">Capitalize Sentences</h2>

      <form className="row g-3">
        <div className="">
          <textarea
            className="form-control"
            rows="12"
            placeholder="Text here..."
            onChange={(e) => setChars(e.target.value)}
            value={chars}
          ></textarea>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={(e) => sentenceCase(e)}
          >
            Sentence case
          </button>
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={(e) => capitalizeCase(e)}
          >
            Capitalize Case
          </button>
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={(e) => upperCase(e)}
          >
            UPPER CASE
          </button>
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={(e) => lowerCase(e)}
          >
            lower case
          </button>
          <button
            type="button"
            className="btn btn-danger me-3 fw-bold"
            onClick={(e) => {
              setChars("");
              setResult("");
            }}
          >
            Clear
          </button>
        </div>
      </form>

      <form className="row g-3">
        <div className="col-12 mt-5">
          <h4 className="float-start">Results :</h4>
          <button
            type="button"
            className="btn btn-primary fw-bold float-end"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="">
          <textarea
            className={`form-control ${textCase}`}
            rows="12"
            placeholder="Results here..."
            defaultValue={result}
          />
        </div>
      </form>

      <div className="card bg-light mt-5 p-2 text-black-75">
        <div className="card-body">
          <h5 className="card-title">About this tool</h5>

          <p className="card-text">
            If you’ve received some text where everything is all caps then use
            this tool to quickly bring the text back to a readable state. Or
            other senarios like below:
            <ul className="mt-1">
              <li>
                Title Case - Capitalize only the words that should be
                capitalized according to the top tab style guide.
              </li>
              <li>
                Sentence Case - Capitalize only the first word of each sentence.
              </li>
              <li>
                Uppercase - Convert your title from lowercase to uppercase.{" "}
              </li>
              <li>
                Lowercase - Convert your title from uppercase to lowercase.{" "}
              </li>
              <li>First Letter - Capitalize the first letter of every word.</li>
            </ul>
          </p>
        </div>
      </div>

      <>
        {/* toast */}
        <div
          className={`toast align-items-center fade ${
            show ? "show" : ""
          } float-end position-fixed bottom-0 end-0 p-3 border-0 bg-transparent shadow-none`}
          style={{ zIndex: 11 }}
        >
          <div className="d-flex text-white bg-primary bg-opacity-75 rounded">
            <div className="toast-body">Copied to clipboard!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainContent")).render(<Content />);
