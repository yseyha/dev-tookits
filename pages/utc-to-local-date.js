function Content() {
  const [utc, setUTC] = React.useState("");
  const [localResult, setLocalResult] = React.useState("");

  const [local, setLocal] = React.useState("");
  const [iso, setISO] = React.useState("");

  const [show, setShow] = React.useState(false);

  const utcToLocalDate = (e) => {
    if (e.preventDefault() && e.target.value) {
      setUTC(e.target.value);
      var result = new Date(e.target.value).toLocaleString();
      setLocalResult(result || "Invalid date");
    } else {
      var now = new Date();
      setUTC(now.toUTCString());
      setLocalResult(now.toLocaleString());
    }
  };

  const localToUTC = (e) => {
    e.preventDefault();
    setLocalResult(e.target.value);
    var result = new Date(e.target.value).toUTCString();
    setUTC(result || "Invalid date");
  };

  const isoToLocalDate = (e) => {
    if (e.preventDefault() && e.target.value) {
      setISO(e.target.value);
      var result = new Date(e.target.value).toLocaleString();
      setLocal(result || "Invalid date");
    } else {
      var now = new Date();
      setISO(now.toISOString());
      setLocal(now.toLocaleString());
    }
  };

  const localToISO = (e) => {
    e.preventDefault();
    setLocal(e.target.value);
    var result = new Date(e.target.value).toISOString();
    setISO(result || "Invalid date");
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
      <h2 className="mb-4">Convert UTC to Local date</h2>

      <form method="post" action="#">
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
              onChange={localToUTC}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-success me-3 fw-bold"
            onClick={utcToLocalDate}
          >
            Set Current UTC Date
          </button>
          <button
            type="button"
            className="btn btn-primary fw-bold float-end"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </form>

      <hr className="mt-5"></hr>

      <h2 className="mt-5 mb-4">Convert ISO to Local date</h2>

      <form method="post" action="#">
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
              onChange={localToISO}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-info me-3 fw-bold"
            onClick={isoToLocalDate}
          >
            Set Current ISO Date
          </button>
          <button
            type="button"
            className="btn btn-primary fw-bold float-end"
            onClick={copyToClipboardISO}
          >
            Copy
          </button>
        </div>
      </form>

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
