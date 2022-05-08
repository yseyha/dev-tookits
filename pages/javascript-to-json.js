function Content() {
  const [chars, setChars] = React.useState("");
  const [result, setResult] = React.useState("");
  const [show, setShow] = React.useState(false);

  const placeholderInput = `{
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}`;

  const placeholderOutput = `{
    "firstName": "John",
    "lastName": "Doe",
    "age": 50,
    "eyeColor": "blue"
}`;

  const covertToJson = (e) => {
    if (e.target.value) setChars(e.target.value);
    else e.preventDefault();

    var jsObject = chars.trim().split(" ").join("");

    try {
      if (!jsObject.startsWith("{") || !jsObject.endsWith("}")) {
        throw "Invalid Javascript Object!";
      }
      eval(`jsObject = ${jsObject}`);
      // jsObject = JSON.parse(jsObject);
      setResult(JSON.stringify(jsObject, null, 4));
    } catch (error) {
      console.log(error);
      setResult("Syntax Error!");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  const stypeEditor = {
    color: "#fd7e14",
    background: "#282a36",
    borderRadius: "6px",
    fontFamily: "monospace",
    fontSize: "0.9em",
    fontWeight: "400",
    minHeight: "240px",
    letterSpacing: "normal",
    lineHeight: "20px",
    padding: "10px",
    tabSize: 4,
  };

  return (
    <>
      <h2 className="mb-3">Convert Javascript Object to JSON</h2>

      <form className="row g-3">
        <div className="">
          <textarea
            className="form-control"
            rows="12"
            placeholder={placeholderInput || "Javascript Object..."}
            onChange={(e) => covertToJson(e)}
            value={chars}
            style={stypeEditor}
          ></textarea>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={(e) => covertToJson(e)}
          >
            Convert
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
            className="form-control"
            rows="12"
            placeholder={placeholderOutput || "Result here..."}
            defaultValue={result}
            style={stypeEditor}
          />
        </div>
      </form>

      {/* <div className="highlight mt-3" style={stypeEditor}>
        <pre className="pre-scrollable">
        <code className="language-json" datalang="json">
          {result}
        </code>
        </pre>
      </div> */}

      {/* <div className="text-center mt-5">
        <img
          src="https://images.placeholders.dev/?width=1080&height=150&text=Advertise%20here&bgColor=%23f7f6f6&textColor=%236d6e71"
          className="d-block mx-auto rounded text-center img-fluid"
          loading="lazy"
        />
      </div> */}
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
