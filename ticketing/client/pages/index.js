import React from "react";
import axios from "axios";

const Index = ({ currentUser }) => {
  return <div>Landing Page</div>;
};

Index.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server!
  } else {
    // we are on the browser!
  }

  return {};
};

export default Index;
