function Content() {
  const [result, setResult] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChangeFile = (e) => {
    if (e.target.files[0].size > 50 * 1e6) {
      window.alert("Please upload a file smaller than 50MB");
      return false;
    } else {
      setLoading(true);
      setResult("Loading...");
      var result = "";
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          result = this.result;
          setResult(result.split("base64,")[1]);
          setLoading(false);
        },
        false
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const convertToBuffer = (e) => {
    e.preventDefault();
    console.log(e);
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
      <h2 className="mb-3">Covert File to Buffer</h2>

      <form className="row g-3 form-group files color" method="post" action="#">
        <div className="">
          <input
            type="file"
            className="form-control"
            onChange={handleChangeFile}
          />
        </div>
      </form>

      <form className="row g-3">
        <div className="col-12 mt-5">
          <h4 className="float-start">Output : </h4>
          {loading ? (
            <div className="ms-3 spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <></>
          )}
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
            className={`form-control`}
            rows="18"
            placeholder="Results here..."
            defaultValue={result}
            style={stypeEditor}
          />
        </div>
      </form>

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Convert File to Buffer Online is a free online tool that turns a
            file to buffer string or text. To convert you need to upload or drag
            a file to upload file area and it's will automaticaly covert to
            buffer string. Result will showing immediately on resutls box and it
            is ridiculously easy to use and the tool is completely free.
            <br />
            <br />
            <i>
              ***Note: You file will not upload to our server. All converting
              proccess is on your device.
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
