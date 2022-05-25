function Content() {
  const [chars, setChars] = React.useState(
    "Text to Speech - TTS Online is a tool that convert your input text to voice. Then you can play and listen. It's simple and easy to use. Also you can set the language, voice type to your choice."
  );
  const [audio, setAudio] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [gender, setGender] = React.useState("female");
  const [lang, setLang] = React.useState("en-US");

  const covertTextToSpeech = async (e) => {
    e.preventDefault();
    setLoaded(true);
    setAudio(null);

    if (chars) {
      const response = await fetch(
        "https://api.epg-text-to-speech.demos.maynard.io/getSpeech",
        {
          method: "POST",
          body: JSON.stringify({
            TextPayload: chars,
            VoiceGender: gender,
            VoiceLanguageCode: lang,
            SessionKey: `${new Date().getTime()}`,
          }),
        }
      );

      const body = await response.json();
      if (body.audioURL) {
        setLoaded(false);
        setAudio(
          <audio autoplay="true" controlsFalse onEnded={(e) => setAudio(null)}>
            <source src={body.audioURL} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        );
        return;
      }
    }
    setLoaded(false);
  };
  return (
    <>
      <div className="col-12 mt-3 mb-3 clearfix">
        <h4 className="float-start">Text to Speech (TTS)</h4>
        <div class="float-end">
          <form class="row g-3">
            <div class="col">
              <button
                type="button"
                className="btn btn-primary float-end fw-bold"
                onClick={async (e) => {
                  setChars(await navigator.clipboard.readText());
                }}
              >
                Paste
              </button>
            </div>
            <div class="col">
              <select
                class="form-select"
                aria-label="Voice Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female" selected>
                  Female
                </option>
                <option value="neutral">Neutral</option>
              </select>
            </div>
            <div class="col w-auto">
              <select
                class="form-select"
                aria-label="Language"
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="en-US" selected>
                  English - US
                </option>
                <option value="en-GB">English - GB</option>
                <option value="es-ES">Spanish</option>
                <option value="pt-PT">Portuguese</option>
                <option value="fr-FR">Franch</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="zh-CN">Chinese</option>
                <option value="ru">Russian</option>
                <option value="bn">India</option>
                <option value="th-TH">Thailand</option>
                <option value="vi">Vietnamese</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <form className="row g-3">
        <div className="">
          <textarea
            className="form-control"
            id="countCharactersTextarea"
            rows="16"
            placeholder="Text here..."
            value={chars}
            onChange={(e) => setChars(e.target.value)}
          ></textarea>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className={`btn  me-3 fw-bold btn-success opacity-${
              loaded ? "50" : audio ? "100" : "100"
            }`}
            id="charsLenght"
            onClick={covertTextToSpeech}
          >
            {loaded ? "Loading..." : audio ? "Playing..." : "Speak Text"}
          </button>
          {audio ? (
            <button
              type="button"
              className="btn btn-danger fw-bold"
              id="charsLenght"
              onClick={(e) => setAudio(null)}
            >
              Stop
            </button>
          ) : null}
        </div>
      </form>

      {audio}

      <div class="card bg-light mt-5 p-2 text-black-75">
        <div class="card-body">
          <h5 class="card-title">About this tool</h5>
          <p class="card-text">
            Text to Speech - TTS Online is a tool that convert your input text
            to voice. Then you can play and listen. It's simple and easy to use.
            Also you can set the language, voice type to your choice.
          </p>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("MainContent")).render(<Content />);
