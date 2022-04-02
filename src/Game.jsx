import React from "react";
import { Container } from "react-bootstrap";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Game() {
  let number = Math.floor(Math.random() * 3) + 1;

  return (
    <React.Fragment>
      <Container className="p-5">
        <h1 className="text-center">
          One of these is a rickroll. Eliminate all the links that aren't!
        </h1>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          {" "}
          <div
            className={`bg-${
              number % 3 === 0
                ? "danger"
                : number % 3 === 1
                ? "success"
                : "warning"
            } rounded p-3 m-3 link-dark text-center linked`}
          >
            https://www.youtube.com/watch?v=dQw4
            {number === 1 ? "w9Wg" : makeid(4)}XcQ
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <div
            className={`bg-${
              number % 3 === 0
                ? "warning"
                : number % 3 === 1
                ? "danger"
                : "success"
            } rounded p-3 m-3 link-dark text-center linked`}
          >
            https://www.youtube.com/watch?v=dQw4
            {number === 2 ? "w9Wg" : makeid(4)}XcQ
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <div
            className={`bg-${
              number % 3 === 0
                ? "success"
                : number % 3 === 1
                ? "warning"
                : "danger"
            } rounded p-3 m-3 link-dark text-center linked`}
          >
            https://www.youtube.com/watch?v=dQw4
            {number === 3 ? "w9Wg" : makeid(4)}XcQ
          </div>
        </a>
      </Container>
    </React.Fragment>
  );
}

export default Game;
