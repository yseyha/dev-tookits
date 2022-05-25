function Content() {
  const [chars, setChars] = React.useState("");
  const [result, setResult] = React.useState("");
  const [show, setShow] = React.useState(false);

  let options = {
    arrayFormat: "brackets",
    encode: false,
    skipNull: true,
    skipEmptyString: true,
  };

  const toUrlParams = (e) => {
    // on change textarea
    if (e.target.value) setChars(e.target.value);
    else if (e.target.value === "") {
      setChars("");
      setResult("");
      return;
    }

    let urlParams;
    try {
      urlParams = Qs.stringify(JSON.parse(e.target.value || chars), options);
    } catch (error) {
      urlParams = 'Syntax Error! "Invalid input"';
    }

    setResult(urlParams);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  const placeholderInput = `{
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}`;

  const placeholderOutput = `firstName=John&lastName=Doe&age=50&eyeColor=blue`;

  const stypeEditor = {
    color: "#d63384",
    // background: "#282a36",
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
      <h4 className="">Convert JSON to URL Params</h4>

      <form className="row g-3">
        <div className="col-12 mt-3">
          <h4 className="float-start">Input :</h4>
          <button
            type="button"
            className="btn btn-danger fw-bold float-end"
            onClick={(e) => {
              e.preventDefault();
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
            placeholder={placeholderInput}
            onChange={toUrlParams}
            value={chars}
            style={stypeEditor}
          ></textarea>
        </div>
      </form>

      <form className="row g-3">
        <div className="col-12 mt-5">
          <h4 className="float-start">Result :</h4>
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
            placeholder={placeholderOutput}
            defaultValue={result}
            style={stypeEditor}
          />
        </div>
      </form>

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Convert JSON to urlParams Online is a free online tool that turns a
            JSON to HTTP Query string. To convert you just paste or write on
            input text area and it's will covert automaticaly to url params.
            Result will showing immediately on resutls box and it is
            ridiculously easy to use and the tool is completely free.
            <br />
            <br />
            <i>
              ***Note: Your JSON data is secure. Our tool does not send your
              JSON data to our servers for conversion, the process is done
              completely in your web browser. That's what makes our tools safe
              and fast tool.
            </i>
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
