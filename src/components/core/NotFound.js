import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const NotFound = () =>
  <div>
    <h1>404 Not Found</h1>
    <p>Sorry, an error has occured: requested page not found.</p>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <RaisedButton>Take me Home</RaisedButton>
      <RaisedButton>Contact Support</RaisedButton>
    </div>
  </div>;

export default NotFound;
