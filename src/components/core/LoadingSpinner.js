import React from "react";
import injectSheet from "react-jss";

const style = {
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: 1,
    margin: "-75px 0 0 -75px",
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    height: "120px",
    animation: "spin 2s linear infinite"
  }
};

const LoadingSpinner = ({ classes: { loader } }) => <div className={loader} />;

export default injectSheet(style)(LoadingSpinner);
