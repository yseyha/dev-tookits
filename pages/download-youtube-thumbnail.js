function Content() {
  const [videoURL, setVideoURL] = React.useState("");
  const [imgURL, setImgURL] = React.useState({ HD: "", SD: "", SM: "" });
  const [show, setShow] = React.useState(false);

  const getThumbnailsURL = (e) => {
    e.preventDefault();
    try {
      let url = e.target.value;
      const remove_url = "https://www.youtube.com/watch?v=";
      const b = "https://youtu.be/";
      const base_url = "https://img.youtube.com/vi/";

      if (url.includes("watch?v=")) url = url.split("watch?v=")[1];
      else if (url.startsWith(b)) url = url.replace(b, "");

      if (url.includes("?")) url = url.split("?")[0];
      if (url.includes("&")) url = url.split("&")[0];

      console.log(url);

      setImgURL([
        {
          size: "1280x720",
          url: base_url + url + "/maxresdefault.jpg",
        },
        {
          size: "640x480",
          url: base_url + url + "/sddefault.jpg",
        },
        {
          size: "480x360",
          url: base_url + url + "/hqdefault.jpg",
        },
        {
          size: "320x180",
          url: base_url + url + "/mqdefault.jpg",
        },
        {
          size: "120x90",
          url: base_url + url + "/default.jpg",
        },
      ]);
    } catch (error) {
      log.error(error);
    }
  };

  return (
    <>
      <h4 className="mb-4">Youtube Thumbnail Downloader</h4>

      <form method="post" action="#" className="clearfix">
        <div className="row form-row">
          <div className="form-group col-md-12">
            <label>Video URL</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="https://www.youtube.com/watch?v=Hx6WCSe6-u8"
              onChange={getThumbnailsURL}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-primary fw-bold"
            defaultValue="https://youtube.com/watch?v=WNL3zDgWZc0"
            onClick={getThumbnailsURL}
          >
            Get Thumbnails
          </button>
        </div>
      </form>

      <h4 className="mt-5">Available Thumbnails :</h4>

      <div className="row">
        {imgURL.length &&
          imgURL.map((e) => {
            return (
              <div className="col-md-12 text-center">
                <p className="fw-bold mt-5 my-1">
                  <a href={e.url} target="_blank">
                    Image Size : {e.size}
                  </a>
                </p>
                <img src={e.url} class="img-fluid rounded"></img>
              </div>
            );
          })}
      </div>

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Youtube Thumbnail Downloader is simple tool to help you get youtube
            thumbnail or featured image by copy and paste video url to input,
            then it's will automaticaly show images on below text{" "}
            <code>Available Thumbnails</code>.
            <br />
            Please enjoy!
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
