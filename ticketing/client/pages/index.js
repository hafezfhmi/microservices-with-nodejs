import React from "react";
import axios from "axios";

const Index = ({ currentUser }) => {
  console.log(currentUser);

  return <div>Landing Page</div>;
};

Index.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }

  return {};
};

export default Index;
