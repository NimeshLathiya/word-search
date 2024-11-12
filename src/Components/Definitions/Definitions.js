import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, catagery, lightMode }) => {
  return (
    <div className="meanings">
      {/*ANCHOR audio---------------------------- */}
      {meanings[0] && word && catagery === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: "10px" }}
          controls
        >
          Your browser does not support audio element.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? "#0000ff" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b> {def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example:</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms:</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
