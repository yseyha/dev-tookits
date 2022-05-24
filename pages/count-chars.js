function Content() {
  const [chars, setChars] = React.useState(0);
  const [words, setWords] = React.useState(0);
  const [lines, setLines] = React.useState(0);
  const [size, setSize] = React.useState("0 byte");
  const countChar = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setChars(text.length);

    const textSize = new Blob([text]).size;
    setSize(textSize === 1 ? `${textSize} byte` : `${textSize} bytes`);
    if (textSize > 1e6) {
      setSize(`${(textSize / 1e6).toFixed(2)} Mb`);
      // Megabytes
    } else if (textSize > 1e3) {
      setSize(`${(textSize / 1e3).toFixed(2)} Kb`);
      // Kilobytes
    }

    if (text.length > 0) {
      setWords(text.trim().split(/\s+/).length);
      setLines(text.split("\n").length);
    } else {
      setWords(0);
      setLines(0);
      setSize("0 byte");
    }
  };
  return (
    <>
      <h2 className="mb-3">Count Characters</h2>

      <form className="row g-3">
        <div className="">
          <textarea
            className="form-control"
            id="countCharactersTextarea"
            rows="16"
            placeholder="Text here..."
            onChange={(e) => countChar(e)}
          ></textarea>
        </div>
        <div className="col-auto">
          <b>Characters: </b>
          <button
            type="button"
            className="btn btn-success me-4 fw-bold"
            disabled
            id="charsLenght"
          >
            {chars}
          </button>
          <b>Words: </b>
          <button
            type="button"
            className="btn btn-success me-4 fw-bold"
            disabled
          >
            {words}
          </button>
          <b>Lines: </b>
          <button
            type="button"
            className="btn btn-success me-4 fw-bold"
            disabled
          >
            {lines}
          </button>
          <b>Size: </b>
          <button
            type="button"
            className="btn btn-success me-4 fw-bold"
            disabled
          >
            {size}
          </button>
        </div>
      </form>

    <h4 className="mt-5">About this tool</h4>
    <p>
      Character Count Online is a free online character, word, sentense counting and character size tool.
      All results are showing immediately and it is ridiculously easy to use and the tool is completely free.
    </p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainContent")).render(<Content />);
