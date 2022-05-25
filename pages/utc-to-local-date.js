function Content() {
  const [utc, setUTC] = React.useState(new Date().toUTCString());
  const [localResult, setLocalResult] = React.useState("");

  const [local, setLocal] = React.useState("");
  const [iso, setISO] = React.useState(new Date().toISOString());

  const [show, setShow] = React.useState(false);

  const utcToLocalDate = (e) => {
    e.preventDefault();

    var result = new Date(e.target.value).toLocaleString();
    setLocalResult(result || "Invalid date");
    setUTC(e.target.value);
  };

  const isoToLocalDate = (e) => {
    e.preventDefault();
    var result = new Date(e.target.value).toLocaleString();
    setLocal(result || "Invalid date");
    setISO(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(localResult);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  const copyToClipboardISO = () => {
    navigator.clipboard.writeText(local);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, "3000");
  };

  return (
    <>
      <h4 className="mb-4">Convert UTC to Local date</h4>

      <form method="post" action="#" className="clearfix">
        <div className="row form-row">
          <div className="form-group col-md-6">
            <label>UTC Date</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder={new Date().toUTCString()}
              value={utc}
              onChange={utcToLocalDate}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Local Date</label>
            <input
              className="form-control mt-2"
              placeholder={new Date().toLocaleString()}
              value={localResult}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-primary fw-bold float-end"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </form>

      <h4 className="mt-5 mb-4">Convert ISO to Local date</h4>

      <form method="post" action="#" className="clearfix">
        <div className="row form-row">
          <div className="form-group col-md-6">
            <label>ISO Date</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder={new Date().toISOString()}
              value={iso}
              onChange={isoToLocalDate}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Local Date</label>
            <input
              className="form-control mt-2"
              placeholder={new Date().toLocaleString()}
              value={local}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-primary fw-bold float-end"
            onClick={copyToClipboardISO}
          >
            Copy
          </button>
        </div>
      </form>

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Convert UTC time to Local time Online is a free online tool that
            turns coordinated universal time to your local time. To convert you
            just paste or write on input text area and it's will covert
            automaticaly. Result will showing immediately on resutls box and it
            is ridiculously easy to use and the tool is completely free.
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
