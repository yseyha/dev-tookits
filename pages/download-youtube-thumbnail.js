function Content() {
  const [inputURL, setInputURL] = React.useState(
    "https://youtu.be/Ct6BUPvE2sM"
  );
  const [imgURL, setImgURL] = React.useState({});

  const getThumbnailsURL = (e) => {
    let url = "";
    e && e.preventDefault();
    if (e && e.target && e.target.value) {
      url = e.target.value;
      setInputURL(e.target.value);
    } else url = inputURL;

    try {
      const b = "https://youtu.be/";
      const base_url = "https://img.youtube.com/vi/";

      if (url.includes("watch?v=")) url = url.split("watch?v=")[1];
      else if (url.startsWith(b)) url = url.replace(b, "");

      if (url.includes("?")) url = url.split("?")[0];
      if (url.includes("&")) url = url.split("&")[0];

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

  React.useEffect(() => {
    getThumbnailsURL();
  }, []);

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
              placeholder="https://youtu.be/Ct6BUPvE2sM"
              onChange={getThumbnailsURL}
            />
          </div>
        </div>

        <div className="col-auto mt-3">
          <button
            type="button"
            className="btn btn-primary fw-bold"
            value={inputURL}
            onClick={getThumbnailsURL}
          >
            Get Thumbnails
          </button>
        </div>
      </form>

      {/* <h4 className="mt-5">Available Thumbnails :</h4> */}

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
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainContent")).render(<Content />);
