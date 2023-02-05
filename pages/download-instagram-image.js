function Content() {
  const [inputURL, setInputURL] = React.useState(
    "https://www.instagram.com/p/Cjti4JcJBos"
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
      if (url.endsWith("/")) url = url.slice(0, -1);
      setImgURL([
        {
          size: "Large",
          url: url + "/media?size=l",
        },
        {
          size: "Medium",
          url: url + "/media?size=m",
        },
        {
          size: "Thumnail",
          url: url + "/media?size=t",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getThumbnailsURL();
  }, []);

  return (
    <>
      <h4 className="mb-4">Instagram Image Downloader</h4>

      <form method="post" action="#" className="clearfix">
        <div className="row form-row">
          <div className="form-group col-md-12">
            <label>Post URL</label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="https://www.instagram.com/p/Cjti4JcJBos"
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
            Get Image Links
          </button>
        </div>
      </form>

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
            Instagram Image Downloader is simple tool to help you get high
            quality instagram image by copy and paste video url to input, then
            it's will automaticaly show image links below.
            <br />
            Please enjoy!
          </p>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainContent")).render(<Content />);
