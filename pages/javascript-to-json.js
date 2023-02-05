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
    // on change textarea
    if (e.target.value) setChars(e.target.value);
    else if (e.target.value === "") {
      setChars("");
      setResult("");
      return;
    }

    let output;
    let errorMsg = 'Syntax Error! "Invalid input"';
    let jsObject = e.target.value || chars;
    jsObject = jsObject.trim();

    if (!jsObject.startsWith("{") || !jsObject.endsWith("}")) {
      output = errorMsg;
    } else {
      try {
        eval(`jsObject = ${jsObject}`);
        output = JSON.stringify(jsObject, null, 2);
      } catch (error) {
        output = errorMsg;
      }
    }

    setResult(output);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  const stypeEditor = {
    color: "#d63384",
    background: "#f4f5f7",
    borderRadius: "10px",
    fontFamily: "monospace",
    fontSize: "1em",
    fontWeight: "400",
    minHeight: "240px",
    letterSpacing: "normal",
    lineHeight: "20px",
    padding: "20px",
    tabSize: 4,
  };

  return (
    <>
      <h4 className="">Convert Javascript Object to JSON</h4>

      <form className="row g-3">
        <div className="col-12 mt-3">
          <h4 className="float-start">Input :</h4>
          <button
            type="button"
            className="btn btn-danger me-3 fw-bold float-end"
            onClick={(e) => {
              setChars("");
              setResult("");
            }}
          >
            Clear
          </button>
        </div>
        <div className="">
          <textarea
            className="form-control"
            rows="18"
            placeholder={placeholderInput || "Javascript Object..."}
            onChange={covertToJson}
            value={chars}
            style={stypeEditor}
          ></textarea>
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
            rows="18"
            placeholder={placeholderOutput || "Result here..."}
            defaultValue={result}
            style={stypeEditor}
          />
        </div>
      </form>

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Javascript Object to JSON Online is a free online tool that turns a
            Javascript object into JSON text and stores that JSON text in a
            string. You can wirte or paste js object to input textarea and
            result will showing immediately on resutls box and it is
            ridiculously easy to use and the tool is completely free.
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
