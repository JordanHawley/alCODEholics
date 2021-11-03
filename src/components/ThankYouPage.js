import React from "react";

import { useHistory } from "react-router-dom";

const ThankYouPage = () => {
  const history = useHistory();

  return (
    <div
      style={{
        marginTop: "200px",
        marginLeft: "100px",
        marginRight: "100px",
        padding: "15px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(252, 124, 5)",
        boxShadow: "5px 5px 5px black"
      }}
    >
      <h1>
        Thank You So Much For Your Purchase! Your order has been processed and
        will be fulfilled as soon as possible!
      </h1>
      <button
        className="navButton"
        style={{
            margin: "15px",
            backgroundColor: "rgb(240, 69, 154)"
        }}
        onClick={() => {
          history.push("/alcohol");
        }}
      >
        Please continue to browse our selection!
      </button>
    </div>
  );
};

export default ThankYouPage;
