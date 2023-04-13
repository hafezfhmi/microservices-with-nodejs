import React from "react";

const Index = ({ color }) => {
  console.log("I am in the component", color);
  return <div>Landing Page</div>;
};

Index.getInitialProps = () => {
  console.log("I am on the server");

  return { color: "red" };
};

export default Index;
