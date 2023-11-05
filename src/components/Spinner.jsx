import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  const [loading, setLoading] = useState("false");
  const [newstate, setNewState] = useState(false);

  function displayContent() {
    setLoading(true);
    setNewState(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div className="App">
      {loading && newstate ? (
        <div>
          <ClipLoader
            color={"#D0021B"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {newstate ? (
            <div>
              <h1>Welcome to react spinnners</h1>
              <p className="paraStyle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat ex doloribus eum expedita sunt vero, provident a nam
                repudiandae iusto modi accusamus suscipit error quo temporibus.
              </p>
              <button onClick={displayContent} className="btnStyle">
                Click
              </button>
            </div>
          ) : (
            <>
              <h1>Click to Fetch the content</h1>
              <button onClick={displayContent} className="btnStyle">
                Click
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
